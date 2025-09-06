function repeatVowels(str) {
  var arStr = str.split("");
  var k = 0;
  for (var i = 0; i < arStr.length; i++) {
    if (
      arStr[i] == "a" ||
      arStr[i] == "e" ||
      arStr[i] == "i" ||
      arStr[i] == "o" ||
      arStr[i] == "u" ||
      arStr[i] == "A" ||
      arStr[i] == "E" ||
      arStr[i] == "I" ||
      arStr[i] == "O" ||
      arStr[i] == "U"
    ) {
      for (var j = 0; j < k; j++) {
        var vowel = arStr[i];
        vowel = vowel.toLowerCase();
        arStr.splice(i + 1, 0, vowel);
        i++;
      }
      k++;
    }
  }
  str = arStr.join("");
  return str;
}
console.log(repeatVowels("Hello World"));
