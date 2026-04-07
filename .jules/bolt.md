## 2024-05-24 - Jaccard Similarity Memory Allocation
**Learning:** In the O(N^2) news clustering hot path, `jaccardSimilarity` was creating intermediate Sets and Arrays (`[...a]`), causing high GC overhead and memory allocations. We can compute Jaccard similarity in O(1) memory by just counting intersections.
**Action:** Replace intermediate array/set allocations inside O(N^2) hot loops with counting iterations and mathematical inclusion-exclusion principles.
