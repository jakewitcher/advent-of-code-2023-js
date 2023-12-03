import fs from 'fs';
import { EngineSchematicPartNumber } from './engineSchematicPartNumber.js';
import { engineSchematicSymbol } from './engineSchematicSymbol.js';

export class EngineSchematic {
  constructor(schematic) {
    this.partNumbers = EngineSchematic.parsePartNumbers(schematic);
    this.symbols = EngineSchematic.parseSymbols(schematic);
  }

  static parsePartNumbers(schematic) {
    const partNumbersMatrix = [];

    for (let i = 0; i < schematic.length; i++) {
      const row = schematic[i];
      const matches = row.matchAll(/(?<partNumber>\d+)/g);

      const partNumbersRow = [...matches].map(
        (match) =>
          new EngineSchematicPartNumber({
            id: Number(match.groups.partNumber),
            row: i,
            startIndex: match.index,
          })
      );

      partNumbersMatrix.push(partNumbersRow);
    }

    return partNumbersMatrix;
  }

  static parseSymbols(schematic) {
    const symbolsMatrix = [];

    for (let i = 0; i < schematic.length; i++) {
      const symbolsRow = new Map();

      const row = schematic[i];
      const matches = row.matchAll(/(?<symbol>[*#%$@+&=\-^/])/g);

      for (const match of matches) {
        const symbol = new engineSchematicSymbol({
          symbol: match.groups.symbol,
          row: i,
          index: match.index,
        });

        symbolsRow.set(symbol.index, symbol);
      }

      symbolsMatrix.push(symbolsRow);
    }

    return symbolsMatrix;
  }

  static get() {
    return fs.readFileSync('src/day03/input.txt').toString().split('\n');
  }
}
