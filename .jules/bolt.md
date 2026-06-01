## 2024-06-01 - [Consolidated Array Iterations]
**Learning:** [In performance-critical paths processing large lists like `theaterFlights`, relying on multiple sequential `.filter()` and `.reduce()` calls forces multiple O(N) array traversals and numerous intermediate allocations. We successfully reduced this overhead by combining them into a single `for...of` loop.]
**Action:** [When filtering or counting subsets of an array for multiple discrete conditions, always use a single `for` loop with internal `if/else` or `switch` branches instead of chaining `.filter().length`.]
