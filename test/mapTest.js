const map = require('../map');
const assert = require('chai').assert;

describe(`#map`, () => {

  const words = ["ground", "control", "to", "major", "tom"];
  it(`Returns an array as modified by the given condition`,() => {
    const output = map(words, word => word[0]);
    assert.deepEqual(output, ['g','c','t','m','t']);
  });

  it(`Returns an array as modified by the given condition`,() => {
    const output = map(words, word => word[word.length - 1]);
    assert.deepEqual(output, ['d','l','o','r','m']);
  });

  it(`Returns an array as modified by the given condition`,() => {
    const output = map(words, word => word + 'MAPPED');
    assert.deepEqual(output, ["groundMAPPED", "controlMAPPED", "toMAPPED", "majorMAPPED", "tomMAPPED"]);
  });

});
