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

function flatten(givenArray) {

  let flattenedArray = [];

  for (let i = 0; i < givenArray.length; i++) {
    if(Array.isArray(givenArray[i])){
      for(let j = 0; j < givenArray[i].length; j++){
        flattenedArray.push(givenArray[i][j]);
      }
    } else {
      flattenedArray.push(givenArray[i]);
    }
  }

  return flattenedArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));