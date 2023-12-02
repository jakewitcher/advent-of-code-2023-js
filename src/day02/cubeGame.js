import { CubeGameRound } from './cubeGameRound.js';

export class CubeGame {
  constructor(row) {
    const { id, rounds } = CubeGame.parseRow(row);

    this.id = id;
    this.rounds = rounds;
  }

  static parseRow(row) {
    const idMatch = row.match(/^Game (?<id>\d+):/);
    const id = Number(idMatch.groups.id);

    const roundsMatches = row.matchAll(
      /(?<round>(((\d+ (red|blue|green)))(, | )?)+)/g
    );
    const rounds = [...roundsMatches].map((match) =>
      this.parseRound(match.groups.round)
    );

    return { id, rounds };
  }

  static parseRound(round) {
    const cubeMatches = round.matchAll(
      /((?<count>\d+) (?<color>red|blue|green))/g
    );

    const cubes = [...cubeMatches].reduce((acc, match) => {
      acc[match.groups.color] = Number(match.groups.count);
      return acc;
    }, {});

    return new CubeGameRound(cubes);
  }
}
