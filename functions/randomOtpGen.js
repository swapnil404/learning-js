function otp(digits) {
  let otp = Math.random();
  console.log(otp);
  otp = otp * 10 ** digits;
  return Math.floor(otp);
}
console.log(otp(6));
