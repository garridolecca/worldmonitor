## 2024-05-22 - Static Array Lookup Optimization
**Learning:** Replaced `Array.find` inside hot iterative structures (like `analyzeFlightsForSurge` and `recalcPostureWithVessels`) with O(1) `Map.get` lookups built at module load.
**Action:** Next time you see static configurations (like `THEATERS`, `OPERATOR_HOMES`) being scanned repeatedly inside processing loops, convert them to Maps at the module scope for an immediate performance win.
