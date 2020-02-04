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
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayOne} === ${arrayTwo}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`);
  }

}


function middle(givenArray) {
  let middleArray = [];

  if (givenArray.length <= 2) {
    return middleArray;
  }

  //See if the length of the array is odd or even
  if (givenArray.length % 2 === 0) {
    middleArray.push(givenArray[Math.floor((givenArray.length - 1) / 2)]);
    
    middleArray.push(givenArray[Math.floor((givenArray.length) / 2)]);

  } else {
    middleArray.push(givenArray[Math.floor((givenArray.length - 1) / 2)]);
  }
  

  return middleArray;
}


console.log(middle([1, 2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 4])));
console.log(assertArraysEqual(middle([1, 3, 4]), middle([1, 2, 3, 4])));