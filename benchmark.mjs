import { performance } from 'perf_hooks';

// Setup data
const aircraftTypes = ['fighter', 'tanker', 'awacs', 'reconnaissance', 'transport', 'bomber', 'drone', 'other'];
const operators = ['USAF', 'RAF', 'VKS', 'PLAAF'];

const theaterFlights = Array.from({ length: 10000 }, () => ({
  aircraftType: aircraftTypes[Math.floor(Math.random() * aircraftTypes.length)],
  operator: operators[Math.floor(Math.random() * operators.length)]
}));

function original() {
  const byType = {
    fighters: theaterFlights.filter((f) => f.aircraftType === 'fighter').length,
    tankers: theaterFlights.filter((f) => f.aircraftType === 'tanker').length,
    awacs: theaterFlights.filter((f) => f.aircraftType === 'awacs').length,
    reconnaissance: theaterFlights.filter((f) => f.aircraftType === 'reconnaissance').length,
    transport: theaterFlights.filter((f) => f.aircraftType === 'transport').length,
    bombers: theaterFlights.filter((f) => f.aircraftType === 'bomber').length,
    drones: theaterFlights.filter((f) => f.aircraftType === 'drone').length,
  };

  const total = Object.values(byType).reduce((a, b) => a + b, 0);

  const byOperator = {};
  for (const f of theaterFlights) {
    byOperator[f.operator] = (byOperator[f.operator] || 0) + 1;
  }

  return { byType, total, byOperator };
}

function optimized() {
  const byType = {
    fighters: 0,
    tankers: 0,
    awacs: 0,
    reconnaissance: 0,
    transport: 0,
    bombers: 0,
    drones: 0,
  };
  let total = 0;
  const byOperator = {};

  for (let i = 0; i < theaterFlights.length; i++) {
    const f = theaterFlights[i];
    byOperator[f.operator] = (byOperator[f.operator] || 0) + 1;
    switch (f.aircraftType) {
      case 'fighter': byType.fighters++; total++; break;
      case 'tanker': byType.tankers++; total++; break;
      case 'awacs': byType.awacs++; total++; break;
      case 'reconnaissance': byType.reconnaissance++; total++; break;
      case 'transport': byType.transport++; total++; break;
      case 'bomber': byType.bombers++; total++; break;
      case 'drone': byType.drones++; total++; break;
    }
  }

  return { byType, total, byOperator };
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
