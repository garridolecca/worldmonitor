## 2024-05-25 - Single-pass dynamic counter optimization in hot loops
**Learning:** Performing multiple `.filter(condition).length` calls sequentially on the same array to calculate totals for different entity types forces O(N*M) iteration overhead. This is especially impactful in analytics layers (like `StrategicPosturePanel.ts` and `military-surge.ts`) where arrays of thousands of vessels or flights are scanned.
**Action:** Always replace redundant multiple `.filter()` scans with a single O(N) loop and a `switch` statement (or `if/else`) to dynamically update separate counter variables.
