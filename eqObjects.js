// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

  //making sure both arrays have the same length
  if (arrayOneNumbs.length === arrayTwoNumbs.length) {

    for (let i = 0; i < arrayOneNumbs.length; i++) {
      if (arrayOneNumbs[i] !== arrayTwoNumbs[i]) {
        return false;
      }
    }

  } else {
    return false;
  }

  return true;
}

const eqObjects = function(object1, object2) {

  //Check to see if both objects have the same amount of keys in the first place
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (let key in object1) {

    //Check through each key in object one and make sure it exists in the second object and their values are the same

    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (!(eqArrays(object1[key], object2[key]))) {
          return false;
        }
      } else {
        
        return false;
      }

    } else {
      if (!(object2[key] && (object2[key] === object1[key]))) {
        console.log("gothere");
        return false;
      }
    }
    
  }
  
  return true;

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true



const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false