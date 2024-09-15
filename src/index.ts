import { cellxbench } from "./cellxBench";
// import { dynamicBench } from "./dynamicBench";
import { frameworkInfo } from "./config";
import { logPerfResult, perfReportHeaders } from "./util/perfLogging";

async function main() {
  logPerfResult(perfReportHeaders());
  // (globalThis as any).__DEV__ = true;

  // Vue reactivity hangs on this stress test, which is simpler and should be easier to debug.
  for (const { framework } of frameworkInfo) {
    cellxbench(framework);
  }

  // Vue reactivity hangs on this stress test as well
  // for (const frameworkTest of frameworkInfo) {
  //   await dynamicBench(frameworkTest);
  // }
}

main();
