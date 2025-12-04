/** * @param {string} s * @return {number} */
// this version has O(n^3) time complexity,for better optimised version see functions/longest-substring-without-repeating-characters-optimized.js
var lengthOfLongestSubstring = function (s) {
  let number = 0;
  if (s.length == 1) {
    number = 1;
  } else {
    function hasRepeats(str) {
      const set = new Set();
      for (let char of str) {
        if (set.has(char)) {
          return true;
        }
        set.add(char);
      }
      return false;
    }
    const substrings = [];
    for (let i = 0; i < s.length; i++) {
      for (let j = i; j < s.length; j++) {
        substrings.push(s.slice(i, j + 1));
      }
    }
    for (let k = 0; k < substrings.length; k++) {
      if (substrings[k].length > number) {
        if (!hasRepeats(substrings[k])) {
          number = substrings[k].length;
        }
      }
    }
  }
  return number;
};
