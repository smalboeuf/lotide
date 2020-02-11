const eqObjects = require('../eqObjects');
const assert = require('chai').assert;


describe('eqObjects()', () => {

  it('should return true from the 2 passed objects ', () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.equal(eqObjects(cd, dc), true);
  });

  it('should return false from the 2 passed objects ', () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.equal(eqObjects(cd, cd2), false);
  });
});


