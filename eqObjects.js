
const eqArrays = require('./eqArrays');

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

    } else if (typeof(object1[key]) === "object") {
      if (typeof(object2[key]) === "object") {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      } else {
        return false;
      }
    } else {
      if (!(object2[key] && (object2[key] === object1[key]))) {
        return false;
      }
    }
    
  }
  
  return true;

};

module.exports = eqObjects;
