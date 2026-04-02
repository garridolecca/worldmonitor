## 2024-05-18 - [Optimize chained array methods]
**Learning:** Chained `.map().filter()` array operations allocate intermediate arrays which can cause unnecessary memory allocation and garbage collection overhead.
**Action:** Replace chained `.map().filter()` with a single `for...of` loop, particularly in hot-paths where large datasets are processed, or where these arrays are frequently computed.
