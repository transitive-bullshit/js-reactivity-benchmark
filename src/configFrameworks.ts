import { FrameworkInfo } from "./util/frameworkTypes";

export let executions = 3;

export const frameworkInfo: (() => Promise<FrameworkInfo>)[] = [
  async () => ({ framework: (await import("./frameworks/alienSignals")).alienFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/preactSignals")).preactSignalFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/svelte")).svelteFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/tc39-proposal-signals-stage-0")).tc39SignalsProposalStage0, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/reactively")).reactivelyFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/s")).sFramework }),
  async () => ({ framework: (await import("./frameworks/tansu")).tansuFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/angularSignals")).angularFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/molWire")).molWireFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/oby")).obyFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/signia")).signiaFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/solid")).solidFramework }),
  async () => ({ framework: (await import("./frameworks/uSignal")).usignalFramework, testPullCounts: true }),
  async () => ({ framework: (await import("./frameworks/vueReactivity")).vueReactivityFramework, testPullCounts: true }),
  // NOTE: MobX currently hangs on some of the `dynamic` tests and `cellx` tests, so disable it if you want to run them. (https://github.com/mobxjs/mobx/issues/3926)
  async () => ({ framework: (await import("./frameworks/mobx")).mobxFramework, testPullCounts: false }),

  // --- Disabled frameworks ---
  // NOTE: the compostate adapter is currently broken and unused.
  // async () => ({ framework: (await import("./frameworks/compostate")).compostateFramework }),
  // NOTE: the kairo adapter is currently broken and unused.
  // async () => ({ framework: (await import("./frameworks/kairo")).kairoFramework, testPullCounts: true }),
  // NOTE: Valtio currently hangs on some of the `dynamic` tests, so disable it if you want to run them. (https://github.com/pmndrs/valtio/discussions/949)
  // async () => ({ framework: (await import("./frameworks/valtio")).valtioFramework }),
];
