
## 2024-04-30 - Replace inline array .includes with Set/Boolean logic
**Learning:** Benchmarks showed that inline array instantiation + `.includes` check is surprisingly slow in the V8 hot path. For 2 elements (e.g. `['http:', 'https:'].includes`), direct boolean equality is ~4.4x faster. For larger lists (7-8 elements), an inline array is actually slower than a hoisted array, and a hoisted `Set` outperforms both by ~3.4x.
**Action:** Always prefer `a === 'x' || a === 'y'` for small lists (up to 3 elements) and module-level `Set.has()` for larger lists (4+ elements) when performing membership checks in frequently executed frontend render cycles or backend middleware.
