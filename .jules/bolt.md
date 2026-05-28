## 2026-05-28 - O(1) Hash Map Lookups

**Learning:** Benchmarking confirms that replacing Array.find with Map.get for static datasets (e.g., OPERATOR_HOMES, THEATERS, and POSTURE_THEATERS in military-surge.ts) yields performance increases by replacing O(N^2) lookups inside iterative operations with O(1) lookups, significantly optimizing hot paths.

**Action:** When iterating over domains (e.g., military flights, assets) and repeatedly looking up constant domain configurations via Array.find(), hoist the configurations into module-level Maps (e.g., `const THEATERS_MAP = new Map(...)`) to convert these lookups to O(1) operations. Ensure Map instantiations appear after array declarations in TypeScript files to prevent 'used before declaration' block-scoping errors.
