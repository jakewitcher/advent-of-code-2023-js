import { describe, expect, test } from 'vitest';
import { CubeGame } from '../../src/day02/cubeGame.js';
import { CubeGameAnalyzer } from '../../src/day02/cubeGameAnalyzer.js';
import { CubeGamesPlayed } from '../../src/day02/cubeGamesPlayed.js';

describe('cube game', () => {
  describe('it parses an input game', () => {
    test('when the game has one round', () => {
      const row = 'Game 15: 3 blue, 4 red';
      const cubeGame = new CubeGame(row);

      expect(cubeGame.id).toEqual(15);
      expect(cubeGame.rounds.length).toEqual(1);
      expect(cubeGame.rounds[0]).toEqual({ blue: 3, red: 4, green: 0 });
    });

    test('when the game has multiple rounds', () => {
      const row =
        'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red';
      const cubeGame = new CubeGame(row);

      expect(cubeGame.id).toEqual(3);
      expect(cubeGame.rounds.length).toEqual(3);
      expect(cubeGame.rounds[0]).toEqual({ blue: 6, red: 20, green: 8 });
      expect(cubeGame.rounds[1]).toEqual({ blue: 5, red: 4, green: 13 });
      expect(cubeGame.rounds[2]).toEqual({ blue: 0, red: 1, green: 5 });
    });
  });

  describe('part one', () => {
    describe('it sums the ids of possible games played', () => {
      test('when the example input is used', () => {
        const input = [
          'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
          'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
          'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
          'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
          'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
        ];

        const cubeGameAnalyzer = new CubeGameAnalyzer();
        const games = input.map((row) => new CubeGame(row));

        const result = cubeGameAnalyzer.sumPossibleGamesIds(games);

        expect(result).toEqual(8);
      });

      test('when the file input is used', () => {
        const input = CubeGamesPlayed.get();

        const cubeGameAnalyzer = new CubeGameAnalyzer();
        const games = input.map((row) => new CubeGame(row));

        const result = cubeGameAnalyzer.sumPossibleGamesIds(games);

        expect(result).toEqual(2162);
      });
    });
  });

  describe('part twp', () => {
    describe('it sums the ids of possible games played', () => {
      test('when the example input is used', () => {
        const input = [
          'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
          'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
          'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
          'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
          'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green',
        ];

        const cubeGameAnalyzer = new CubeGameAnalyzer();
        const games = input.map((row) => new CubeGame(row));

        const result = cubeGameAnalyzer.sumfewestPossibleCubesPower(games);

        expect(result).toEqual(2286);
      });

      test('when the file input is used', () => {
        const input = CubeGamesPlayed.get();

        const cubeGameAnalyzer = new CubeGameAnalyzer();
        const games = input.map((row) => new CubeGame(row));

        const result = cubeGameAnalyzer.sumfewestPossibleCubesPower(games);

        expect(result).toEqual(72513);
      });
    });
  });
});
