function isPangram(sentence, letters) {
  sentence = sentence.replaceAll(" ", "");
  sentence = sentence.replace(/\W/g, "");
  var arSentence = sentence.split("");
  var arLetters = letters.split("");
  arSentence = arSentence.map((x) => x.toLowerCase());
  for (var i = 0; i < arLetters.length; i++) {
    if (!arSentence.includes(arLetters[i])) return false;
  }
  for (var i = 0; i < arSentence.length; i++) {
    if (!arLetters.includes(arSentence[i])) return false;
  }
  return true;
}
console.log(isPangram("Hello World!", "helowrd"));
