import cluster from "cluster";
import { dynamicBench } from "./dynamicBench";
// import { cellxbench } from "./cellxBench";
import { sbench } from "./sBench";
import { frameworkInfo } from "./config";
import { logPerfResult, perfReportHeaders } from "./util/perfLogging";
import { molBench } from "./molBench";
import { kairoBench } from "./kairoBench";
import { FrameworkInfo } from "./util/frameworkTypes";
import { writeFileSync } from "fs";

async function testFramework(frameworkTestPromise: () => Promise<FrameworkInfo>) {
  try {
    (globalThis as any).__DEV__ = true;

    const frameworkTest = await frameworkTestPromise();
    const { framework } = frameworkTest;
    await kairoBench(framework);
    await molBench(framework);
    sbench(framework);

    // MobX, Valtio, and Svelte fail this test currently, so disabling it for now.
    // @see https://github.com/mobxjs/mobx/issues/3926
    // @see https://github.com/sveltejs/svelte/discussions/13277
    // cellxbench(framework);

    await dynamicBench(frameworkTest);

    process.exit(0);
  } catch (err: any) {
    console.error(err);
    process.exit(1);
  }
}

async function main() {
  logPerfResult(perfReportHeaders());

  const frameworkSummary = new Map<string, { time: number; tests: { test: string; time: number }[] }>();
  cluster.on("message", (_, message) => {
    logPerfResult({
      framework: message.framework,
      test: message.test,
      time: message.time.toFixed(2),
    });
    let framework = frameworkSummary.get(message.framework);
    if (!framework) {
      framework = { time: 0, tests: [] };
      frameworkSummary.set(message.framework, framework);
    }
    framework.time += message.time;
    framework.tests.push({ test: message.test, time: message.time });
  });

  const logSummary = () => {
    const summary = [...frameworkSummary.entries()]
      .map(([framework, { time, tests }]) => ({ framework, time: time / tests.length, tests }))
      .sort(({ time: average1 }, { time: average2 }) => average1 - average2);
    if (summary.length === 0) {
      return;
    }
    console.log("");
    logPerfResult(perfReportHeaders());
    for (const { framework, time: average, tests } of summary) {
      logPerfResult({
        framework,
        test: `Average (${tests.length} tests)`,
        time: average.toFixed(2),
      });
    }
    console.log("");
    writeFileSync("results.js", `globalThis.BENCHMARK_RESULTS = ${JSON.stringify(summary, null, "\t")};`);
  };
  process.on("SIGUSR1", logSummary);
  process.on("SIGINT", () => process.exit(1));
  process.on("SIGTERM", () => process.exit(1));
  process.on("exit", logSummary);

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
}

if (cluster.isPrimary) {
  main();
} else {
  testFramework(frameworkInfo[+process.env.FRAMEWORK_ID!]);
}
