import { ReactiveFramework } from "../util/reactiveFramework";
// @ts-ignore
import * as $ from "svelte/internal/client";

// NOTE: The svelte adapter uses private, internal APIs that are usually only
// used by the Svelte compiler and client runtime. The Svelte team has made the
// decision to not expose these APIs publicly / officially, because it gives
// them more freedom to experiment without making breaking changes, but given
// that Svelte's v5 reactivity API is one of the most actively developed and
// efficient TS implementations available, I wanted to include it in the
// benchmark suite regardless.

type Signal<T> = {
  get value(): T;
  set value(v: T);

  /** @internal */
  state: any;
};

type Computed<T> = {
  get value(): T;

  /** @internal */
  derived: any;
};

export function signal<T>(initialValue: T): Signal<T> {
  const state = $.state(initialValue);
  return {
    get value() {
      return $.get(state);
    },
    set value(v: T) {
      $.set(state, v);
    },
    state,
  };
}

export function computed<T>(fn: () => T): Computed<T> {
  const derived = $.derived(fn);
  return {
    get value() {
      return $.get(derived);
    },
    derived,
  };
}

export function effect(fn: () => void | (() => void)): any {
  // TODO: how to return a cleanup function?
  return $.render_effect(fn);
}

export function batch<T = undefined>(fn?: () => T): T {
  return $.flush_sync(fn);
}

export function effectRoot<T>(fn: () => T): () => void {
  return $.effect_root(fn);
}

export function tick(): Promise<void> {
  return $.tick();
}

export const svelteFramework: ReactiveFramework = {
  name: "Svelte v5",
  signal: (initialValue) => {
    const s = signal(initialValue);
    return {
      write: (v) => (s.value = v),
      read: () => s.value,
    };
  },
  computed: (fn) => {
    const c = computed(fn);
    return {
      read: () => c.value,
    };
  },
  effect: effect,
  withBatch: batch,
  withBuild: (fn) => {
    let res: ReturnType<typeof fn> | undefined;
    const destroy = effectRoot(() => {
      res = fn();
    });
    tick();
    destroy();
    return res!;
  },
};
