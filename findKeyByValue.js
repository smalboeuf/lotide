const findKeyByValue = function(givenObject, value) {

  for (let key in givenObject) {
    if (givenObject[key] === value) {
      return key;
    }
  }

}

module.exports = findKeyByValue;

