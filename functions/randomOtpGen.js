function otp(digits) {
  let otp = Math.random();
  otp = otp * (digits - 2) ** 10;
  return Math.floor(otp);
}
console.log(otp(6));
