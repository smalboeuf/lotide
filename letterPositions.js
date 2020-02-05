function eqArrays(arrayOne, arrayTwo) {
  let arrayOneNumbs = [];
  let arrayTwoNumbs = [];

  //Convert the arrays to numbers
  for (let i = 0; i < arrayOne.length; i++) {
    arrayOneNumbs[i] = Number(arrayOne[i]);
  }

  for (let i = 0; i < arrayTwo.length; i++) {
    arrayTwoNumbs[i] = Number(arrayTwo[i]);
  }

  //Making sure both arrays have the same length
  if (arrayOneNumbs.length === arrayTwoNumbs.length) {

    for (let i = 0; i < arrayOneNumbs.length; i++) {
      //Looping to compare each array is equal
      if (arrayOneNumbs[i] !== arrayTwoNumbs[i]) {
        return false;
      }
    }

  } else {
    return false;
  }

  return true;
}

function assertArraysEqual(arrayOne, arrayTwo) {
  if(eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }
}


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

console.log(letterPositions("lighthouse in the house"));

assertArraysEqual(letterPositions("hello").e, [1]);