const tail = require('../tail');

const assert = require('chai').assert;



describe('tail()', () => {
  it("should return [testing, words] from [Greetings, testing, words]", () => {
    const words = ["Greetings", "testing", "words"];
    assert.deepEqual(tail(words),["testing", "words"]);
  });
});


