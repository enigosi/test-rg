
const assert = require('assert');
const flattenArray = require('./index');

describe('flattenArray', () => {
  it('should return an empty array for an empty array input', () => {
    assert.deepEqual(
      flattenArray([]),
      [],
    );
  });

  it('should return same array for a flat array input', () => {
    assert.deepEqual(
      flattenArray([1, 2, 3]),
      [1, 2, 3],
    );
  });

  it('should return flattened array for a two dimensional array input', () => {
    assert.deepEqual(
      flattenArray([1, [2, 3], [4, 5]]),
      [1, 2, 3, 4, 5],
    );
  });

  it('should return flattened array for a deeply nested array input', () => {
    assert.deepEqual(
      flattenArray([1, [2, [3, 4, [5, 6]]], [[7, 8, 9], [10]]]),
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    );
  });


  it('should return empty array for array filled with nested arrays', () => {
    assert.deepEqual(
      flattenArray([[], [[[[]]]]]),
      [],
    );
  });

  it('should return null for null input', () => {
    assert.deepEqual(
      flattenArray(null),
      null,
    );
  });

  it('should handle nested null values in an input', () => {
    assert.deepEqual(
      flattenArray([1, [[null]]]),
      [1, null],
    );
  });
});
