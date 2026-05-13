
## 2024-05-24 - Precompute Array Lookups
**Learning:** In hot paths or data processing loops, using `Array.find()` against static datasets (like `THEATERS` or `OPERATOR_HOMES`) introduces unnecessary O(N) overhead per lookup.
**Action:** When static configuration arrays are accessed repeatedly by a unique identifier, precompute them into module-level `Map` objects (e.g., `const THEATERS_MAP = new Map(THEATERS.map(t => [t.id, t]));`) to achieve O(1) lookup performance.
