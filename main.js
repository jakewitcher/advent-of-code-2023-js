import { EngineSchematic } from './src/day03/engineSchematic.js';
import { GondolaEngine } from './src/day03/gondolaEngine.js';

(function main() {
  const input = EngineSchematic.get();

  const engineSchematic = new EngineSchematic(input);
  const gondolatEngine = new GondolaEngine(engineSchematic);

  const result = gondolatEngine.findGearRatioSum();

  console.log(result);
})();
