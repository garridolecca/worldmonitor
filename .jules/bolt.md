## 2024-06-28 - Optimizing `getTheaterPostureSummaries` in `military-surge.ts`
**Learning:** Found sequential `.filter().length` array scans when calculating aircraft counts per type (`fighters`, `tankers`, `awacs`, `reconnaissance`, `transport`, `bombers`, `drones`) inside a loop over `POSTURE_THEATERS`. This causes O(T * N) redundant iterations.
**Action:** Replace multiple `.filter(f => f.aircraftType === type).length` calls with a single O(N) imperative loop over `theaterFlights`, incrementing counters via a `switch` statement or direct object property accumulation.
