function buildAcronym(str) {
  let arStr = str.split(" ");
  let i = 0;
  let acronym;
  let newArr = Array.from({ length: arStr.length });
  let newArr2 = Array.from({ length: arStr.length });
  let words = ["a", "for", "an", "and", "of"];
  for (let k = 0; k < words.length; k++) {
    for (let j = 0; j < arStr.length; j++) {
      if (words[k] == arStr[j]) {
        arStr.splice(j, 1);
      }
    }
  }
  for (let i = 0; i < arStr.length; i++) {
    newArr[i] = arStr[i].split("");
    newArr2[i] = newArr[i][0].toUpperCase();
  }
  acronym = newArr2.join(",");
  acronym = acronym.replaceAll(",", "");
  return acronym;
}
console.log(buildAcronym("Search Engine Optimization"));
console.log(buildAcronym("National Aeronautics and Space Administration"));
console.log(buildAcronym("For your information"));
