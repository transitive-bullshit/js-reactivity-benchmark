import { retain } from "../util/cleanup";
import { ReactiveFramework } from "../util/reactiveFramework";
import { signal, computed, effect, batch } from "@pravosleva/reactive-engine";

export const reactiveEngineFramework: ReactiveFramework = {
  name: "@pravosleva/reactive-engine",

  signal: (initialValue) => {
    const s = signal(initialValue);
    return {
      read: () => s.value,
      write: (v) => {
        s.value = v;
      },
    };
  },

  computed: (fn) => {
    const c = computed(fn);
    return {
      read: () => c.value,
    };
  },

  effect: (fn) => {
    const dispose = effect(fn);
    return retain(() => {
      if (typeof dispose === "function") {
        dispose();
      }
    });
  },

  withBatch: (fn) => {
    return batch(fn);
  },

  withBuild: (fn) => {
    return fn();
  },
};
