function countLetters(strToCount) {
  var strToCount = strToCount.replace(/\s+/g, '');
  var freq = {};
  for (i = 0; i < strToCount.length; i++) {
    var char = strToCount.charAt(i);

    if (freq[char]) {
      freq[char]++;
    }
    else {
      freq[char] = 1;
    }
  }
  return freq;
}

console.log(countLetters("lighthouse in the house"));