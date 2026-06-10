## 2024-05-15 - Array filter optimization in calculatePostures
**Learning:** Replaced multiple redundant array passes (.filter().length) with a single-pass loop containing counters, avoiding intermediate array allocations.
**Action:** When mapping over items and aggregating properties using array loops like .filter(), group those passes into single imperative passes using integer counters instead.
