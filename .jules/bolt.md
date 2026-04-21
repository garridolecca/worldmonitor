## 2026-04-21 - Array deduplication via Set

**Learning:** Deduplicating arrays using `Array.filter` and `Array.findIndex` inside it is O(n²) and very slow for larger arrays. Using a `Set` is O(n) and about 4-8x faster.
**Action:** Always use `Set` for tracking seen values during deduplication in hot paths.
