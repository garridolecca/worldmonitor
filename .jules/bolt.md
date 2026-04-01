
## 2025-02-12 - [O(1) Memory Allocation in Jaccard Similarity]

**Learning:** Using intermediate Array and Set allocations (e.g., `new Set([...a].filter(x => b.has(x)))`) within O(N^2) hot paths like the news clustering algorithm (`clusterNewsCore`) causes excessive memory allocations and triggers garbage collection overhead.
**Action:** Always prefer mathematical properties (like the inclusion-exclusion principle: `|A ∪ B| = |A| + |B| - |A ∩ B|`) and iterate manually to minimize intermediate allocations and keep memory allocation strictly O(1) in tight loops.
