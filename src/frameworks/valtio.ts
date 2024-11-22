import { ReactiveFramework } from "../util/reactiveFramework";
import { proxy } from "valtio/vanilla";
import { batch, computed, effect } from "valtio-reactive";

// For more discussion, see: https://github.com/pmndrs/valtio/discussions/949

export const valtioFramework: ReactiveFramework = {
  name: "Valtio",
  signal: (initialValue) => {
    const s = proxy({ value: initialValue });
    return {
      write: (v) => (s.value = v),
      read: () => {
        return s.value;
      },
    };
  },
  computed: (fn) => {
    const c = computed({ value: fn });
    return {
      read: () => {
        return c.value;
      },
    };
  },
  effect,
  withBatch: (fn) => batch(fn),
  withBuild: (fn) => fn(),
};
