function eqArrays(arrayOne, arrayTwo) {
  let arrayOneNumbs = [];
  let arrayTwoNumbs = [];


  //Making sure both arrays have the same length
  if (arrayOneNumbs.length === arrayTwoNumbs.length) {

    for (let i = 0; i < arrayOneNumbs.length; i++) {
      //Looping to compare each array is equal
      if (arrayOneNumbs[i] !== arrayTwoNumbs[i]) {
        console.log(arrayOneNumbs[i], arrayTwoNumbs[i]);
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

function without(source, itemsToRemove) {
  let givenArrayCopy = source;

  for (let i = 0; i < source.length; i++){
    for (let j = 0; j < itemsToRemove.length; j++){
      if (source[i] === itemsToRemove[j]) {
        givenArrayCopy.splice(i, 1);
      }

    }
  }

  return givenArrayCopy;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]) );
assertArraysEqual(without([1, 2, 3 ,4], [3]), without([1, 2, 3 ,4], [3]));
assertArraysEqual(without([1, 2, 3 ,4], [3]), without([1, 2, 5 ,4], [3]));
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"])