import { performance } from 'perf_hooks';

// Mock data
const flights = Array.from({ length: 50000 }, () => ({
  lat: Math.random() * 180 - 90,
  lon: Math.random() * 360 - 180,
  aircraftType: ['fighter', 'tanker', 'awacs', 'reconnaissance', 'transport', 'bomber', 'drone', 'other'][Math.floor(Math.random() * 8)],
  operator: ['USAF', 'USN', 'RAF', 'FAF'][Math.floor(Math.random() * 4)]
}));

const theater = {
  bounds: { south: -90, north: 90, west: -180, east: 180 } // Everything matches
};

// Original Implementation
function original(flights) {
  const theaterFlights = flights.filter(
    (f) =>
      f.lat >= theater.bounds.south &&
      f.lat <= theater.bounds.north &&
      f.lon >= theater.bounds.west &&
      f.lon <= theater.bounds.east
  );

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

// Optimized Implementation
function optimized(flights) {
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

  // Single pass filtering and counting
  const theaterFlights = [];

  for (const f of flights) {
    if (
      f.lat >= theater.bounds.south &&
      f.lat <= theater.bounds.north &&
      f.lon >= theater.bounds.west &&
      f.lon <= theater.bounds.east
    ) {
      theaterFlights.push(f);

      const type = f.aircraftType;
      if (type === 'fighter') byType.fighters++;
      else if (type === 'tanker') byType.tankers++;
      else if (type === 'awacs') byType.awacs++;
      else if (type === 'reconnaissance') byType.reconnaissance++;
      else if (type === 'transport') byType.transport++;
      else if (type === 'bomber') byType.bombers++;
      else if (type === 'drone') byType.drones++;

      if (['fighter', 'tanker', 'awacs', 'reconnaissance', 'transport', 'bomber', 'drone'].includes(type)) {
        total++;
      }

      byOperator[f.operator] = (byOperator[f.operator] || 0) + 1;
    }
  }

  return { byType, total, byOperator };
}

// Even more optimized Implementation
function optimized2(flights) {
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

  const theaterFlights = [];

  for (let i = 0; i < flights.length; i++) {
    const f = flights[i];
    if (
      f.lat >= theater.bounds.south &&
      f.lat <= theater.bounds.north &&
      f.lon >= theater.bounds.west &&
      f.lon <= theater.bounds.east
    ) {
      theaterFlights.push(f);

      const type = f.aircraftType;
      switch(type) {
        case 'fighter': byType.fighters++; total++; break;
        case 'tanker': byType.tankers++; total++; break;
        case 'awacs': byType.awacs++; total++; break;
        case 'reconnaissance': byType.reconnaissance++; total++; break;
        case 'transport': byType.transport++; total++; break;
        case 'bomber': byType.bombers++; total++; break;
        case 'drone': byType.drones++; total++; break;
      }

      const op = f.operator;
      byOperator[op] = (byOperator[op] || 0) + 1;
    }
  }

  return { byType, total, byOperator };
}

// Warmup
for (let i = 0; i < 100; i++) {
  original(flights);
  optimized(flights);
  optimized2(flights);
}

// Benchmark Original
let start = performance.now();
for (let i = 0; i < 1000; i++) {
  original(flights);
}
const timeOriginal = performance.now() - start;

// Benchmark Optimized 1
start = performance.now();
for (let i = 0; i < 1000; i++) {
  optimized(flights);
}
const timeOptimized = performance.now() - start;

// Benchmark Optimized 2
start = performance.now();
for (let i = 0; i < 1000; i++) {
  optimized2(flights);
}
const timeOptimized2 = performance.now() - start;

console.log(`Original: ${timeOriginal.toFixed(2)}ms`);
console.log(`Optimized 1: ${timeOptimized.toFixed(2)}ms (${(timeOriginal / timeOptimized).toFixed(2)}x faster)`);
console.log(`Optimized 2: ${timeOptimized2.toFixed(2)}ms (${(timeOriginal / timeOptimized2).toFixed(2)}x faster)`);
