const tail = require('../tail');

const assert = require('chai').assert;
const { expect } = require('chai');


describe('tail()', () => {
  it("should return [testing, words] from [Greetings, testing, words]", () => {
    const words = ["Greetings", "testing", "words"];
    expect(tail(words)).to.eql(["testing", "words"]);
  });
});


