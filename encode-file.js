const fs = require('fs');
const { encodeMorse, obfuscateMorse } = require('./src/2-morse/');
const readline = require('readline');

const writeStream = fs.createWriteStream('test-result.txt');

const rl = readline.createInterface({
  input: fs.createReadStream('/dev/stdin'),
});

rl.on('line', (line) => {
  const obfuscatedLine = obfuscateMorse(encodeMorse(line));
  writeStream.write(obfuscatedLine);
  writeStream.write('\n');
});
