function rgbToHex(rgb) {
  var one, two, three, oneR, twoR, threeR;

  function numToHex(elementNum) {
    var numb = Math.floor(elementNum / 16);
    return numb;
  }

  function numToLetter(num) {
    var num = num;
    switch (num) {
      case 10:
        num = "A";
        break;
      case 11:
        num = "B";
        break;
      case 12:
        num = "C";
        break;
      case 13:
        num = "D";
        break;
      case 14:
        num = "E";
        break;
      case 15:
        num = "F";
        break;
    }
    return num;
  }
  var nums = rgb.replace("rgb(", "").replace(")", "").split(",").map(Number);

  one = numToHex(nums[0]);
  two = numToHex(nums[1]);
  three = numToHex(nums[2]);

  oneR = nums[0] % 16;
  twoR = nums[1] % 16;
  threeR = nums[2] % 16;

  if (one > 9) {
    one = numToLetter(one);
    one = one.toLowerCase();
  }
  if (two > 9) {
    two = numToLetter(two);
    two = two.toLowerCase();
  }
  if (three > 9) {
    three = numToLetter(three);
    three = three.toLowerCase();
  }
  if (oneR > 9) {
    oneR = numToLetter(oneR);
    oneR = oneR.toLowerCase();
  }
  if (twoR > 9) {
    twoR = numToLetter(twoR);
    twoR = twoR.toLowerCase();
  }
  if (threeR > 9) {
    threeR = numToLetter(threeR);
    threeR = threeR.toLowerCase();
  }
  return "#" + one + oneR + two + twoR + three + threeR;
}
console.log(rgbToHex("rgb(255, 255, 255)"));
