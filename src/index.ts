import { dynamicBench } from "./dynamicBench";
// import { cellxbench } from "./cellxBench";
import { sbench } from "./sBench";
import { molBench } from "./molBench";
import { kairoBench } from "./kairoBench";
import { FrameworkInfo } from "./util/frameworkTypes";
import { PerfResultCallback } from "./util/perfResult";

export { logPerfResult, logPerfHeaders } from "./util/perfLogging";
export { FrameworkInfo };
export { Computed, ReactiveFramework, Signal } from "./util/reactiveFramework";

export async function testFramework(frameworkTest: FrameworkInfo, resultCallback: PerfResultCallback) {
  (globalThis as any).__DEV__ = true;

  const { framework } = frameworkTest;
  await kairoBench(framework, resultCallback);
  await molBench(framework, resultCallback);
  sbench(framework, resultCallback);

  // MobX, Valtio, and Svelte fail this test currently, so disabling it for now.
  // @see https://github.com/mobxjs/mobx/issues/3926
  // @see https://github.com/sveltejs/svelte/discussions/13277
  // cellxbench(framework, resultCallback);

  await dynamicBench(frameworkTest, resultCallback);
}
