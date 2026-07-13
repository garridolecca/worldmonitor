import { performance } from 'node:perf_hooks';

// Mock data
const flights = Array.from({ length: 5000 }).map((_, i) => ({
  id: `flight-${i}`,
  lat: 35 + (Math.random() * 20 - 10),
  lon: 50 + (Math.random() * 20 - 10),
  operator: 'usaf',
  aircraftType: ['fighter', 'tanker', 'awacs', 'reconnaissance', 'transport', 'bomber', 'drone'][i % 7]
}));

const POSTURE_THEATERS = [
  {
    id: 'iran-theater',
    name: 'Iran Theater',
    shortName: 'IRAN',
    targetNation: 'Iran',
    regions: ['persian-gulf', 'strait-hormuz', 'iran-border'],
    bounds: { north: 42, south: 20, east: 65, west: 30 },
    thresholds: { elevated: 8, critical: 20 },
    navalThresholds: { elevated: 2, critical: 5 },
    strikeIndicators: { minTankers: 2, minAwacs: 1, minFighters: 5 },
  },
  {
    id: 'taiwan-theater',
    name: 'Taiwan Strait',
    shortName: 'TAIWAN',
    targetNation: 'Taiwan',
    regions: ['taiwan-strait', 'south-china-sea'],
    bounds: { north: 30, south: 18, east: 130, west: 115 },
    thresholds: { elevated: 6, critical: 15 },
    navalThresholds: { elevated: 4, critical: 10 },
    strikeIndicators: { minTankers: 1, minAwacs: 1, minFighters: 4 },
  }
];

function old_getTheaterPostureSummaries(flights) {
  const summaries = [];

  for (const theater of POSTURE_THEATERS) {
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

    // Just simulating a bit of work for benchmark parity
    const total = Object.values(byType).reduce((a, b) => a + b, 0);
  }
  return summaries;
}

function new_getTheaterPostureSummaries(flights) {
  const summaries = [];

  for (const theater of POSTURE_THEATERS) {
    let fighters = 0, tankers = 0, awacs = 0, reconnaissance = 0, transport = 0, bombers = 0, drones = 0;

    for (const f of flights) {
      if (
        f.lat >= theater.bounds.south &&
        f.lat <= theater.bounds.north &&
        f.lon >= theater.bounds.west &&
        f.lon <= theater.bounds.east
      ) {
         switch (f.aircraftType) {
            case 'fighter': fighters++; break;
            case 'tanker': tankers++; break;
            case 'awacs': awacs++; break;
            case 'reconnaissance': reconnaissance++; break;
            case 'transport': transport++; break;
            case 'bomber': bombers++; break;
            case 'drone': drones++; break;
         }
      }
    }

    const byType = { fighters, tankers, awacs, reconnaissance, transport, bombers, drones };
    const total = fighters + tankers + awacs + reconnaissance + transport + bombers + drones;
  }
  return summaries;
}

const N = 1000;
let t0 = performance.now();
for (let i = 0; i < N; i++) {
  old_getTheaterPostureSummaries(flights);
}
let t1 = performance.now();
console.log(`Old: ${t1 - t0}ms`);

t0 = performance.now();
for (let i = 0; i < N; i++) {
  new_getTheaterPostureSummaries(flights);
}
t1 = performance.now();
console.log(`New: ${t1 - t0}ms`);
