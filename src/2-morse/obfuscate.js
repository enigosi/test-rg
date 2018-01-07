const { WORD_DELIMITER, LETTER_DELIMITER, ALPHABET } = require('./consts');

module.exports = function obfuscateMorse(morseCodeInput) {
  if (typeof morseCodeInput !== 'string') return null;

  const morseCodeInputArray = morseCodeInput.split('');
  const resultArray = obfuscateRecursive(morseCodeInputArray, [], null, 0);
  return resultArray.join('');
};

function getObfuscatedChar(morseChar, count) {
  // return delimiter
  if (morseChar === LETTER_DELIMITER || morseChar === WORD_DELIMITER) return morseChar;
  // return number
  if (morseChar === '.') return count;
  // return letter
  return ALPHABET[count - 1];
}

function obfuscateRecursive(morseCharsLeft, resultChars, lastMorseChar, counter) {
  // if there is no more characters left return result
  if (!morseCharsLeft.length) {
    return [
      ...resultChars,
      getObfuscatedChar(lastMorseChar, counter),
    ];
  }

  const [morseChar, ...morseCharsLeftClone] = morseCharsLeft;

  // if lastMorseChar & character are '.'s or '-'s
  if (lastMorseChar === morseChar && (lastMorseChar === '.' || lastMorseChar === '-')) {
    return obfuscateRecursive(morseCharsLeftClone, resultChars, morseChar, counter + 1);
  }

  // run next iteration
  const updatedResults = [...resultChars, getObfuscatedChar(lastMorseChar, counter)];
  return obfuscateRecursive(morseCharsLeftClone, updatedResults, morseChar, 1);
}
