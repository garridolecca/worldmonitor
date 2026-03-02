
## 2025-02-14 - Zero-allocation `jaccardSimilarity` in `clusterNewsCore` inner loop
**Learning:** The news clustering inner loop (`clusterNewsCore` in `src/services/analysis-core.ts`) frequently executes `jaccardSimilarity`. Initially, `jaccardSimilarity` used the spread syntax and the `Set` constructor repeatedly, resulting in large GC overhead in an O(N^2) path.
**Action:** Replace operations creating temporary Sets with `for` loop iterations counting intersections, maintaining memory allocation complexity to O(1).
