const eqArrays = require('../eqArrays');
const assert = require('chai').assert;


describe('eqArrays()', () => {

  it('should return true from [[2, 3], [4]], [[2, 3], [4]] ', () => {

    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('should return false from [[2, 3], [4]], [[2, 3], [4, 5]]', () => {

    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  })

  it('should return false from [[2, 3], [4]], [[2, 3], 4])', () => {

    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  })
});


