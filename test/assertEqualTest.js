const assertEqual = require('../assertEqual.js');
const assert = require('chai').assert;

describe(`#assertEqual`, () => {

  xit(`Returns false for "Lighthouse Labs" and "Bootcamp"`,() => {
    const output = assertEqual("Lighthouse Labs", "Bootcamp");
    assert.deepEqual(output, false);
  });

  xit(`Returns true for 1 and 1`,() => {
    const output = assertEqual(1,1);
    assert.deepEqual(output, true);
  });

});
// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
