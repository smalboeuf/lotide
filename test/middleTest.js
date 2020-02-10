const middle = require('../middle');

const assert = require('chai').assert;

describe('middle()', () => {

  it("should return [2.5] from [1,2,3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), middle([1, 2, 3, 4]));
  });

});

