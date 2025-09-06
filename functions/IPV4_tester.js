function isValidIPv4(ipv4) {
  var isValidIPv4 = true;
  ipv4 = ipv4.split(".");
  if (ipv4.length != 4) {
    isValidIPv4 = false;
  }
  for (var i = 0; i < 4; i++) {
    let num = parseInt(ipv4[i]);
    if (isNaN(num)) {
      isValidIPv4 = false;
    } else if (num < 0 || num > 255) {
      isValidIPv4 = false;
    } else {
      ipv4[i].split("");
      if (ipv4[i].length > 1 && ipv4[i][0] == "0") {
        isValidIPv4 = false;
      }
    }
  }
  return isValidIPv4;
}
console.log(isValidIPv4("192.168.1.1"));
