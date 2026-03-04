## 2024-05-24 - [Avoid Set Spread Allocations in O(n²) Loops]

**Learning:** In highly nested, performance-critical loops like `clusterNewsCore` (O(n²)), utility functions such as `jaccardSimilarity` that use spread syntax (`[...a]`) and create intermediate `Set` and `Array` allocations introduce significant garbage collection overhead.
**Action:** Replace intermediate set/array creations with O(1) memory algorithms. For Set operations, use iteration combined with mathematical properties (like the inclusion-exclusion principle) to compute the result without allocating memory.
