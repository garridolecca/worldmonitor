import { performance } from 'perf_hooks';

// Setup data
const statuses = ['operational', 'degraded', 'outage', 'unknown', 'other'];

const services = Array.from({ length: 10000 }, () => ({
  status: statuses[Math.floor(Math.random() * statuses.length)],
}));

function original() {
  const summary = {
    operational: services.filter((s) => s.status === 'operational').length,
    degraded: services.filter((s) => s.status === 'degraded').length,
    outage: services.filter((s) => s.status === 'outage').length,
    unknown: services.filter((s) => s.status === 'unknown').length,
  };
  return summary;
}

function optimized() {
  const summary = {
    operational: 0,
    degraded: 0,
    outage: 0,
    unknown: 0,
  };

  for (let i = 0; i < services.length; i++) {
    const status = services[i].status;
    if (status === 'operational') summary.operational++;
    else if (status === 'degraded') summary.degraded++;
    else if (status === 'outage') summary.outage++;
    else if (status === 'unknown') summary.unknown++;
  }

  return summary;
}

// verify
const res1 = original();
const res2 = optimized();
console.assert(JSON.stringify(res1) === JSON.stringify(res2), "Mismatch!");

// Benchmark
const ITERATIONS = 1000;

let start = performance.now();
for (let i = 0; i < ITERATIONS; i++) original();
const origTime = performance.now() - start;

start = performance.now();
for (let i = 0; i < ITERATIONS; i++) optimized();
const optTime = performance.now() - start;

console.log(`Original: ${origTime.toFixed(2)}ms`);
console.log(`Optimized: ${optTime.toFixed(2)}ms`);
console.log(`Improvement: ${(origTime / optTime).toFixed(2)}x`);
