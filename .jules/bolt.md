
## 2025-05-31 - Optimize redundant array scans
**Learning:** Sequential `.filter().length` calls on large arrays inside hot paths (e.g., UI map updates, dashboard renders) cause significant overhead due to multiple passes and intermediate allocations.
**Action:** Replace these multiple O(N) filtering passes with a single O(N) imperative loop tracking state counts manually.
