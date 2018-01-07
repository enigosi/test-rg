
const assert = require('assert');
const obfuscateMorse = require('./obfuscate');

describe('obfuscateMorse', () => {
  it('should return empty string for empty string input', () => {
    assert.strictEqual(
      obfuscateMorse(''),
      '',
    );
  });

  it('should return null for null input', () => {
    assert.strictEqual(
      obfuscateMorse(null),
      null,
    );
  });

  it('should return null for non-string input', () => {
    assert.strictEqual(
      obfuscateMorse({}),
      null,
    );
  });

  it('should correctly parse morse letters', () => {
    assert.strictEqual(
      obfuscateMorse('...-'),
      '3A',
    );
    assert.strictEqual(
      obfuscateMorse('--.-'),
      'B1A',
    );
  });

  it('should correctly parse basic example', () => {
    assert.strictEqual(
      obfuscateMorse('../.-|--/..|-./-|.-.|---|..-|-...|.-..|.'),
      '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1',
    );
  });
});
