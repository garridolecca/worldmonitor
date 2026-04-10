## 2024-05-15 - [Set for membership testing]
**Learning:** In middleware and hot paths, constant arrays that are used for membership testing (like `['volume', 'liquidity', ...].includes(...)`) should be hoisted as a module-level `Set` to avoid re-allocation and provide O(1) lookups instead of O(N) array search.
**Action:** Replace `['volume', ...].includes(...)` with a hoisted module-level `new Set(...)` and use `.has()`.
