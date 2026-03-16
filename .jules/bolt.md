## 2024-05-24 - O(1) Memory Allocation in O(N²) Inner Loops

**Learning:** When performing tight O(N²) inner loops (like the `clusterNewsCore` news clustering algorithm), intermediate array and set allocations (e.g., `new Set([...a].filter(x => b.has(x)))` and `new Set([...a, ...b])` for intersection and union counts) create a massive memory allocation and garbage collection bottleneck. The Jaccard similarity between Sets can be computed directly without allocating intermediate objects using manual loop counts and the inclusion-exclusion principle: `|A ∪ B| = |A| + |B| - |A ∩ B|`.

**Action:** Replace intermediate Array and Set allocations in performance-critical hot paths with manual iterations and mathematically equivalent formulas that use O(1) memory allocation to avoid GC overhead.
