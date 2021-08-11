const countLetters = function(str) {
  const results = {};

  for (let letter of str) {
    
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;
