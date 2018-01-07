
const assert = require('assert');
const { morseEncoder } = require('./index');

describe('morse encoder', () => {
  it('should return empty string for empty string input', () => {
    assert.strictEqual(
      morseEncoder(''),
      '',
    );
  });

  it('should return null for null input', () => {
    assert.strictEqual(
      morseEncoder(null),
      null,
    );
  });

  it('should return null for non-string input', () => {
    assert.strictEqual(
      morseEncoder({}),
      null,
    );
  });

  it('should correctly parse basic example', () => {
    assert.deepEqual(
      morseEncoder('I AM IN TROUBLE'),
      '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.',
    );
  });

  it('should remove not alphanumeric characters', () => {
    assert.deepEqual(
      morseEncoder('?////\\:"#@$I AM IN T**&&&ROUBLE'),
      '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.',
    );
  });
});
