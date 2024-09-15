import { dynamicBench } from "./dynamicBench";
import { frameworkInfo } from "./config";
import { logPerfResult, perfReportHeaders } from "./util/perfLogging";

async function main() {
  logPerfResult(perfReportHeaders());
  // (globalThis as any).__DEV__ = true;

  for (const frameworkTest of frameworkInfo) {
    await dynamicBench(frameworkTest);
  }
}

main();
