/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function (s) {
  let number = 0;
  if (s.length == 1) return 1;

  for (let i = 0; i < s.length; i++) {
    const set = new Set();
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) break;
      set.add(s[j]);
      number = Math.max(number, j - i + 1);
    }
  }

  return number;
};
