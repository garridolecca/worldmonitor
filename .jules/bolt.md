
## 2024-05-10 - O(N) single pass over array filters
**Learning:** Consolidating multiple `Array.filter` calls into a single loop significantly improves performance for data arrays without sacrificing readability or requiring caching overhead, especially when looping over the same collection structure to count multiple values.
**Action:** When filtering a dataset multiple times by type or operator properties, combine them into a single loop structure using count variables.
