import {
  computed,
  effect,
  EffectScope,
  effectScope,
  signal,
  System,
} from "alien-signals";
import { ReactiveFramework } from "../util/reactiveFramework";

let scope: EffectScope | undefined;

export const alienFramework: ReactiveFramework = {
  name: "alien-signals",
  signal: (initial) => {
    const data = signal(initial);
    return {
      read: () => data.get(),
      write: (v) => data.set(v),
    };
  },
  computed: (fn) => {
    const c = computed(fn);
    return {
      read: () => c.get(),
    };
  },
  effect: (fn) => effect(fn),
  withBatch: (fn) => {
    System.startBatch();
    fn();
    System.endBatch();
  },
  withBuild: (fn) => {
    scope?.stop();
    scope = effectScope();
    return scope.run(fn);
  },
};
