var hello = "brother";
function sibling() {
  var hello = "sister";
  console.log(hello);
}
sibling();
console.log(hello);
var num;
function multiply5(num) {
  return num * 5;
}
console.log(multiply5(5));
var arry = [1, 2, 3, 4, 5];
function queue(num) {
  arry.push(num);
  arry.shift();
  console.log(arry);
}
queue(6);
function revQueue(num) {
  arry.unshift(num);
  arry.pop();
  console.log(arry);
}
revQueue(1);
function bool(ans) {
  if ((ans = true)) {
    return "Correct Answer";
  } else {
    return "Incorrect Answer";
  }
}
console.log(bool(true));

var cars = {
  name: "BMW",
  model: "2020",
};
console.log(Object.keys(cars)[0]);

function tribonacciSequence(startSequence, length) {
  var ss = startSequence.length;
  if (length == 0) {
    startSequence = [];
  } else if (length >= 3) {
    while (ss < length) {
      var newElement =
        startSequence[ss - 3] + startSequence[ss - 2] + startSequence[ss - 1];
      startSequence.push(newElement);
      ss++;
    }
  } else if (length == 2) {
    startSequence.pop();
  } else {
    startSequence.pop();
    startSequence.pop();
  }
  return startSequence;
}
console.log(tribonacciSequence([21, 32, 43], 1));
