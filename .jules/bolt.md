## 2026-05-19 - [Consolidating Data Aggregation Passes]
**Learning:** [Consolidating multiple data aggregation passes (like multiple .filter() loops) into a single loop over the array yields significant performance boosts by reducing computational overhead and eliminating intermediate array allocations.]
**Action:** [Always look for successive array manipulation methods that iterate over the same array multiple times and seek to consolidate them into a single pass when calculating derived aggregates.]
