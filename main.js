import { ScratchCardPile } from './src/day04/scratchCardPile.js';

(function main() {
  const input = ScratchCardPile.get();
  const scratchCardPile = new ScratchCardPile(input);
  const result = scratchCardPile.calculateWinningPoints();
  console.log(result);
})();
