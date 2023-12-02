export class Trebuchet {
  constructor(parsingStrategy) {
    this.parsingStrategy = parsingStrategy;
  }

  calibrate(calibrationDocument) {
    return calibrationDocument.reduce(
      (acc, row) => acc + this.parsingStrategy(row),
      0
    );
  }
}
