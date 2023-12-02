import fs from 'fs';

export class CubeGamesPlayed {
  static get() {
    return fs.readFileSync('src/day02/input.txt').toString().split('\n');
  }
}
