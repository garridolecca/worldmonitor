## 2026-06-11 - Consolidating filter counts
**Learning:** Sequential `.filter(condition).length` calls are a common anti-pattern in aggregation functions in this codebase, allocating multiple arrays just to get a length.
**Action:** Replace multiple `.filter().length` calls across the same array with a single `for` loop to increment multiple counters in one O(N) pass.
