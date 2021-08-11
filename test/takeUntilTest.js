const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

describe(`#takeUntil`, () => {

  it(`Returns an array up to the index a condition is met`,() => {
    const data = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const output = takeUntil(data, x => x < 0);
    assert.deepEqual(output, [1,2,5,7,2]);
  });

  it(`Returns an array up to the index a condition is met`,() => {
    const data = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const output = takeUntil(data, x => x === ',');
    assert.deepEqual(output, ["I've", "been", "to", "Hollywood"]);
  });

  it(`Returns an array up to the index a condition is met`,() => {
    const data = [true, true, true, 'chicken', 34, 45, 'normandy', false, 'cow', 'jaijaijai'];
    const output = takeUntil(data, x => x === false);
    assert.deepEqual(output, [true, true, true, 'chicken', 34, 45, 'normandy']);
  });

});
