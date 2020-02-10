//Loops through given array and pushes value to a new array excluding the first number
const tail = function(givenArray) {
  let tailArray = [];
  for (let i = 1; i < givenArray.length; i++) {
    tailArray.push(givenArray[i]);
  }

  return tailArray;
}



module.exports = tail;