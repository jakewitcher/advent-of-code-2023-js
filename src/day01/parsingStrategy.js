const partTwoMatchConverter = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
};

const partOneRegex = /(\d)/g;
const partTwoRegex = /(?=(one|two|three|four|five|six|seven|eight|nine|\d))/g;

const partOneMapper = (match) => match;
const partTwoMapper = (match) =>
  isNaN(Number(match)) ? partTwoMatchConverter[match] : match;

const partOne = (row) => strategy(row, partOneRegex, partOneMapper);
const partTwo = (row) => strategy(row, partTwoRegex, partTwoMapper);

function strategy(row, regex, mapper) {
  const matches = [...row.matchAll(regex)];

  return Number(mapper(matches[0][1]) + mapper(matches[matches.length - 1][1]));
}

export const ParsingStrategy = {
  partOne,
  partTwo,
};
