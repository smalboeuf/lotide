
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

module.exports = eqArrays;