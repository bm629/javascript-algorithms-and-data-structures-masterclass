function naiveStringSearch(str, pattern) {
  let numberOfTimesPatternFound = 0;

  for (let i = 0; i < str.length; i++) {
    let j = 0;
    for (j = 0; j < pattern.length; j++) {
      if (pattern[j] !== str[i + j]) {
        break;
      }
    }

    if (j === pattern.length) {
      numberOfTimesPatternFound++;
    }
  }

  return numberOfTimesPatternFound;
}

console.log(
  `naiveStringSearch('lol lorie loled', 'lol') :: ${naiveStringSearch(
    "lol lorie loled",
    "lol"
  )}`
);
