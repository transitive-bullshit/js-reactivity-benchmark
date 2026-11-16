import {
  batch,
  computed,
  dispose,
  effect,
  get,
  set,
  signal,
  type Computed,
  type Signal,
} from "reflex-quant";

import { retain } from "../util/cleanup";
import { ReactiveFramework } from "../util/reactiveFramework";

interface SignalRef<T> {
  source: Signal<T>;
  read(): T;
  write(value: T): void;
}

function readSignal<T>(this: SignalRef<T>): T {
  return get(this.source);
}

function writeSignal<T>(this: SignalRef<T>, value: T): void {
  set(this.source, value);
}

interface ComputedRef<T> {
  source: Computed<T>;
  read(): T;
}

function readComputed<T>(this: ComputedRef<T>): T {
  return get(this.source);
}

export const reflexQuantFramework: ReactiveFramework = {
  name: "reflex-quant",

  signal: (initial) => ({
    source: signal(initial),
    read: readSignal,
    write: writeSignal,
  }),

  computed: (fn) => ({
    source: computed(fn),
    read: readComputed,
  }),

  effect: (fn) => {
    const handle = effect(fn);
    retain(() => dispose(handle));
  },

  withBatch: batch,
  withBuild: (fn) => fn(),
};