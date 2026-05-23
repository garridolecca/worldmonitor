## 2024-11-20 - Consolidate O(N) filtering in hot path
**Learning:** Consolidating multiple `Array.filter` passes and `.reduce()` operations over the same array into a single `for` loop with a `switch` statement significantly improves performance in hot paths like `military-surge.ts`.
**Action:** Always replace redundant sequential `O(N)` scans of static-sized data arrays with a single O(N) iteration, updating separate counters dynamically.
