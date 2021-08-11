const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe(`#assertArrayEqual`, () => {

  xit(`Returns true for [1,2,3] and [1,2,3]`,() => {
    const output = assertArraysEqual([1, 2, 3], [1, 2, 3]);
    assert.deepEqual(output, true);
  });

  xit(`Returns false for [1,2,3] and [3,2,1]`,() => {
    const output = assertArraysEqual([1, 2, 3], [3, 2, 1]);
    assert.deepEqual(output, false);
  });

});

// // TEST CODE
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // => false

// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // => true
// console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // => false

// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
// console.log(assertArraysEqual([1, 2, 3], [3, 2, 1])); // False