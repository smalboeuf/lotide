const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;


describe('findKeyByValue()', () => {

  it('should return drama from bestTVSHow object', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");

  });

  it('should return undefined from bestTVShow object', () => {
    const bestTVShowsByGenre = { 
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama:  "The Wire"
    };

    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

});


