## 2025-04-18 - Replacing O(N²) array deduplication with O(N) Set

**Learning:** In the performance-critical data analysis path (`analyzeCorrelationsCore` in `src/services/analysis-core.ts`), the application was deduping a potentially large `signals` array using an `Array.filter` paired with `Array.findIndex`. For an array of size N, this results in O(N²) operations because `findIndex` scans from the start for every element processed by `filter`. This is a classic Javascript performance anti-pattern.

**Action:** Replaced the O(N²) pattern with an O(N) Set-based deduplication approach. By maintaining a `seenTypes` `Set`, each signal type check is an O(1) operation, reducing the total deduplication complexity to O(N). Future operations doing distinct or unique filters based on a property should use `Set` instead of `findIndex`.
