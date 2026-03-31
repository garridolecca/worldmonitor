import { performance } from 'perf_hooks';

// Simulate newsTopics map
const map = new Map();
for (let i = 0; i < 1000; i++) {
  map.set(`topic${i}`, Math.random() * 10);
}
map.set('test symbol', 5);
map.set('another topic', 2);

const symbol = 'symbol';
const name = 'Test Symbol';

// Method 1: Array.from().filter().reduce()
const start1 = performance.now();
for (let i = 0; i < 1000; i++) {
  const result1 = Array.from(map.entries())
    .filter(([k]) => name.toLowerCase().includes(k) || k.includes(symbol.toLowerCase()))
    .reduce((sum, [, v]) => sum + v, 0);
}
const end1 = performance.now();

// Method 2: for...of loop
const start2 = performance.now();
const nameLower = name.toLowerCase();
const symbolLower = symbol.toLowerCase();
for (let i = 0; i < 1000; i++) {
  let result2 = 0;
  for (const [k, v] of map) {
    if (nameLower.includes(k) || k.includes(symbolLower)) {
      result2 += v;
    }
  }
}
const end2 = performance.now();

console.log(`Method 1 (Array.from...): ${end1 - start1} ms`);
console.log(`Method 2 (for...of): ${end2 - start2} ms`);
