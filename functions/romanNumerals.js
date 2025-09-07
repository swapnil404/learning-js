function parseRomanNumeral(numeral) {
  let romanNumeral = 0;
  numeral = numeral.split("");
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < numeral.length; i++) {
    if (values[numeral[i]] < values[numeral[i + 1]]) {
      romanNumeral -= values[numeral[i]];
    } else {
      romanNumeral += values[numeral[i]];
    }
  }
  return romanNumeral;
}
console.log(parseRomanNumeral("XIV"));
console.log(parseRomanNumeral("XCIX"));
