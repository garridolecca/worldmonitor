const { performance } = require('perf_hooks');

const arr2 = ['http:', 'https:'];
const iters = 10000000;
let val = 'http:';

let start = performance.now();
let count = 0;
for (let i = 0; i < iters; i++) {
  if (arr2.includes(val)) count++;
}
let timeArrayIncludes2 = performance.now() - start;

start = performance.now();
count = 0;
for (let i = 0; i < iters; i++) {
  if (['http:', 'https:'].includes(val)) count++;
}
let timeInlineArrayIncludes2 = performance.now() - start;

start = performance.now();
count = 0;
for (let i = 0; i < iters; i++) {
  if (val === 'http:' || val === 'https:') count++;
}
let timeBool2 = performance.now() - start;


const arr8 = ['BULLISH', 'RISK-ON', 'GROWING', 'PROFITABLE', 'ALIGNED', 'NORMAL', 'EXTREME GREED', 'GREED'];
const set8 = new Set(arr8);
val = 'GREED';

start = performance.now();
count = 0;
for (let i = 0; i < iters; i++) {
  if (arr8.includes(val)) count++;
}
let timeArrayIncludes8 = performance.now() - start;

start = performance.now();
count = 0;
for (let i = 0; i < iters; i++) {
  if (['BULLISH', 'RISK-ON', 'GROWING', 'PROFITABLE', 'ALIGNED', 'NORMAL', 'EXTREME GREED', 'GREED'].includes(val)) count++;
}
let timeInlineArrayIncludes8 = performance.now() - start;

start = performance.now();
count = 0;
for (let i = 0; i < iters; i++) {
  if (set8.has(val)) count++;
}
let timeSet8 = performance.now() - start;


console.log(`2 elements:`);
console.log(`Array.includes (hoisted): ${timeArrayIncludes2.toFixed(2)}ms`);
console.log(`Array.includes (inline): ${timeInlineArrayIncludes2.toFixed(2)}ms`);
console.log(`Boolean equality: ${timeBool2.toFixed(2)}ms`);
console.log(`Ratio (inline Array vs Bool): ${(timeInlineArrayIncludes2/timeBool2).toFixed(2)}x`);

console.log(`\n8 elements:`);
console.log(`Array.includes (hoisted): ${timeArrayIncludes8.toFixed(2)}ms`);
console.log(`Array.includes (inline): ${timeInlineArrayIncludes8.toFixed(2)}ms`);
console.log(`Set.has (hoisted): ${timeSet8.toFixed(2)}ms`);
console.log(`Ratio (inline Array vs hoisted Set): ${(timeInlineArrayIncludes8/timeSet8).toFixed(2)}x`);
