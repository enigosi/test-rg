
const assert = require('assert');
const encodeMorse = require('./morse');

describe('encodeMorse', () => {
  it('should return empty string for empty string input', () => {
    assert.strictEqual(
      encodeMorse(''),
      '',
    );
  });

  it('should return null for null input', () => {
    assert.strictEqual(
      encodeMorse(null),
      null,
    );
  });

  it('should return null for non-string input', () => {
    assert.strictEqual(
      encodeMorse({}),
      null,
    );
  });

  it('should correctly parse single word', () => {
    assert.strictEqual(
      encodeMorse('TROUBLE'),
      '-|.-.|---|..-|-...|.-..|.',
    );
  });

  it('should correctly parse basic example', () => {
    assert.strictEqual(
      encodeMorse('I AM IN TROUBLE'),
      '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.',
    );
  });

  it('should be case insensitive', () => {
    assert.strictEqual(
      encodeMorse('i am in trouble'),
      '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.',
    );
  });

  it('should remove not alphanumeric characters', () => {
    assert.strictEqual(
      encodeMorse('?////\\:"#@$I AM IN T**&&&ROUBLE'),
      '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.',
    );
  });
});
