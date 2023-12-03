export class GondolaEngine {
  constructor(engineSchematic) {
    this.engineSchematic = engineSchematic;
  }

  findValidPartNumbersSum() {
    let sum = 0;

    for (const partNumberRow of this.engineSchematic.partNumbers) {
      for (const partNumber of partNumberRow) {
        const symbolRows = this.getSymbolRows(partNumber.row);

        const rangeSize = partNumber.id.toString().length + 2;
        const indexRange = [...Array(rangeSize).keys()].map(
          (i) => i + (partNumber.startIndex - 1)
        );

        for (const symbolRow of symbolRows) {
          let isSymbolFound = false;

          for (const index of indexRange) {
            if (symbolRow.has(index)) {
              sum += partNumber.id;
              isSymbolFound = true;

              break;
            }
          }

          if (isSymbolFound) {
            break;
          }
        }
      }
    }

    return sum;
  }

  findGearRatioSum() {
    const matches = new Map();

    for (const partNumberRow of this.engineSchematic.partNumbers) {
      for (const partNumber of partNumberRow) {
        const symbolRows = this.getSymbolRows(partNumber.row);

        const rangeSize = partNumber.id.toString().length + 2;
        const indexRange = [...Array(rangeSize).keys()].map(
          (i) => i + (partNumber.startIndex - 1)
        );

        for (const symbolRow of symbolRows) {
          let isSymbolFound = false;

          for (const index of indexRange) {
            const symbol = symbolRow.get(index);

            if (symbolRow.has(index) && symbol.symbol === '*') {
              const symbolId = this.createSymbolId(symbol);

              if (!matches.has(symbolId)) {
                matches.set(symbolId, []);
              }

              const match = matches.get(symbolId);
              match.push(partNumber);
              isSymbolFound = true;

              break;
            }
          }

          if (isSymbolFound) {
            break;
          }
        }
      }
    }

    return [...matches.values()]
      .filter((match) => match.length === 2)
      .map((match) => match[0].id * match[1].id)
      .reduce((acc, ratio) => acc + ratio, 0);
  }

  createSymbolId(symbol) {
    return `${symbol.row}${symbol.index}`;
  }

  getSymbolRows(partNumberRow) {
    let rowIndexes = [];

    if (partNumberRow === 0) {
      rowIndexes = [partNumberRow, partNumberRow + 1];
    } else if (partNumberRow === this.engineSchematic.partNumbers.length - 1) {
      rowIndexes = [partNumberRow - 1, partNumberRow];
    } else {
      rowIndexes = [partNumberRow - 1, partNumberRow, partNumberRow + 1];
    }

    return rowIndexes.map((index) => this.engineSchematic.symbols[index]);
  }
}
