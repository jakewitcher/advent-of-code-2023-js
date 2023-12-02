import { describe, expect, test } from 'vitest';
import { Trebuchet } from '../../src/day01/trebuchet.js';
import { ParsingStrategy } from '../../src/day01/parsingStrategy.js';
import { CalibrationDocument } from '../../src/day01/calibrationDocument.js';

describe('trebuchet', () => {
  describe('part one', () => {
    describe('it sums the calibration values from the calibration document', () => {
      test('when the example input is used', () => {
        const input = ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet'];
        const trebuchet = new Trebuchet(ParsingStrategy.partOne);

        const result = trebuchet.calibrate(input);

        expect(result).toEqual(142);
      });

      test('when the file input is used', () => {
        const input = CalibrationDocument.get();
        const trebuchet = new Trebuchet(ParsingStrategy.partOne);

        const result = trebuchet.calibrate(input);

        expect(result).toEqual(54450);
      });
    });
  });

  describe('part two', () => {
    describe('it sums the calibration values from the calibration document', () => {
      test('when the example input is used', () => {
        const input = [
          'two1nine',
          'eightwothree',
          'abcone2threexyz',
          'xtwone3four',
          '4nineeightseven2',
          'zoneight234',
          '7pqrstsixteen',
        ];
        const trebuchet = new Trebuchet(ParsingStrategy.partTwo);

        const result = trebuchet.calibrate(input);

        expect(result).toEqual(281);
      });

      test('when the file input is used', () => {
        const input = CalibrationDocument.get();
        const trebuchet = new Trebuchet(ParsingStrategy.partTwo);

        const result = trebuchet.calibrate(input);

        expect(result).toEqual(54265);
      });
    });
  });
});
