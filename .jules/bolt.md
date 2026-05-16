## 2024-05-18 - Single-Pass Iteration for Data Classification
**Learning:** In analytical services (like `military-surge.ts` or `infrastructure/index.ts`), chaining multiple `.filter().length` calls followed by an `Object.values().reduce()` to classify datasets introduces O(N*C) overhead (where C is the number of categories) and allocates intermediate arrays.
**Action:** Replace multiple `.filter` passes over the same dataset with a single imperative loop tracking category metrics via a pre-allocated accumulator object or variables. Maintain original aggregation behavior explicitly.
