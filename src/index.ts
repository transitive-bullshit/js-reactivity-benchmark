import cluster from "cluster";
import { dynamicBench } from "./dynamicBench";
// import { cellxbench } from "./cellxBench";
import { sbench } from "./sBench";
import { frameworkInfo } from "./config";
import { logPerfResult, perfReportHeaders } from "./util/perfLogging";
import { molBench } from "./molBench";
import { kairoBench } from "./kairoBench";
import { FrameworkInfo } from "./util/frameworkTypes";

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
