const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Loops through given array and pushes value to a new array excluding the first number
function tail(givenArray) {
  let tailArray = [];
  for(let i = 1; i < givenArray.length; i++){
    tailArray.push(givenArray[i]);
  }

  return tailArray;
}

const words = ["Greetings", "testing", "words"];
console.log(ail(words)); 
assertEqual(words.length, 3); 