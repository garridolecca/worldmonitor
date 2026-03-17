## 2024-05-24 - [Minimize intermediate allocations in map iteration]
**Learning:** Using `Array.from(map.entries()).filter(...).reduce(...)` creates temporary arrays and performs multiple passes over the data. In performance-critical loops (like `analyzeCorrelationsCore` iterating over markets and news topics), this intermediate allocation and redundant iteration adds significant overhead.
**Action:** Replace `Array.from().filter().reduce()` with a direct `for...of` loop over `map.entries()`, accumulating the result in a single pass. Also cache `.toLowerCase()` calls outside the inner loop.
