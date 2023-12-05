import { describe, expect, test } from 'vitest';
import { ScratchCardPile } from '../../src/day04/scratchCardPile.js';

describe('scratch card pile', () => {
  describe('it parses the scratch card pile input', () => {
    test('when there are multiple rows', () => {
      const input = [
        'Card   1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
        'Card  23: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
      ];

      const scratchCardPile = new ScratchCardPile(input);

      expect(scratchCardPile.pile).toHaveLength(2);

      expect(scratchCardPile.pile[0].id).toEqual(1);
      expect(scratchCardPile.pile[0].winningNumbers).toHaveLength(5);
      expect(scratchCardPile.pile[0].actualNumbers).toHaveLength(8);
      expect(scratchCardPile.pile[0].winningNumbers).toEqual([
        41, 48, 83, 86, 17,
      ]);
      expect(scratchCardPile.pile[0].actualNumbers).toEqual([
        83, 86, 6, 31, 17, 9, 48, 53,
      ]);

      expect(scratchCardPile.pile[1].id).toEqual(23);
      expect(scratchCardPile.pile[1].winningNumbers).toHaveLength(5);
      expect(scratchCardPile.pile[1].actualNumbers).toHaveLength(8);
      expect(scratchCardPile.pile[1].winningNumbers).toEqual([
        13, 32, 20, 16, 61,
      ]);
      expect(scratchCardPile.pile[1].actualNumbers).toEqual([
        61, 30, 68, 82, 17, 32, 24, 19,
      ]);
    });
  });

  describe('part one', () => {
    test('when the example input is used', () => {
      const input = [
        'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
        'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
        'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
        'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
        'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
        'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
      ];

      const scratchCardPile = new ScratchCardPile(input);
      const result = scratchCardPile.calculateWinningPoints();

      expect(result).toEqual(13);
    });

    test('when the file input is used', () => {
      const input = ScratchCardPile.get();

      const scratchCardPile = new ScratchCardPile(input);
      const result = scratchCardPile.calculateWinningPoints();

      expect(result).toEqual(22897);
    });
  });

  describe('part two', () => {
    test('when the example input is used', () => {
      const input = [
        'Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53',
        'Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19',
        'Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1',
        'Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83',
        'Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36',
        'Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11',
      ];

      const scratchCardPile = new ScratchCardPile(input);
      const result = scratchCardPile.calculateTotalScratchCardsWon();

      expect(result).toEqual(30);
    });

    test('when the file input is used', () => {
      const input = ScratchCardPile.get();

      const scratchCardPile = new ScratchCardPile(input);
      const result = scratchCardPile.calculateTotalScratchCardsWon();

      expect(result).toEqual(5095824);
    });
  });
});
