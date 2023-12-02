import fs from 'fs';

export class CalibrationDocument {
  static get() {
    return fs.readFileSync('src/day01/input.txt').toString().split('\n');
  }
}
