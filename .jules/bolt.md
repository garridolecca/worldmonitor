## 2025-02-28 - Avoid redundant sequential O(N) array scans
**Learning:** In TypeScript, chained array methods like `.filter().length` used repeatedly to count elements by type cause redundant O(N) passes and memory allocations. A single imperative loop performs significantly faster.
**Action:** Replace multiple `.filter().length` calls for distinct categories with a single O(N) loop and a `switch` statement (or `if/else`) to update separate counters dynamically.
