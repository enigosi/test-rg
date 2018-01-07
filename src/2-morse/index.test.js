
const assert = require('assert');
const { encodeMorse, obfuscateMorse } = require('./index');

describe('morse encoder', () => {
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

    it('should correctly parse singe word', () => {
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

    it('should remove not alphanumeric characters', () => {
      assert.strictEqual(
        encodeMorse('?////\\:"#@$I AM IN T**&&&ROUBLE'),
        '../.-|--/..|-./-|.-.|---|..-|-...|.-..|.',
      );
    });
  });

  describe('obfuscateMorseCode', () => {
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
        obfuscateMorse('...'),
        '3',
      );
      assert.strictEqual(
        obfuscateMorse('--.-'),
        'b1a',
      );
    });

    it('should correctly parse basic example', () => {
      assert.strictEqual(
        obfuscateMorse('../.-|--/..|-./-|.-.|---|..-|-...|.-..|.'),
        '2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1',
      );
    });

    it('should return null when morse code is not valid', () => {
      assert.strictEqual(
        obfuscateMorse('...........'),
        null,
      );
    });
  });
});
