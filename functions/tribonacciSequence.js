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
