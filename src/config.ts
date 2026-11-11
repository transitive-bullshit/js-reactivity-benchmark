import { TestConfig, FrameworkInfo } from "./util/frameworkTypes";

import { potaFramework } from "./frameworks/pota";
import { xReactivityFramework } from "./frameworks/xReactivity";
import { alienFramework } from "./frameworks/alienSignals";
import { angularFramework } from "./frameworks/angularSignals";
import { mobxFramework } from "./frameworks/mobx";
import { tc39SignalsFramework } from "./frameworks/tc39Signals";
import { molWireFramework } from "./frameworks/molWire";
import { obyFramework } from "./frameworks/oby";
import { preactSignalFramework } from "./frameworks/preactSignals";
import { tldrawFramework } from "./frameworks/tldraw";
import { legendFramework } from "./frameworks/legend";
import { solidFramework } from "./frameworks/solid";
import { usignalFramework } from "./frameworks/uSignal";
import { vueReactivityFramework } from "./frameworks/vueReactivity";
import { svelteFramework } from "./frameworks/svelte";
import { tansuFramework } from "./frameworks/tansu";
import { reactiveEngineFramework } from "./frameworks/reactiveEngine";

export const frameworkInfo: FrameworkInfo[] = [
  { framework: reactiveEngineFramework, testPullCounts: true },
  { framework: legendFramework, testPullCounts: false },
  { framework: potaFramework },
  { framework: xReactivityFramework },
  { framework: alienFramework, testPullCounts: true },
  { framework: preactSignalFramework, testPullCounts: true },
  { framework: svelteFramework, testPullCounts: true },
  { framework: tc39SignalsFramework, testPullCounts: true },
  { framework: tansuFramework, testPullCounts: true },
  { framework: angularFramework, testPullCounts: true },
  { framework: molWireFramework, testPullCounts: true },
  { framework: obyFramework, testPullCounts: true },
  { framework: tldrawFramework, testPullCounts: true },
  { framework: solidFramework },
  { framework: usignalFramework, testPullCounts: true },
  { framework: vueReactivityFramework, testPullCounts: true },
  { framework: mobxFramework, testPullCounts: false },
];

export const perfTests: TestConfig[] = [
  {
    name: "simple component",
    width: 10,
    staticFraction: 1,
    nSources: 2,
    totalLayers: 5,
    readFraction: 0.2,
    iterations: 600000,
    expected: {
      sum: 19199828,
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
      sum: 302310477860,
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
    },
  },
];
