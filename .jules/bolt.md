## 2024-05-08 - [O(N) single-pass aggregation over multiple Array.filter calls]
**Learning:** In code paths that perform simple array aggregations (like counting items matching several conditions), doing `.filter(...).length` multiple times creates redundant iterations over the array.
**Action:** Replace multiple `.filter(...).length` calls with a single imperative loop tracking multiple counters. This ensures O(N) execution time instead of O(K*N) where K is the number of filters.
