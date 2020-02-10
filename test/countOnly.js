const assert = require('chai').assert;
const countOnly = require('../countOnly');


describe('flatten()', () => {

  it("should return 1 from when searching for Jason ", () => {

    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
    
    assert.strictEqual(result1["Jason"], 1);
  });

});