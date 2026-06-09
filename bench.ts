function runBench() {
  const theaterFlights = [];
  for (let i = 0; i < 1000; i++) {
    theaterFlights.push({
      aircraftType: ['fighter', 'tanker', 'awacs', 'reconnaissance', 'transport', 'bomber', 'drone', 'other'][Math.floor(Math.random() * 8)],
      operator: ['US', 'RU', 'CN'][Math.floor(Math.random() * 3)],
    });
  }

  const start1 = performance.now();
  for (let i = 0; i < 10000; i++) {
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

    const byOperator: Record<string, number> = {};
    for (const f of theaterFlights) {
      byOperator[f.operator] = (byOperator[f.operator] || 0) + 1;
    }
  }
  const end1 = performance.now();

  const start2 = performance.now();
  for (let i = 0; i < 10000; i++) {
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
    const byOperator: Record<string, number> = {};

    for (const f of theaterFlights) {
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
  }
  const end2 = performance.now();

  console.log('Old:', end1 - start1);
  console.log('New:', end2 - start2);
}
runBench();
