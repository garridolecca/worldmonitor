import { performance } from 'node:perf_hooks';

// Mock data
const flights = [];
const aircraftTypes = ['fighter', 'tanker', 'awacs', 'reconnaissance', 'transport', 'bomber', 'drone', 'other'];
for (let i = 0; i < 10000; i++) {
  flights.push({ aircraftType: aircraftTypes[Math.floor(Math.random() * aircraftTypes.length)] });
}

function countOld(theaterFlights) {
  return {
    fighters: theaterFlights.filter((f) => f.aircraftType === 'fighter').length,
    tankers: theaterFlights.filter((f) => f.aircraftType === 'tanker').length,
    awacs: theaterFlights.filter((f) => f.aircraftType === 'awacs').length,
    reconnaissance: theaterFlights.filter((f) => f.aircraftType === 'reconnaissance').length,
    transport: theaterFlights.filter((f) => f.aircraftType === 'transport').length,
    bombers: theaterFlights.filter((f) => f.aircraftType === 'bomber').length,
    drones: theaterFlights.filter((f) => f.aircraftType === 'drone').length,
  };
}

function countNew(theaterFlights) {
  let fighters = 0, tankers = 0, awacs = 0, reconnaissance = 0, transport = 0, bombers = 0, drones = 0;
  for (let i = 0; i < theaterFlights.length; i++) {
    const type = theaterFlights[i].aircraftType;
    if (type === 'fighter') fighters++;
    else if (type === 'tanker') tankers++;
    else if (type === 'awacs') awacs++;
    else if (type === 'reconnaissance') reconnaissance++;
    else if (type === 'transport') transport++;
    else if (type === 'bomber') bombers++;
    else if (type === 'drone') drones++;
  }
  return { fighters, tankers, awacs, reconnaissance, transport, bombers, drones };
}

const runs = 1000;

const startOld = performance.now();
for (let i = 0; i < runs; i++) {
  countOld(flights);
}
const endOld = performance.now();

const startNew = performance.now();
for (let i = 0; i < runs; i++) {
  countNew(flights);
}
const endNew = performance.now();

console.log(`Old: ${endOld - startOld}ms`);
console.log(`New: ${endNew - startNew}ms`);
console.log(`Speedup: ${((endOld - startOld) / (endNew - startNew)).toFixed(2)}x`);
