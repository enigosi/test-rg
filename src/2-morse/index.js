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


function parseWord(word) {
  const letters = word.split('');

  return letters
    .map(letter => MORSE_CODE[letter])
    // filter non alphanumeric characters
    .filter(letter => !!letter)
    // / join back into word
    .join(LETTER_DELIMITER);
}

module.exports.morseEncoder = function morseEncoder(textInput) {
  if (typeof textInput !== 'string') return null;

  const words = textInput.split(' ');
  return words.map(parseWord).join(WORD_DELIMITER);
};
