## 2025-07-05 - Avoid mapped array candidates for O(1) best matches
**Learning:** When scanning an array to find a single "best match" object based on a computed score (e.g., `inferOrigin`), chaining `.map()` followed by `.filter()` and `.sort()` allocates significant temporary arrays and candidate objects.
**Action:** Replace functional array mapping chains with a single O(N) imperative loop tracking `bestScore` and `bestCandidate`, allocating only the single winning object. This dramatically reduces Garbage Collection pressure in hot UI evaluation loops.
