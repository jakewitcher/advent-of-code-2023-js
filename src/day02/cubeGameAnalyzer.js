import { CubeGameBag } from './cubeGameBag.js';

const CubeColor = Object.freeze({
  Red: 'red',
  Green: 'green',
  Blue: 'blue',
});

export class CubeGameAnalyzer {
  constructor() {
    this.bag = new CubeGameBag({ red: 12, green: 13, blue: 14 });
  }

  sumPossibleGamesIds(games) {
    let sum = 0;

    for (const game of games) {
      const isPossible = game.rounds.every(
        (round) =>
          round.red <= this.bag.red &&
          round.green <= this.bag.green &&
          round.blue <= this.bag.blue
      );

      if (isPossible) {
        sum += game.id;
      }
    }

    return sum;
  }

  sumfewestPossibleCubesPower(games) {
    let sum = 0;

    for (const { rounds } of games) {
      const maxRed = this.findMaxByColor(CubeColor.Red, rounds);
      const maxGreen = this.findMaxByColor(CubeColor.Green, rounds);
      const maxBlue = this.findMaxByColor(CubeColor.Blue, rounds);

      sum += maxRed * maxGreen * maxBlue;
    }

    return sum;
  }

  findMaxByColor(color, rounds) {
    return rounds.reduce(
      (max, round) => Math.max(max, round[color]),
      Number.MIN_SAFE_INTEGER
    );
  }
}
