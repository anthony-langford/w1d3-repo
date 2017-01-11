function countLetters(str) {
  var str = str.replace(/\s+/g, '');
  var strArray = str.split('');
  var freq = {};

  for (var i = 0; i < strArray.length; i++) {
    var char = strArray[i];

    if (freq[char]) {
      freq[char].push(i);
    }
    else {
      freq[char] = [i];
    }
  }
  return freq;
}

console.log(countLetters("lighthouse in the house"));