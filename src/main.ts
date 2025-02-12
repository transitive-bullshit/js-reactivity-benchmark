import cluster from "cluster";
import os from "os";
import { frameworkInfo, executions } from "./configFrameworks";
import { logPerfResult, logPerfHeaders } from "./util/perfLogging";
import { writeFileSync } from "fs";
import { testFramework } from "./index";

const average = (times: number[]) => times.reduce((a, b) => a + b, 0) / times.length;

async function main() {
  const system = {
    engine: process.versions,
    os: {
      platform: os.platform(),
      type: os.type(),
      release: os.release(),
      version: os.version(),
    },
    hardware: {
      machine: os.machine(),
      cpus: os.cpus().map(({ model }) => model),
    },
  };
  const startTime = Date.now();
  logPerfHeaders();

  const frameworkSummary = new Map<string, Record<string, number[]>>();
  cluster.on("message", (_, message) => {
    logPerfResult({
      framework: message.framework,
      test: message.test,
      time: message.time,
    });
    let framework = frameworkSummary.get(message.framework);
    if (!framework) {
      framework = {};
      frameworkSummary.set(message.framework, framework);
    }
    let test = framework[message.test];
    if (!test) {
      test = [];
      framework[message.test] = test;
    }
    test.push(message.time);
  });

  const logSummary = () => {
    const summary = [...frameworkSummary.entries()]
      .map(([framework, tests]) => {
        const averages = Object.values(tests).map(average);
        return { framework, testsCount: averages.length, average: average(averages), tests };
      })
      .sort(({ average: average1 }, { average: average2 }) => average1 - average2);
    if (summary.length === 0) {
      return;
    }
    console.log("");
    logPerfHeaders();
    for (const { framework, average, testsCount } of summary) {
      logPerfResult({
        framework,
        test: `Average (${testsCount} tests)`,
        time: average,
      });
    }
    console.log("");
    const endTime = Date.now();
    writeFileSync(
      "results.js",
      `globalThis.BENCHMARK_RESULTS = ${JSON.stringify(
        {
          startTime,
          endTime,
          system,
          results: summary,
        },
        null,
        "\t"
      )};`
    );
  };
  process.on("SIGUSR1", logSummary);
  process.on("SIGINT", () => process.exit(1));
  process.on("SIGTERM", () => process.exit(1));
  process.on("exit", logSummary);

  for (let n = 0; n < executions; n++) {
    for (let i = 0, l = frameworkInfo.length; i < l; i++) {
      await new Promise<void>((resolve, reject) =>
        cluster.fork({ FRAMEWORK_ID: i }).addListener("exit", (code, signal) => {
          if (code === 0) {
            resolve();
          } else {
            reject(new Error(`Framework test failed with code ${code} and signal ${signal}`));
          }
        })
      );
    }
    logSummary();
  }
}

if (cluster.isPrimary) {
  main();
} else {
  (async () => {
    try {
      const framework = await frameworkInfo[+process.env.FRAMEWORK_ID!]();
      await testFramework(framework, process.send!.bind(process));
      process.exit(0);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
}
