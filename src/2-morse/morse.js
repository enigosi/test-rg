const { WORD_DELIMITER, LETTER_DELIMITER, MORSE_CODE } = require('./consts');

module.exports = function encodeMorse(textInput) {
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
