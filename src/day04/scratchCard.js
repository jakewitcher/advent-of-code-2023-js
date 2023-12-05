export class ScratchCard {
  constructor({ id, winningNumbers, actualNumbers }) {
    this.id = id;
    this.winningNumbers = winningNumbers;
    this.actualNumbers = actualNumbers;
  }

  static parse(row) {
    const id = ScratchCard.parseId(row);
    const { winningNumbers, actualNumbers } = ScratchCard.parseNumbersAll(row);

    return new ScratchCard({
      id,
      winningNumbers,
      actualNumbers,
    });
  }

  static parseId(row) {
    const idMatch = row.match(/^Card\s+(?<id>\d+):/);
    return Number(idMatch.groups.id);
  }

  static parseNumbersAll(row) {
    const colonIndex = row.indexOf(':');
    const [winningNumbersRaw, actualNumbersRaw] = row
      .slice(colonIndex + 1)
      .split('|');

    const winningNumbers = ScratchCard.parseNumbers(winningNumbersRaw);
    const actualNumbers = ScratchCard.parseNumbers(actualNumbersRaw);

    return {
      winningNumbers,
      actualNumbers,
    };
  }

  static parseNumbers(numbersRaw) {
    return [...numbersRaw.matchAll(/(?<number>\d+)/g)].map((match) =>
      Number(match.groups.number)
    );
  }
}
