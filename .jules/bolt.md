## 2025-05-18 - [Optimizing Disguised O(N²) Operations and Array Allocations in Hot Loops]

**Learning:** Chained array operations like `[...arr].map().filter()` or array deduplication using `arr.filter(a => arr.findIndex(b => ...) === idx)` inside tight, hot loops cause significant, hidden O(N²) iterations and garbage collection overhead from intermediate array allocations.
**Action:** Replace `map/filter` chains and spreads inside inner loops with standard `for...of` loops, and use `Set`-based approaches instead of `filter/findIndex` for array deduplication.
