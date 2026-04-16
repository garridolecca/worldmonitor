## 2024-05-18 - [O(N) Set Deduplication]
**Learning:** Found a performance bottleneck in `src/services/analysis-core.ts` where signal deduplication used `Array.findIndex` within `Array.filter` causing an O(N²) time complexity.
**Action:** Always use a `Set` for deduplication within an array mapping/filtering context to achieve O(N) performance, especially in hot paths like `analysis-core.ts`.
