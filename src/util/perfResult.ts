export interface PerfResult {
  framework: string;
  test: string;
  time: number;
}

export type PerfResultCallback = (result: PerfResult) => void;
