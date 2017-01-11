function countLetters(strToCount) {
  strToCount = strToCount.replace(/\s+/g, '');
  // var letters = strToCount.split('');
  // return strToCount;
  var freq = {};
  for (i = 0; i < strToCount.length; i++) {
    var char = strToCount.charAt(i);

    if (freq[char] === 1) {
      freq[char]++;
    }
    else {
      freq[char] = 1;
    }
  }
  return freq;
}

console.log(countLetters("jlksd jfalks djfas"));