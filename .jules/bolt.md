
## 2025-05-17 - [Optimized Nested Loops in Data Merging]
**Learning:** O(N*M) nested loops are a common pattern for merging data streams (e.g. AIS tracks and USNI fleet data) but can become bottlenecks as data scales. Memory context highlights a preference for replacing them with O(N+M) logic using Map-indexed lookups.
**Action:** Always scan `for` loops inside other `for` loops during data fusion. Refactor to first index the secondary dataset into a `Map` or array of specific lookups, then iterate the primary dataset for O(1) lookups. In `mergeUSNIWithAIS`, this optimization made name/hull matching much more efficient while retaining pure functional semantics.
