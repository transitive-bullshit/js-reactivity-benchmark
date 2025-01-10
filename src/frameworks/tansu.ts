import { ReactiveFramework } from "../util/reactiveFramework";
import { writable, computed, batch } from "@amadeus-it-group/tansu";

export const tansuFramework: ReactiveFramework = {
  name: "@amadeus-it-group/tansu",
  signal: (initialValue) => {
    const w = writable(initialValue);
    return {
      write: w.set,
      read: w,
    };
  },
  computed: (fn) => {
    const c = computed(fn);
    return {
      read: c,
    };
  },
  effect: (fn) => computed(fn).subscribe(() => {}),
  withBatch: batch,
  withBuild: (fn) => fn(),
};
