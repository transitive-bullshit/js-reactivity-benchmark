// Stable CLI identifiers and the actual packages measured by each adapter.
export const registry = {
  alien: ["alien-signals", "alien-signals"],
  angular: ["@angular/signals", "@angular/core"],
  legend: ["Legend State", "@legendapp/state"],
  mobx: ["MobX", "mobx"],
  mol: ["$mol_wire", "mol_wire_lib"],
  oby: ["Oby", "oby"],
  pota: ["Pota", "pota"],
  xreactivity: ["x-reactivity", "@solidjs/signals"],
  preact: ["Preact Signals", "@preact/signals-core"],
  polyfill: ["TC39 Signals Polyfill", "signal-polyfill"],
  solid: ["SolidJS", "solid-js"],
  svelte: ["Svelte v5", "svelte"],
  tansu: ["@amadeus-it-group/tansu", "@amadeus-it-group/tansu"],
  tldraw: ["@tldraw/state", "@tldraw/state"],
  usignal: ["uSignal", "usignal"],
  vue: ["@vue/reactivity", "@vue/reactivity"],
  reactiveEngine: [
    "@pravosleva/reactive-engine",
    "@pravosleva/reactive-engine",
  ],
} as const;
export type FrameworkId = keyof typeof registry;
export const suites = ["kairo", "mol", "s", "dynamic", "cellx"] as const;
export type Suite = (typeof suites)[number];

// Latest stable Legend State passes adapter checks but not the large common graphs.
export const defaultFrameworks = (
  Object.keys(registry) as FrameworkId[]
).filter((id) => id !== "legend");
