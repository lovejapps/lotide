const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe(`#countLetters`, () => {

  const words = ["ground", "control", "to", "major", "tom"];
  it(`Returns an array as modified by the given condition`,() => {
    const output = countLetters('Lovemore Lovej Jokonya');
    assert.deepEqual(output['o'], 5);
  });

  it(`Returns an array as modified by the given condition`,() => {
    const output = countLetters('Mary Joseline');
    assert.deepEqual(output['l'], 1);
  });

  it(`Returns an array as modified by the given condition`,() => {
    const output = countLetters('Makanaka Anenyasha');
    assert.deepEqual(output['l'], undefined);
  });

});
