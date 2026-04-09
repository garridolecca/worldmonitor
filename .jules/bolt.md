## 2026-04-09 - Regex Compilation Overhead in Nested Loops

**Learning:** Repeatedly instantiating `RegExp` objects inside tight inner loops (like `extractTopics`) causes unnecessary GC pressure and CPU overhead in Node/V8 environments.
**Action:** Cache compiled regular expressions in a module-level `Map` when dynamic string-to-regex conversion is required in hot paths.
