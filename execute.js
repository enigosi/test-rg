const { encodeMorse, obfuscateMorse } = require('./src/2-morse/index');
const flattenArray = require('./src/1-flatten-array');

module.exports = {
  flattenArray: array => flattenArray(JSON.parse(array)),
  encodeMorse,
  obfuscateMorse,
  encodeAndObfuscateMorse: text => obfuscateMorse(encodeMorse(text)),
};
require('make-runnable');
