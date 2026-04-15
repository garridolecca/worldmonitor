## 2026-04-15 - Array Deduplication Performance in V8
**Learning:** O(N^2) deduplication using Array.filter + Array.findIndex can become a significant hot path for array sizes that scale with event feeds.
**Action:** Replace nested array lookups with O(N) Set-based inclusion tracking inside loop iterations for fast deduplication.
