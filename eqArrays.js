// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (arrayOne, arrayTwo) {
  let arrayOneCopy = arrayOne;
  let arrayTwoCopy = arrayTwo;

  //making sure both arrays have the same length
  if (arrayOneCopy.length === arrayTwoCopy.length) {

    for (let i = 0; i < arrayOneCopy.length; i++) {

      if (Array.isArray(arrayOneCopy[i])) {
        if (Array.isArray(arrayTwoCopy[i])) {

          if (!eqArrays(arrayOneCopy[i], arrayTwoCopy[i])) {
            return false;
          }

        } else {
          return false;
        }
      }


    }

  } else {
    return false;
  }

  return true;
}

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
