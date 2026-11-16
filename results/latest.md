# Benchmark snapshot

2026-11-16T17:25:30.255Z → 2026-11-16T17:34:03.706Z

**passed** · full · observed graphs · CellX standard

v26.13.0 · Apple M3 Pro · darwin arm64

544 measurements; 0 failed suites. Times are milliseconds. Each framework/suite runs in a fresh process; values are the minimum of 3 samples. Explicit GC is outside timing. Raw samples are in the adjacent JSON file. See the repository README for workload definitions and limitations.

## Comparison by workload family

Geometric mean of each case's time divided by the fastest engine on that case. Lower is better; 1× means fastest on every case in that family. Cases have equal weight within a family. There is no overall score. Small CellX timings are particularly sensitive to noise.

| Engine | kairo | mol | s | dynamic | cellx |
| --- | ---: | ---: | ---: | ---: | ---: |
| alien-signals | 1.03× | 1.22× | 1.03× | 1.05× | 1.11× |
| @angular/signals | 3.12× | 1.26× | 3.02× | 3.00× | 1.90× |
| MobX | 3.35× | 1.18× | 3.01× | 2.64× | 3.06× |
| $mol_wire | 4.23× | 1.00× | 4.95× | 2.24× | 1.91× |
| Oby | 2.22× | 1.49× | 4.01× | 1.96× | 2.52× |
| Pota | 2.95× | 1.48× | 3.69× | 2.18× | 1.20× |
| x-reactivity | 4.61× | 1.54× | 4.55× | 3.51× | 3.65× |
| Preact Signals | 1.17× | 1.23× | 1.33× | 1.44× | 1.13× |
| TC39 Signals Polyfill | 6.31× | 1.33× | 4.06× | 10.91× | 2.66× |
| SolidJS | 4.37× | 1.48× | 4.27× | 3.99× | 1.58× |
| Svelte v5 | 4.19× | 1.26× | 2.66× | 14.23× | 36.42× |
| @amadeus-it-group/tansu | 2.81× | 1.31× | 3.11× | 1.98× | 2.12× |
| @tldraw/state | 3.94× | 1.23× | 2.66× | 5.60× | 2.89× |
| uSignal | 3.27× | 1.80× | 3.06× | 2.26× | 1.82× |
| @vue/reactivity | 1.87× | 1.14× | 1.27× | 1.69× | 2.04× |
| @pravosleva/reactive-engine | 1.72× | 1.15× | 3.31× | 1.20× | 1.78× |

## Packages

| Package | Version |
| --- | --- |
| alien-signals | 3.2.1 |
| @angular/core | 22.2.6 |
| mobx | 7.1.7 |
| mol_wire_lib | 1.0.1845 |
| oby | 15.1.2 |
| pota | 0.22.235 |
| @solidjs/signals | 2.0.0-rc.22 |
| @preact/signals-core | 1.14.5 |
| signal-polyfill | 0.2.2 |
| solid-js | 1.9.19 |
| svelte | 5.57.3 |
| @amadeus-it-group/tansu | 2.0.0 |
| @tldraw/state | 5.6.0 |
| usignal | 0.10.0 |
| @vue/reactivity | 3.5.45 |
| @pravosleva/reactive-engine | 3.0.0 |

## Measurements

| Framework | Suite | Test | ms |
| --- | --- | --- | ---: |
| alien-signals | kairo | avoidablePropagation | 74.3272 |
| alien-signals | kairo | broadPropagation | 148.6358 |
| alien-signals | kairo | deepPropagation | 54.6085 |
| alien-signals | kairo | diamond | 99.9437 |
| alien-signals | kairo | mux | 178.0736 |
| alien-signals | kairo | repeatedObservers | 12.1409 |
| alien-signals | kairo | triangle | 36.5657 |
| alien-signals | kairo | unstable | 32.9203 |
| alien-signals | mol | molBench | 318.7115 |
| alien-signals | s | createDataSignals | 4.9029 |
| alien-signals | s | createComputations0to1 | 3.1475 |
| alien-signals | s | createComputations1to1 | 7.9599 |
| alien-signals | s | createComputations2to1 | 7.2204 |
| alien-signals | s | createComputations4to1 | 6.3073 |
| alien-signals | s | createComputations1000to1 | 5.3745 |
| alien-signals | s | createComputations1to2 | 6.2975 |
| alien-signals | s | createComputations1to4 | 6.5910 |
| alien-signals | s | createComputations1to8 | 5.7445 |
| alien-signals | s | createComputations1to1000 | 4.2357 |
| alien-signals | s | updateComputations1to1 | 16.9931 |
| alien-signals | s | updateComputations2to1 | 10.7858 |
| alien-signals | s | updateComputations4to1 | 6.1399 |
| alien-signals | s | updateComputations1000to1 | 3.5453 |
| alien-signals | s | updateComputations1to2 | 12.6900 |
| alien-signals | s | updateComputations1to4 | 10.7705 |
| alien-signals | s | updateComputations1to1000 | 11.1893 |
| alien-signals | dynamic | 10x5 - 2 sources - read 20% (simple component) | 143.9863 |
| alien-signals | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 124.5210 |
| alien-signals | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 226.6554 |
| alien-signals | dynamic | 1000x5 - 25 sources (wide dense) | 447.6008 |
| alien-signals | dynamic | 5x500 - 3 sources (deep) | 97.4596 |
| alien-signals | cellx | cellx10 | 0.0403 |
| alien-signals | cellx | cellx20 | 0.0303 |
| alien-signals | cellx | cellx30 | 0.0333 |
| @angular/signals | kairo | avoidablePropagation | 192.5292 |
| @angular/signals | kairo | broadPropagation | 559.8437 |
| @angular/signals | kairo | deepPropagation | 167.4779 |
| @angular/signals | kairo | diamond | 290.9488 |
| @angular/signals | kairo | mux | 448.6593 |
| @angular/signals | kairo | repeatedObservers | 40.7382 |
| @angular/signals | kairo | triangle | 113.7047 |
| @angular/signals | kairo | unstable | 103.2900 |
| @angular/signals | mol | molBench | 327.6567 |
| @angular/signals | s | createDataSignals | 30.0907 |
| @angular/signals | s | createComputations0to1 | 7.2124 |
| @angular/signals | s | createComputations1to1 | 54.5892 |
| @angular/signals | s | createComputations2to1 | 51.0873 |
| @angular/signals | s | createComputations4to1 | 43.1665 |
| @angular/signals | s | createComputations1000to1 | 34.0100 |
| @angular/signals | s | createComputations1to2 | 25.6903 |
| @angular/signals | s | createComputations1to4 | 16.1012 |
| @angular/signals | s | createComputations1to8 | 12.3623 |
| @angular/signals | s | createComputations1to1000 | 7.1464 |
| @angular/signals | s | updateComputations1to1 | 24.4188 |
| @angular/signals | s | updateComputations2to1 | 17.1215 |
| @angular/signals | s | updateComputations4to1 | 10.6563 |
| @angular/signals | s | updateComputations1000to1 | 7.3337 |
| @angular/signals | s | updateComputations1to2 | 22.6179 |
| @angular/signals | s | updateComputations1to4 | 24.5356 |
| @angular/signals | s | updateComputations1to1000 | 25.4120 |
| @angular/signals | dynamic | 10x5 - 2 sources - read 20% (simple component) | 481.1335 |
| @angular/signals | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 350.1546 |
| @angular/signals | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 700.1492 |
| @angular/signals | dynamic | 1000x5 - 25 sources (wide dense) | 1058.8642 |
| @angular/signals | dynamic | 5x500 - 3 sources (deep) | 266.6960 |
| @angular/signals | cellx | cellx10 | 0.0510 |
| @angular/signals | cellx | cellx20 | 0.0702 |
| @angular/signals | cellx | cellx30 | 0.0569 |
| MobX | kairo | avoidablePropagation | 330.4272 |
| MobX | kairo | broadPropagation | 723.6377 |
| MobX | kairo | deepPropagation | 279.9848 |
| MobX | kairo | diamond | 366.8913 |
| MobX | kairo | mux | 391.8529 |
| MobX | kairo | repeatedObservers | 26.9277 |
| MobX | kairo | triangle | 125.9757 |
| MobX | kairo | unstable | 61.6016 |
| MobX | mol | molBench | 308.2205 |
| MobX | s | createDataSignals | 5.6726 |
| MobX | s | createComputations0to1 | 13.3022 |
| MobX | s | createComputations1to1 | 59.2570 |
| MobX | s | createComputations2to1 | 44.0848 |
| MobX | s | createComputations4to1 | 16.2195 |
| MobX | s | createComputations1000to1 | 8.7574 |
| MobX | s | createComputations1to2 | 28.7383 |
| MobX | s | createComputations1to4 | 26.9996 |
| MobX | s | createComputations1to8 | 27.3927 |
| MobX | s | createComputations1to1000 | 26.9379 |
| MobX | s | updateComputations1to1 | 32.9520 |
| MobX | s | updateComputations2to1 | 19.2583 |
| MobX | s | updateComputations4to1 | 11.4398 |
| MobX | s | updateComputations1000to1 | 5.5365 |
| MobX | s | updateComputations1to2 | 30.3055 |
| MobX | s | updateComputations1to4 | 27.6689 |
| MobX | s | updateComputations1to1000 | 25.5404 |
| MobX | dynamic | 10x5 - 2 sources - read 20% (simple component) | 525.0135 |
| MobX | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 379.2740 |
| MobX | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 501.8155 |
| MobX | dynamic | 1000x5 - 25 sources (wide dense) | 673.4085 |
| MobX | dynamic | 5x500 - 3 sources (deep) | 262.5473 |
| MobX | cellx | cellx10 | 0.0958 |
| MobX | cellx | cellx20 | 0.1108 |
| MobX | cellx | cellx30 | 0.0804 |
| $mol_wire | kairo | avoidablePropagation | 255.5898 |
| $mol_wire | kairo | broadPropagation | 801.2276 |
| $mol_wire | kairo | deepPropagation | 233.1667 |
| $mol_wire | kairo | diamond | 326.1022 |
| $mol_wire | kairo | mux | 531.2657 |
| $mol_wire | kairo | repeatedObservers | 74.7252 |
| $mol_wire | kairo | triangle | 116.5612 |
| $mol_wire | kairo | unstable | 180.5538 |
| $mol_wire | mol | molBench | 260.7014 |
| $mol_wire | s | createDataSignals | 15.0211 |
| $mol_wire | s | createComputations0to1 | 15.8120 |
| $mol_wire | s | createComputations1to1 | 71.8540 |
| $mol_wire | s | createComputations2to1 | 52.4401 |
| $mol_wire | s | createComputations4to1 | 40.1830 |
| $mol_wire | s | createComputations1000to1 | 33.6986 |
| $mol_wire | s | createComputations1to2 | 47.7490 |
| $mol_wire | s | createComputations1to4 | 39.7055 |
| $mol_wire | s | createComputations1to8 | 28.5817 |
| $mol_wire | s | createComputations1to1000 | 25.9070 |
| $mol_wire | s | updateComputations1to1 | 54.6624 |
| $mol_wire | s | updateComputations2to1 | 30.8771 |
| $mol_wire | s | updateComputations4to1 | 20.0231 |
| $mol_wire | s | updateComputations1000to1 | 9.4517 |
| $mol_wire | s | updateComputations1to2 | 48.5508 |
| $mol_wire | s | updateComputations1to4 | 47.4741 |
| $mol_wire | s | updateComputations1to1000 | 52.5543 |
| $mol_wire | dynamic | 10x5 - 2 sources - read 20% (simple component) | 457.2506 |
| $mol_wire | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 280.1894 |
| $mol_wire | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 452.9903 |
| $mol_wire | dynamic | 1000x5 - 25 sources (wide dense) | 595.5979 |
| $mol_wire | dynamic | 5x500 - 3 sources (deep) | 222.7111 |
| $mol_wire | cellx | cellx10 | 0.0585 |
| $mol_wire | cellx | cellx20 | 0.0493 |
| $mol_wire | cellx | cellx30 | 0.0718 |
| Oby | kairo | avoidablePropagation | 172.9624 |
| Oby | kairo | broadPropagation | 405.6807 |
| Oby | kairo | deepPropagation | 154.8628 |
| Oby | kairo | diamond | 193.5810 |
| Oby | kairo | mux | 315.5616 |
| Oby | kairo | repeatedObservers | 26.3852 |
| Oby | kairo | triangle | 89.7384 |
| Oby | kairo | unstable | 48.0070 |
| Oby | mol | molBench | 388.9348 |
| Oby | s | createDataSignals | 9.6811 |
| Oby | s | createComputations0to1 | 26.2423 |
| Oby | s | createComputations1to1 | 74.3863 |
| Oby | s | createComputations2to1 | 48.5076 |
| Oby | s | createComputations4to1 | 31.1273 |
| Oby | s | createComputations1000to1 | 25.0791 |
| Oby | s | createComputations1to2 | 51.6146 |
| Oby | s | createComputations1to4 | 50.0238 |
| Oby | s | createComputations1to8 | 52.4385 |
| Oby | s | createComputations1to1000 | 38.6159 |
| Oby | s | updateComputations1to1 | 25.8523 |
| Oby | s | updateComputations2to1 | 16.0232 |
| Oby | s | updateComputations4to1 | 9.7719 |
| Oby | s | updateComputations1000to1 | 8.6411 |
| Oby | s | updateComputations1to2 | 25.1148 |
| Oby | s | updateComputations1to4 | 24.3489 |
| Oby | s | updateComputations1to1000 | 23.2422 |
| Oby | dynamic | 10x5 - 2 sources - read 20% (simple component) | 345.1937 |
| Oby | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 248.0224 |
| Oby | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 451.7028 |
| Oby | dynamic | 1000x5 - 25 sources (wide dense) | 484.1847 |
| Oby | dynamic | 5x500 - 3 sources (deep) | 209.4874 |
| Oby | cellx | cellx10 | 0.0685 |
| Oby | cellx | cellx20 | 0.0566 |
| Oby | cellx | cellx30 | 0.1233 |
| Pota | kairo | avoidablePropagation | 293.0658 |
| Pota | kairo | broadPropagation | 426.4806 |
| Pota | kairo | deepPropagation | 181.1259 |
| Pota | kairo | diamond | 278.6004 |
| Pota | kairo | mux | 308.0870 |
| Pota | kairo | repeatedObservers | 54.3730 |
| Pota | kairo | triangle | 87.1376 |
| Pota | kairo | unstable | 78.8653 |
| Pota | mol | molBench | 384.5465 |
| Pota | s | createDataSignals | 8.5832 |
| Pota | s | createComputations0to1 | 14.5931 |
| Pota | s | createComputations1to1 | 52.1116 |
| Pota | s | createComputations2to1 | 42.6070 |
| Pota | s | createComputations4to1 | 33.4543 |
| Pota | s | createComputations1000to1 | 23.6345 |
| Pota | s | createComputations1to2 | 41.1723 |
| Pota | s | createComputations1to4 | 22.8444 |
| Pota | s | createComputations1to8 | 22.1242 |
| Pota | s | createComputations1to1000 | 16.6702 |
| Pota | s | updateComputations1to1 | 52.2788 |
| Pota | s | updateComputations2to1 | 28.6784 |
| Pota | s | updateComputations4to1 | 17.5062 |
| Pota | s | updateComputations1000to1 | 7.4123 |
| Pota | s | updateComputations1to2 | 37.7968 |
| Pota | s | updateComputations1to4 | 31.4005 |
| Pota | s | updateComputations1to1000 | 25.2506 |
| Pota | dynamic | 10x5 - 2 sources - read 20% (simple component) | 476.8164 |
| Pota | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 277.6121 |
| Pota | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 382.6758 |
| Pota | dynamic | 1000x5 - 25 sources (wide dense) | 600.3722 |
| Pota | dynamic | 5x500 - 3 sources (deep) | 223.3687 |
| Pota | cellx | cellx10 | 0.0398 |
| Pota | cellx | cellx20 | 0.0478 |
| Pota | cellx | cellx30 | 0.0273 |
| x-reactivity | kairo | avoidablePropagation | 349.0293 |
| x-reactivity | kairo | broadPropagation | 795.8810 |
| x-reactivity | kairo | deepPropagation | 259.2555 |
| x-reactivity | kairo | diamond | 547.4864 |
| x-reactivity | kairo | mux | 305.7241 |
| x-reactivity | kairo | repeatedObservers | 80.9527 |
| x-reactivity | kairo | triangle | 176.6217 |
| x-reactivity | kairo | unstable | 149.9970 |
| x-reactivity | mol | molBench | 400.8391 |
| x-reactivity | s | createDataSignals | 19.6328 |
| x-reactivity | s | createComputations0to1 | 9.6950 |
| x-reactivity | s | createComputations1to1 | 51.2168 |
| x-reactivity | s | createComputations2to1 | 35.5166 |
| x-reactivity | s | createComputations4to1 | 30.6645 |
| x-reactivity | s | createComputations1000to1 | 22.8255 |
| x-reactivity | s | createComputations1to2 | 32.6118 |
| x-reactivity | s | createComputations1to4 | 23.9847 |
| x-reactivity | s | createComputations1to8 | 18.5626 |
| x-reactivity | s | createComputations1to1000 | 20.9604 |
| x-reactivity | s | updateComputations1to1 | 101.9982 |
| x-reactivity | s | updateComputations2to1 | 54.8101 |
| x-reactivity | s | updateComputations4to1 | 29.6628 |
| x-reactivity | s | updateComputations1000to1 | 7.5541 |
| x-reactivity | s | updateComputations1to2 | 72.2075 |
| x-reactivity | s | updateComputations1to4 | 55.1299 |
| x-reactivity | s | updateComputations1to1000 | 42.7180 |
| x-reactivity | dynamic | 10x5 - 2 sources - read 20% (simple component) | 1438.1628 |
| x-reactivity | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 404.3334 |
| x-reactivity | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 580.0148 |
| x-reactivity | dynamic | 1000x5 - 25 sources (wide dense) | 830.5971 |
| x-reactivity | dynamic | 5x500 - 3 sources (deep) | 261.2365 |
| x-reactivity | cellx | cellx10 | 0.1113 |
| x-reactivity | cellx | cellx20 | 0.1590 |
| x-reactivity | cellx | cellx30 | 0.0820 |
| Preact Signals | kairo | avoidablePropagation | 91.4569 |
| Preact Signals | kairo | broadPropagation | 177.0049 |
| Preact Signals | kairo | deepPropagation | 72.9957 |
| Preact Signals | kairo | diamond | 123.0928 |
| Preact Signals | kairo | mux | 188.7197 |
| Preact Signals | kairo | repeatedObservers | 12.3380 |
| Preact Signals | kairo | triangle | 48.8026 |
| Preact Signals | kairo | unstable | 26.4260 |
| Preact Signals | mol | molBench | 319.9941 |
| Preact Signals | s | createDataSignals | 6.1640 |
| Preact Signals | s | createComputations0to1 | 4.6680 |
| Preact Signals | s | createComputations1to1 | 15.9098 |
| Preact Signals | s | createComputations2to1 | 10.0082 |
| Preact Signals | s | createComputations4to1 | 7.5241 |
| Preact Signals | s | createComputations1000to1 | 7.9592 |
| Preact Signals | s | createComputations1to2 | 12.0521 |
| Preact Signals | s | createComputations1to4 | 10.5121 |
| Preact Signals | s | createComputations1to8 | 9.9008 |
| Preact Signals | s | createComputations1to1000 | 4.6946 |
| Preact Signals | s | updateComputations1to1 | 17.7935 |
| Preact Signals | s | updateComputations2to1 | 10.6662 |
| Preact Signals | s | updateComputations4to1 | 6.7227 |
| Preact Signals | s | updateComputations1000to1 | 4.4100 |
| Preact Signals | s | updateComputations1to2 | 13.4582 |
| Preact Signals | s | updateComputations1to4 | 11.7050 |
| Preact Signals | s | updateComputations1to1000 | 9.6681 |
| Preact Signals | dynamic | 10x5 - 2 sources - read 20% (simple component) | 201.3747 |
| Preact Signals | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 188.5663 |
| Preact Signals | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 311.1461 |
| Preact Signals | dynamic | 1000x5 - 25 sources (wide dense) | 468.4409 |
| Preact Signals | dynamic | 5x500 - 3 sources (deep) | 153.3161 |
| Preact Signals | cellx | cellx10 | 0.0489 |
| Preact Signals | cellx | cellx20 | 0.0358 |
| Preact Signals | cellx | cellx30 | 0.0247 |
| TC39 Signals Polyfill | kairo | avoidablePropagation | 270.1793 |
| TC39 Signals Polyfill | kairo | broadPropagation | 932.6349 |
| TC39 Signals Polyfill | kairo | deepPropagation | 255.4860 |
| TC39 Signals Polyfill | kairo | diamond | 462.7998 |
| TC39 Signals Polyfill | kairo | mux | 720.7240 |
| TC39 Signals Polyfill | kairo | repeatedObservers | 149.8906 |
| TC39 Signals Polyfill | kairo | triangle | 195.0988 |
| TC39 Signals Polyfill | kairo | unstable | 501.7846 |
| TC39 Signals Polyfill | mol | molBench | 346.6678 |
| TC39 Signals Polyfill | s | createDataSignals | 19.7768 |
| TC39 Signals Polyfill | s | createComputations0to1 | 17.3061 |
| TC39 Signals Polyfill | s | createComputations1to1 | 49.2650 |
| TC39 Signals Polyfill | s | createComputations2to1 | 38.6550 |
| TC39 Signals Polyfill | s | createComputations4to1 | 29.8649 |
| TC39 Signals Polyfill | s | createComputations1000to1 | 19.3085 |
| TC39 Signals Polyfill | s | createComputations1to2 | 39.7330 |
| TC39 Signals Polyfill | s | createComputations1to4 | 33.2415 |
| TC39 Signals Polyfill | s | createComputations1to8 | 29.9768 |
| TC39 Signals Polyfill | s | createComputations1to1000 | 25.7285 |
| TC39 Signals Polyfill | s | updateComputations1to1 | 42.4186 |
| TC39 Signals Polyfill | s | updateComputations2to1 | 25.8448 |
| TC39 Signals Polyfill | s | updateComputations4to1 | 18.8354 |
| TC39 Signals Polyfill | s | updateComputations1000to1 | 8.6168 |
| TC39 Signals Polyfill | s | updateComputations1to2 | 37.5637 |
| TC39 Signals Polyfill | s | updateComputations1to4 | 32.1647 |
| TC39 Signals Polyfill | s | updateComputations1to1000 | 27.5221 |
| TC39 Signals Polyfill | dynamic | 10x5 - 2 sources - read 20% (simple component) | 1386.5183 |
| TC39 Signals Polyfill | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 531.1710 |
| TC39 Signals Polyfill | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 11358.4721 |
| TC39 Signals Polyfill | dynamic | 1000x5 - 25 sources (wide dense) | 7184.5509 |
| TC39 Signals Polyfill | dynamic | 5x500 - 3 sources (deep) | 352.3427 |
| TC39 Signals Polyfill | cellx | cellx10 | 0.0734 |
| TC39 Signals Polyfill | cellx | cellx20 | 0.0928 |
| TC39 Signals Polyfill | cellx | cellx30 | 0.0826 |
| SolidJS | kairo | avoidablePropagation | 352.8198 |
| SolidJS | kairo | broadPropagation | 820.0026 |
| SolidJS | kairo | deepPropagation | 335.4149 |
| SolidJS | kairo | diamond | 453.6162 |
| SolidJS | kairo | mux | 458.7704 |
| SolidJS | kairo | repeatedObservers | 56.7299 |
| SolidJS | kairo | triangle | 160.9713 |
| SolidJS | kairo | unstable | 90.7430 |
| SolidJS | mol | molBench | 387.0043 |
| SolidJS | s | createDataSignals | 16.4364 |
| SolidJS | s | createComputations0to1 | 6.8688 |
| SolidJS | s | createComputations1to1 | 45.0410 |
| SolidJS | s | createComputations2to1 | 42.7973 |
| SolidJS | s | createComputations4to1 | 31.6501 |
| SolidJS | s | createComputations1000to1 | 25.7198 |
| SolidJS | s | createComputations1to2 | 35.0715 |
| SolidJS | s | createComputations1to4 | 23.4624 |
| SolidJS | s | createComputations1to8 | 17.0708 |
| SolidJS | s | createComputations1to1000 | 15.0829 |
| SolidJS | s | updateComputations1to1 | 65.9325 |
| SolidJS | s | updateComputations2to1 | 42.2177 |
| SolidJS | s | updateComputations4to1 | 32.9860 |
| SolidJS | s | updateComputations1000to1 | 24.1292 |
| SolidJS | s | updateComputations1to2 | 43.2744 |
| SolidJS | s | updateComputations1to4 | 40.4520 |
| SolidJS | s | updateComputations1to1000 | 37.1976 |
| SolidJS | dynamic | 10x5 - 2 sources - read 20% (simple component) | 1430.8725 |
| SolidJS | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 500.2636 |
| SolidJS | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 595.9762 |
| SolidJS | dynamic | 1000x5 - 25 sources (wide dense) | 1026.3969 |
| SolidJS | dynamic | 5x500 - 3 sources (deep) | 317.8770 |
| SolidJS | cellx | cellx10 | 0.0513 |
| SolidJS | cellx | cellx20 | 0.0544 |
| SolidJS | cellx | cellx30 | 0.0419 |
| Svelte v5 | kairo | avoidablePropagation | 435.9630 |
| Svelte v5 | kairo | broadPropagation | 682.7843 |
| Svelte v5 | kairo | deepPropagation | 303.1508 |
| Svelte v5 | kairo | diamond | 485.0011 |
| Svelte v5 | kairo | mux | 286.9926 |
| Svelte v5 | kairo | repeatedObservers | 58.5055 |
| Svelte v5 | kairo | triangle | 162.6635 |
| Svelte v5 | kairo | unstable | 99.9995 |
| Svelte v5 | mol | molBench | 327.4739 |
| Svelte v5 | s | createDataSignals | 5.7066 |
| Svelte v5 | s | createComputations0to1 | 16.0900 |
| Svelte v5 | s | createComputations1to1 | 18.9633 |
| Svelte v5 | s | createComputations2to1 | 12.4214 |
| Svelte v5 | s | createComputations4to1 | 8.6520 |
| Svelte v5 | s | createComputations1000to1 | 6.0727 |
| Svelte v5 | s | createComputations1to2 | 16.1316 |
| Svelte v5 | s | createComputations1to4 | 13.8125 |
| Svelte v5 | s | createComputations1to8 | 13.6875 |
| Svelte v5 | s | createComputations1to1000 | 12.3008 |
| Svelte v5 | s | updateComputations1to1 | 113.0993 |
| Svelte v5 | s | updateComputations2to1 | 58.3597 |
| Svelte v5 | s | updateComputations4to1 | 31.0038 |
| Svelte v5 | s | updateComputations1000to1 | 3.7170 |
| Svelte v5 | s | updateComputations1to2 | 65.7538 |
| Svelte v5 | s | updateComputations1to4 | 42.4520 |
| Svelte v5 | s | updateComputations1to1000 | 19.4380 |
| Svelte v5 | dynamic | 10x5 - 2 sources - read 20% (simple component) | 614.6857 |
| Svelte v5 | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 12356.7977 |
| Svelte v5 | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 5789.4701 |
| Svelte v5 | dynamic | 1000x5 - 25 sources (wide dense) | 2703.4164 |
| Svelte v5 | dynamic | 5x500 - 3 sources (deep) | 671.7238 |
| Svelte v5 | cellx | cellx10 | 0.0944 |
| Svelte v5 | cellx | cellx20 | 3.2892 |
| Svelte v5 | cellx | cellx30 | 4.6335 |
| @amadeus-it-group/tansu | kairo | avoidablePropagation | 208.8298 |
| @amadeus-it-group/tansu | kairo | broadPropagation | 492.4534 |
| @amadeus-it-group/tansu | kairo | deepPropagation | 153.9010 |
| @amadeus-it-group/tansu | kairo | diamond | 213.9962 |
| @amadeus-it-group/tansu | kairo | mux | 397.4219 |
| @amadeus-it-group/tansu | kairo | repeatedObservers | 40.4882 |
| @amadeus-it-group/tansu | kairo | triangle | 73.8806 |
| @amadeus-it-group/tansu | kairo | unstable | 122.1154 |
| @amadeus-it-group/tansu | mol | molBench | 341.2812 |
| @amadeus-it-group/tansu | s | createDataSignals | 8.8825 |
| @amadeus-it-group/tansu | s | createComputations0to1 | 22.1291 |
| @amadeus-it-group/tansu | s | createComputations1to1 | 48.3688 |
| @amadeus-it-group/tansu | s | createComputations2to1 | 26.3507 |
| @amadeus-it-group/tansu | s | createComputations4to1 | 25.7683 |
| @amadeus-it-group/tansu | s | createComputations1000to1 | 14.3942 |
| @amadeus-it-group/tansu | s | createComputations1to2 | 31.9327 |
| @amadeus-it-group/tansu | s | createComputations1to4 | 25.0027 |
| @amadeus-it-group/tansu | s | createComputations1to8 | 20.6352 |
| @amadeus-it-group/tansu | s | createComputations1to1000 | 19.5653 |
| @amadeus-it-group/tansu | s | updateComputations1to1 | 31.0252 |
| @amadeus-it-group/tansu | s | updateComputations2to1 | 18.8405 |
| @amadeus-it-group/tansu | s | updateComputations4to1 | 11.4565 |
| @amadeus-it-group/tansu | s | updateComputations1000to1 | 6.9719 |
| @amadeus-it-group/tansu | s | updateComputations1to2 | 27.0380 |
| @amadeus-it-group/tansu | s | updateComputations1to4 | 25.6528 |
| @amadeus-it-group/tansu | s | updateComputations1to1000 | 25.7724 |
| @amadeus-it-group/tansu | dynamic | 10x5 - 2 sources - read 20% (simple component) | 362.3373 |
| @amadeus-it-group/tansu | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 230.9285 |
| @amadeus-it-group/tansu | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 462.2289 |
| @amadeus-it-group/tansu | dynamic | 1000x5 - 25 sources (wide dense) | 537.4873 |
| @amadeus-it-group/tansu | dynamic | 5x500 - 3 sources (deep) | 201.1070 |
| @amadeus-it-group/tansu | cellx | cellx10 | 0.0671 |
| @amadeus-it-group/tansu | cellx | cellx20 | 0.0594 |
| @amadeus-it-group/tansu | cellx | cellx30 | 0.0713 |
| @tldraw/state | kairo | avoidablePropagation | 279.0160 |
| @tldraw/state | kairo | broadPropagation | 761.6260 |
| @tldraw/state | kairo | deepPropagation | 260.3578 |
| @tldraw/state | kairo | diamond | 374.2840 |
| @tldraw/state | kairo | mux | 570.0446 |
| @tldraw/state | kairo | repeatedObservers | 49.5530 |
| @tldraw/state | kairo | triangle | 160.1114 |
| @tldraw/state | kairo | unstable | 77.6385 |
| @tldraw/state | mol | molBench | 320.3396 |
| @tldraw/state | s | createDataSignals | 6.7077 |
| @tldraw/state | s | createComputations0to1 | 7.7528 |
| @tldraw/state | s | createComputations1to1 | 19.1433 |
| @tldraw/state | s | createComputations2to1 | 11.7523 |
| @tldraw/state | s | createComputations4to1 | 9.5293 |
| @tldraw/state | s | createComputations1000to1 | 11.5446 |
| @tldraw/state | s | createComputations1to2 | 15.0926 |
| @tldraw/state | s | createComputations1to4 | 14.0261 |
| @tldraw/state | s | createComputations1to8 | 9.4565 |
| @tldraw/state | s | createComputations1to1000 | 7.9301 |
| @tldraw/state | s | updateComputations1to1 | 52.3952 |
| @tldraw/state | s | updateComputations2to1 | 34.5092 |
| @tldraw/state | s | updateComputations4to1 | 25.1188 |
| @tldraw/state | s | updateComputations1000to1 | 20.6011 |
| @tldraw/state | s | updateComputations1to2 | 48.7345 |
| @tldraw/state | s | updateComputations1to4 | 48.9640 |
| @tldraw/state | s | updateComputations1to1000 | 37.1926 |
| @tldraw/state | dynamic | 10x5 - 2 sources - read 20% (simple component) | 637.6602 |
| @tldraw/state | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 392.8163 |
| @tldraw/state | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 3798.2641 |
| @tldraw/state | dynamic | 1000x5 - 25 sources (wide dense) | 3107.7510 |
| @tldraw/state | dynamic | 5x500 - 3 sources (deep) | 255.6218 |
| @tldraw/state | cellx | cellx10 | 0.0829 |
| @tldraw/state | cellx | cellx20 | 0.1073 |
| @tldraw/state | cellx | cellx30 | 0.0812 |
| uSignal | kairo | avoidablePropagation | 412.3521 |
| uSignal | kairo | broadPropagation | 549.4973 |
| uSignal | kairo | deepPropagation | 174.6698 |
| uSignal | kairo | diamond | 291.8010 |
| uSignal | kairo | mux | 521.0527 |
| uSignal | kairo | repeatedObservers | 43.0655 |
| uSignal | kairo | triangle | 109.6078 |
| uSignal | kairo | unstable | 57.4615 |
| uSignal | mol | molBench | 468.9254 |
| uSignal | s | createDataSignals | 10.1527 |
| uSignal | s | createComputations0to1 | 6.6653 |
| uSignal | s | createComputations1to1 | 46.5521 |
| uSignal | s | createComputations2to1 | 31.2613 |
| uSignal | s | createComputations4to1 | 20.6055 |
| uSignal | s | createComputations1000to1 | 11.0473 |
| uSignal | s | createComputations1to2 | 35.6918 |
| uSignal | s | createComputations1to4 | 24.3509 |
| uSignal | s | createComputations1to8 | 19.9380 |
| uSignal | s | createComputations1to1000 | 18.2964 |
| uSignal | s | updateComputations1to1 | 30.7252 |
| uSignal | s | updateComputations2to1 | 21.0893 |
| uSignal | s | updateComputations4to1 | 13.7851 |
| uSignal | s | updateComputations1000to1 | 11.5442 |
| uSignal | s | updateComputations1to2 | 29.7357 |
| uSignal | s | updateComputations1to4 | 25.9659 |
| uSignal | s | updateComputations1to1000 | 33.0658 |
| uSignal | dynamic | 10x5 - 2 sources - read 20% (simple component) | 366.0419 |
| uSignal | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 320.4571 |
| uSignal | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 374.1819 |
| uSignal | dynamic | 1000x5 - 25 sources (wide dense) | 879.3732 |
| uSignal | dynamic | 5x500 - 3 sources (deep) | 208.6074 |
| uSignal | cellx | cellx10 | 0.0436 |
| uSignal | cellx | cellx20 | 0.0353 |
| uSignal | cellx | cellx30 | 0.1160 |
| @vue/reactivity | kairo | avoidablePropagation | 169.0188 |
| @vue/reactivity | kairo | broadPropagation | 351.0915 |
| @vue/reactivity | kairo | deepPropagation | 106.9165 |
| @vue/reactivity | kairo | diamond | 173.1355 |
| @vue/reactivity | kairo | mux | 350.0040 |
| @vue/reactivity | kairo | repeatedObservers | 19.4482 |
| @vue/reactivity | kairo | triangle | 61.9533 |
| @vue/reactivity | kairo | unstable | 40.2078 |
| @vue/reactivity | mol | molBench | 297.9307 |
| @vue/reactivity | s | createDataSignals | 5.5437 |
| @vue/reactivity | s | createComputations0to1 | 4.3482 |
| @vue/reactivity | s | createComputations1to1 | 12.3847 |
| @vue/reactivity | s | createComputations2to1 | 8.0149 |
| @vue/reactivity | s | createComputations4to1 | 7.1919 |
| @vue/reactivity | s | createComputations1000to1 | 8.0015 |
| @vue/reactivity | s | createComputations1to2 | 10.1730 |
| @vue/reactivity | s | createComputations1to4 | 6.5733 |
| @vue/reactivity | s | createComputations1to8 | 5.8353 |
| @vue/reactivity | s | createComputations1to1000 | 4.6638 |
| @vue/reactivity | s | updateComputations1to1 | 17.1529 |
| @vue/reactivity | s | updateComputations2to1 | 10.4135 |
| @vue/reactivity | s | updateComputations4to1 | 7.5429 |
| @vue/reactivity | s | updateComputations1000to1 | 5.7847 |
| @vue/reactivity | s | updateComputations1to2 | 14.0124 |
| @vue/reactivity | s | updateComputations1to4 | 13.8524 |
| @vue/reactivity | s | updateComputations1to1000 | 16.4890 |
| @vue/reactivity | dynamic | 10x5 - 2 sources - read 20% (simple component) | 271.6782 |
| @vue/reactivity | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 205.9784 |
| @vue/reactivity | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 360.1649 |
| @vue/reactivity | dynamic | 1000x5 - 25 sources (wide dense) | 550.2727 |
| @vue/reactivity | dynamic | 5x500 - 3 sources (deep) | 171.9466 |
| @vue/reactivity | cellx | cellx10 | 0.0606 |
| @vue/reactivity | cellx | cellx20 | 0.0661 |
| @vue/reactivity | cellx | cellx30 | 0.0630 |
| @pravosleva/reactive-engine | kairo | avoidablePropagation | 194.6857 |
| @pravosleva/reactive-engine | kairo | broadPropagation | 265.4559 |
| @pravosleva/reactive-engine | kairo | deepPropagation | 109.4562 |
| @pravosleva/reactive-engine | kairo | diamond | 147.8522 |
| @pravosleva/reactive-engine | kairo | mux | 246.7811 |
| @pravosleva/reactive-engine | kairo | repeatedObservers | 21.6066 |
| @pravosleva/reactive-engine | kairo | triangle | 53.8992 |
| @pravosleva/reactive-engine | kairo | unstable | 39.4734 |
| @pravosleva/reactive-engine | mol | molBench | 300.7689 |
| @pravosleva/reactive-engine | s | createDataSignals | 7.7575 |
| @pravosleva/reactive-engine | s | createComputations0to1 | 21.2219 |
| @pravosleva/reactive-engine | s | createComputations1to1 | 34.6734 |
| @pravosleva/reactive-engine | s | createComputations2to1 | 29.7990 |
| @pravosleva/reactive-engine | s | createComputations4to1 | 23.2827 |
| @pravosleva/reactive-engine | s | createComputations1000to1 | 100.3211 |
| @pravosleva/reactive-engine | s | createComputations1to2 | 38.3272 |
| @pravosleva/reactive-engine | s | createComputations1to4 | 38.7744 |
| @pravosleva/reactive-engine | s | createComputations1to8 | 38.6324 |
| @pravosleva/reactive-engine | s | createComputations1to1000 | 38.4847 |
| @pravosleva/reactive-engine | s | updateComputations1to1 | 34.2818 |
| @pravosleva/reactive-engine | s | updateComputations2to1 | 18.5885 |
| @pravosleva/reactive-engine | s | updateComputations4to1 | 10.1480 |
| @pravosleva/reactive-engine | s | updateComputations1000to1 | 2.3755 |
| @pravosleva/reactive-engine | s | updateComputations1to2 | 23.3282 |
| @pravosleva/reactive-engine | s | updateComputations1to4 | 18.4264 |
| @pravosleva/reactive-engine | s | updateComputations1to1000 | 12.4766 |
| @pravosleva/reactive-engine | dynamic | 10x5 - 2 sources - read 20% (simple component) | 234.8399 |
| @pravosleva/reactive-engine | dynamic | 10x10 - 6 sources - dynamic - read 20% (dynamic component) | 140.1732 |
| @pravosleva/reactive-engine | dynamic | 1000x12 - 4 sources - dynamic (large web app) | 253.4950 |
| @pravosleva/reactive-engine | dynamic | 1000x5 - 25 sources (wide dense) | 345.3731 |
| @pravosleva/reactive-engine | dynamic | 5x500 - 3 sources (deep) | 118.0172 |
| @pravosleva/reactive-engine | cellx | cellx10 | 0.0485 |
| @pravosleva/reactive-engine | cellx | cellx20 | 0.0682 |
| @pravosleva/reactive-engine | cellx | cellx30 | 0.0509 |
