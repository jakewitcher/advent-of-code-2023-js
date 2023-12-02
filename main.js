import { Trebuchet } from './src/day01/trebuchet.js';
import { ParsingStrategy } from './src/day01/parsingStrategy.js';
import { CalibrationDocument } from './src/day01/calibrationDocument.js';

(function main() {
  const input = CalibrationDocument.get();
  const trebuchet = new Trebuchet(ParsingStrategy.partTwo);

  const result = trebuchet.calibrate(input);
  console.log(result);
})();
