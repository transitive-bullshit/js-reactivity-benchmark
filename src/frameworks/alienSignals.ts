import { getDefaultSystem } from "alien-signals/esm";
import { ReactiveFramework } from "../util/reactiveFramework";

const { signal, computed, effect, startBatch, endBatch } = getDefaultSystem();

export const alienFramework: ReactiveFramework = {
  name: "alien-signals",
  signal: (initial) => {
    const data = signal(initial);
    return {
      read: data,
      write: data,
    };
  },
  computed: (fn) => {
    return {
      read: computed(fn),
    };
  },
  effect: effect,
  withBatch: (fn) => {
    startBatch();
    fn();
    endBatch();
  },
  withBuild: (fn) => fn(),
};
