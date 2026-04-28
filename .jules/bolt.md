## 2023-10-27 - Multiple Array.filter() to Single Loop Optimizations
**Learning:** In hot paths or data aggregation handlers (like `military-surge.ts` theater flights processing or `cross-module-integration.ts` alert counting), running multiple consecutive `Array.filter()` passes on the same array to count categorizations creates significant intermediate array allocations and overhead.
**Action:** Replace multiple `Array.filter().length` checks with a single-pass imperative `for` loop using manual counters. This avoids redundant O(N) iterations and memory allocations.
