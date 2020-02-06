function eqArrays(arrayOne, arrayTwo) {
  let arrayOneNumbs = [];
  let arrayTwoNumbs = [];

  arrayOneNumbs = arrayOne;
  arrayTwoNumbs = arrayTwo;

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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(givenArray, callback) {
  let results = [];

  for (let item of givenArray) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
assertArraysEqual(map(words, word => word[0]), results1);
assertArraysEqual(map(words, word => word[1]), results1);