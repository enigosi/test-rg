const LETTER_DELIMITER = '|';
const WORD_DELIMITER = '/';
const MORSE_CODE = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..',
  0: '-----',
  1: '.----',
  2: '..---',
  3: '...--',
  4: '....-',
  5: '.....',
  6: '-....',
  7: '--...',
  8: '---..',
  9: '----.',
  '.': '.-.-.-',
  ',': '--..--',
};
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');


module.exports.encodeMorse = function encodeMorse(textInput) {
  if (typeof textInput !== 'string') return null;

  const words = textInput.split(' ');
  return words.map(parseWord).join(WORD_DELIMITER);
};

function parseWord(word) {
  const letters = word.split('');

  return letters
    .map(letter => MORSE_CODE[letter])
    // filter non alphanumeric characters
    .filter(letter => !!letter)
    // / join back into word
    .join(LETTER_DELIMITER);
}


module.exports.obfuscateMorse = function obfuscateMorse(morseCodeInput) {
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
