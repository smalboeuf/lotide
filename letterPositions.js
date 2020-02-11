const letterPositions = function(sentence) {
  const results = {};

  sentence = sentence.replace(/\s/g, '');

  for (let letter in sentence){
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(letter);
      } else {
        results[sentence[letter]] = [letter];
      }
  }

  return results;
}

module.exports = letterPositions;

