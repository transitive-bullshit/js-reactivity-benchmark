import {
  computed,
  Dependency,
  effect,
  effectScope,
  EffectScope,
  signal,
  System,
} from "alien-signals";
import { ReactiveFramework } from "../util/reactiveFramework";

let scope: EffectScope | undefined;

const useEffectScope = false;
const useStrictPropagation = false;

if (useStrictPropagation) {
  Dependency.setPropagationMode('strict');
}

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
    if (useEffectScope) {
      scope?.stop();
      scope = effectScope();
      scope.run(fn);
    }
    return fn();
  },
};
