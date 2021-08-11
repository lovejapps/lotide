const findKey = require('../findKey');
const assert = require('chai').assert;

describe(`#findKey`, () => {

  const words = ["ground", "control", "to", "major", "tom"];
  it(`Returns the key whose value in the object meets the condition given in the callback`,() => {
    let output = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);
    assert.deepEqual(output, "noma");
  });

  it(`Returns the key whose value in the object meets the condition given in the callback`,() => {
    let output = findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 3);
    assert.deepEqual(output, "Akaleri");
  });

  it(`Returns the key whose value in the object meets the condition given in the callback`,() => {
    let output = findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 0);
    assert.deepEqual(output, undefined);
  });

});
