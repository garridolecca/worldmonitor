## 2024-05-18 - [O(1) Memory Allocation in Tight Inner Loops]

**Learning:** The news clustering core runs an O(N^2) loop where `jaccardSimilarity` is called millions of times. Using spread syntax `[...set]` to compute intersections and unions creates large numbers of intermediate arrays and sets, which leads to massive Garbage Collection (GC) pauses that block the event loop, severely degrading performance.
**Action:** When working inside nested loops (O(N^2) operations), strictly avoid creating new arrays, sets, or objects unless absolutely necessary. Rely on direct iteration (e.g., `for...of` over the smaller collection) and mathematical shortcuts (like the inclusion-exclusion principle: `|A ∪ B| = |A| + |B| - |A ∩ B|`) to achieve O(1) memory allocation overhead.
