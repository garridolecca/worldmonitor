## 2024-05-24 - Avoiding Array Spreads and Set Allocations in O(N²) Inner Loops

**Learning:** In the performance-critical `clusterNewsCore` function, iterating over N elements creating N² calculations causes a massive GC (Garbage Collection) bottleneck if array spreads (`[...a]`) and intermediate `Set` allocations are used for mathematical operations like finding intersection/union for Jaccard Similarity.
**Action:** Always replace `new Set([...a].filter(x => b.has(x)))` and `new Set([...a, ...b])` with manual `for...of` iteration over the smaller set to find intersection size, and use the inclusion-exclusion principle (`|A ∪ B| = |A| + |B| - |A ∩ B|`) for union size to maintain O(1) memory allocation inside inner loops.
