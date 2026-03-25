## 2024-05-19 - Avoid Intermediate Allocations in Tight Loops

**Learning:** The news clustering algorithm (`clusterNewsCore`) has an O(N^2) hot loop that relies on `jaccardSimilarity`. Using spread syntax (`[...a]`) and intermediate `Set` and `Array` creation inside this tight loop triggered massive garbage collection overhead, destroying performance for large datasets.
**Action:** When writing algorithms called within O(N^2) or performance-critical loops, avoid O(N) memory allocations per call. Use manual iteration (like `for...of`) and math (like the Inclusion-Exclusion Principle for Sets) to maintain O(1) memory complexity, shifting the bottleneck from memory allocation to pure execution speed.
