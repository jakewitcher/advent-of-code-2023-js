(function main() {
  // const row = 'Game 15: 3 blue, 4 red; 5 green, 2 red, 8 blue';
  // const match = row.match(/^Game (?<id>\d+):/);
  // console.log(match);
  // const matches = row.matchAll(/(?<cubes>(((\d+ (red|blue|green)))(, | )?)+)/g);

  // for (const match of matches) {
  //   console.log(match);
  // }

  const round = '3 blue, 4 red, 5 green';
  const cubeMatches = round.matchAll(
    /((?<count>\d+) (?<color>red|blue|green))/g
  );
  for (const match of cubeMatches) {
    console.log(match);
  }
})();
