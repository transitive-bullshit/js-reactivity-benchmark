import { TestConfig, FrameworkInfo } from "./util/frameworkTypes";

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

export const perfTests: TestConfig[] = [
  {
    name: "simple component",
    width: 10, // can't change for decorator tests
    staticFraction: 1, // can't change for decorator tests
    nSources: 2, // can't change for decorator tests
    totalLayers: 5,
    readFraction: 0.2,
    iterations: 600000,
    expected: {
      sum: 19199832,
      count: 2640004,
    },
  },
  {
    name: "dynamic component",
    width: 10,
    totalLayers: 10,
    staticFraction: 3 / 4,
    nSources: 6,
    readFraction: 0.2,
    iterations: 15000,
    expected: {
      sum: 302310477864,
      count: 1125003,
    },
  },
  {
    name: "large web app",
    width: 1000,
    totalLayers: 12,
    staticFraction: 0.95,
    nSources: 4,
    readFraction: 1,
    iterations: 7000,
    expected: {
      sum: 29355933696000,
      count: 1473791,
    },
  },
  {
    name: "wide dense",
    width: 1000,
    totalLayers: 5,
    staticFraction: 1,
    nSources: 25,
    readFraction: 1,
    iterations: 3000,
    expected: {
      sum: 1171484375000,
      count: 735756,
    },
  },
  {
    name: "deep",
    width: 5,
    totalLayers: 500,
    staticFraction: 1,
    nSources: 3,
    readFraction: 1,
    iterations: 500,
    expected: {
      sum: 3.0239642676898464e241,
      count: 1246502,
    },
  },
  // Several frameworks hang on this test, so disabling it for now.
  // @see https://github.com/vuejs/core/issues/11928
  // {
  //   name: "very dynamic",
  //   width: 100,
  //   totalLayers: 15,
  //   staticFraction: 0.5,
  //   nSources: 6,
  //   readFraction: 1,
  //   iterations: 2000,
  //   expected: {
  //     sum: 15664996402790400,
  //     count: 1078671,
  //   },
  // },
];
