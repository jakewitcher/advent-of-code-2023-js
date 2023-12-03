import { describe, expect, test } from 'vitest';
import { EngineSchematic } from '../../src/day03/engineSchematic.js';
import { GondolaEngine } from '../../src/day03/gondolaEngine.js';

describe('gondola engine', () => {
  describe('it parses the engine schematic input', () => {
    test('when the schematic has both part numbers and symbols', () => {
      const input = ['467..114..', '...*....=.', '.$...+.58.'];

      const engineSchematic = new EngineSchematic(input);

      expect(engineSchematic.partNumbers).toHaveLength(3);
      expect(engineSchematic.partNumbers[0]).toHaveLength(2);
      expect(engineSchematic.partNumbers[1]).toHaveLength(0);
      expect(engineSchematic.partNumbers[2]).toHaveLength(1);

      expect(engineSchematic.partNumbers[0][0].id).toEqual(467);
      expect(engineSchematic.partNumbers[0][0].row).toEqual(0);
      expect(engineSchematic.partNumbers[0][0].startIndex).toEqual(0);

      expect(engineSchematic.partNumbers[0][1].id).toEqual(114);
      expect(engineSchematic.partNumbers[0][1].row).toEqual(0);
      expect(engineSchematic.partNumbers[0][1].startIndex).toEqual(5);

      expect(engineSchematic.partNumbers[2][0].id).toEqual(58);
      expect(engineSchematic.partNumbers[2][0].row).toEqual(2);
      expect(engineSchematic.partNumbers[2][0].startIndex).toEqual(7);

      expect(engineSchematic.symbols).toHaveLength(3);
      expect(engineSchematic.symbols[0].size).toEqual(0);
      expect(engineSchematic.symbols[1].size).toEqual(2);
      expect(engineSchematic.symbols[2].size).toEqual(2);

      expect(engineSchematic.symbols[1].get(3).symbol).toEqual('*');
      expect(engineSchematic.symbols[1].get(3).row).toEqual(1);
      expect(engineSchematic.symbols[1].get(3).index).toEqual(3);

      expect(engineSchematic.symbols[1].get(8).symbol).toEqual('=');
      expect(engineSchematic.symbols[1].get(8).row).toEqual(1);
      expect(engineSchematic.symbols[1].get(8).index).toEqual(8);

      expect(engineSchematic.symbols[2].get(1).symbol).toEqual('$');
      expect(engineSchematic.symbols[2].get(1).row).toEqual(2);
      expect(engineSchematic.symbols[2].get(1).index).toEqual(1);

      expect(engineSchematic.symbols[2].get(5).symbol).toEqual('+');
      expect(engineSchematic.symbols[2].get(5).row).toEqual(2);
      expect(engineSchematic.symbols[2].get(5).index).toEqual(5);
    });
  });

  describe('part one', () => {
    describe('it calculates the sum of all engine parts', () => {
      test('when the example input is used', () => {
        const input = [
          '467..114..',
          '...*......',
          '..35..633.',
          '......#...',
          '617*......',
          '.....+.58.',
          '..592.....',
          '......755.',
          '...$.*....',
          '.664.598..',
        ];

        const engineSchematic = new EngineSchematic(input);
        const gondolatEngine = new GondolaEngine(engineSchematic);

        const result = gondolatEngine.findValidPartNumbersSum();

        expect(result).toEqual(4361);
      });

      test('when the file input is used', () => {
        const input = EngineSchematic.get();

        const engineSchematic = new EngineSchematic(input);
        const gondolatEngine = new GondolaEngine(engineSchematic);

        const result = gondolatEngine.findValidPartNumbersSum();

        expect(result).toEqual(539433);
      });
    });
  });

  describe('part two', () => {
    describe('it calculates the sum of all engine parts', () => {
      test('when the example input is used', () => {
        const input = [
          '467..114..',
          '...*......',
          '..35..633.',
          '......#...',
          '617*......',
          '.....+.58.',
          '..592.....',
          '......755.',
          '...$.*....',
          '.664.598..',
        ];

        const engineSchematic = new EngineSchematic(input);
        const gondolatEngine = new GondolaEngine(engineSchematic);

        const result = gondolatEngine.findGearRatioSum();

        expect(result).toEqual(467835);
      });

      test('when the file input is used', () => {
        const input = EngineSchematic.get();

        const engineSchematic = new EngineSchematic(input);
        const gondolatEngine = new GondolaEngine(engineSchematic);

        const result = gondolatEngine.findGearRatioSum();

        expect(result).toEqual(75847567);
      });
    });
  });
});
