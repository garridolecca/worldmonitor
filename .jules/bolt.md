## 2024-05-15 - [Optimize Jaccard Similarity]

**Learning:** O(N^2) inner loops (like the news clustering loop) are heavily impacted by memory allocations and GC overhead. `Set` operations in JavaScript, like `[...a].filter(x => b.has(x))` or `new Set([...a, ...b])`, create hidden intermediate arrays and sets, which causes substantial GC overhead when run thousands or millions of times.
**Action:** When writing mathematical operations like Jaccard similarity or union/intersection for tight loops, use manual iteration and math properties (e.g., `|A ∪ B| = |A| + |B| - |A ∩ B|`) to keep memory allocations strictly O(1) and avoid garbage collection churn.
