// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(givenString) {
  let letterCount = {};

  givenString = givenString.replace(/\s/g, '');

  for (let letter in givenString){
      if (letterCount[givenString[letter]]) {
        letterCount[givenString[letter]]++;
      } else {
        letterCount[givenString[letter]] = 1;
      }
  }

  return letterCount;
};


console.log(countLetters("lighthouse in the house"));

