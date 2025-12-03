function allUnique(str) {
  let strArr = str.split("");
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; i++) {
      if (i == j) {
        j++;
      } else if (strArr[i] == strArr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(allUnique("hello"));
