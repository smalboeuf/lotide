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


const takeUntil = function (array, callback) {
  let newArray = [];
  let counter = 0;

  for (let value of array) {
    
    if (callback(value)) {
      return newArray;  
    } else {
      newArray.push(array[counter]);
    }
    counter++;
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//[1, 2, 5, 7, 2]
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, results2);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);