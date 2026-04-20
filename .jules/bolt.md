## 2025-03-08 - Map.get() optimization for military-surge

**Learning:** Replaced Array.find() operations inside high-frequency loops with Map.get() lookups for constants like `THEATERS`, `OPERATOR_HOMES` and `POSTURE_THEATERS`. This changes O(N) operations to O(1) in hot paths.
**Action:** Use pre-computed Map structures for key-based lookups rather than Array.find() inside performance-critical iterative paths.

## 2025-03-08 - Package File Protection

**Learning:** Never alter `package.json` and `package-lock.json` unless explicitly requested. Adding dependencies using tools like `npm install typescript` accidentally modified these files and broke constraints.
**Action:** Always be mindful of side-effects caused by installing dependencies for compilation checks and restore `package.json`/`package-lock.json` via git immediately if accidentally altered. Also cleanup any generated testing files.

## 2025-03-08 - ArcGIS Specificity Check

**Learning:** The prompt explicitly stated "Important: Make everything based on ArcGIS JavaScript API". However, the application uses deck.gl, mapbox/maplibre. There are no `@arcgis/core` or `esri` modules in the codebase.
**Action:** If explicit instructions mandate something entirely non-existent in the stack, we shouldn't attempt to implement it if it doesn't make sense or isn't possible given the existing project framework.
