import { ScratchCard } from './scratchCard.js';
import intersection from 'lodash.intersection';
import fs from 'fs';

export class ScratchCardPile {
  constructor(pile) {
    this.pile = ScratchCardPile.parse(pile);
  }

  calculateWinningPoints() {
    let sum = 0;

    for (const scratchCard of this.pile) {
      const matchingNumbers = intersection(
        scratchCard.winningNumbers,
        scratchCard.actualNumbers
      );

      if (matchingNumbers.length === 0) {
        continue;
      }

      sum += Math.pow(2, matchingNumbers.length - 1);
    }

    return sum;
  }

  calculateTotalScratchCardsWon() {
    const allScratchCardsCounts = this.pile.map(() => 1);

    for (let i = 0; i < this.pile.length; i++) {
      const scratchCard = this.pile[i];
      const currentScratchCardCount = allScratchCardsCounts[i];

      const matchingNumbers = intersection(
        scratchCard.winningNumbers,
        scratchCard.actualNumbers
      );

      if (matchingNumbers.length === 0) {
        continue;
      }

      const indexesOfScratchCardCountsToIncrement = [
        ...Array(matchingNumbers.length).keys(),
      ].map((ele) => ele + i + 1);

      for (const index of indexesOfScratchCardCountsToIncrement) {
        allScratchCardsCounts[index] =
          allScratchCardsCounts[index] + currentScratchCardCount;
      }
    }

    return allScratchCardsCounts.reduce((acc, ele) => acc + ele, 0);
  }

  static parse(pile) {
    return pile.map((row) => ScratchCard.parse(row));
  }

  static get() {
    return fs.readFileSync('src/day04/input.txt').toString().split('\n');
  }
}
