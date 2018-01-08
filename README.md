# test-rg

## Installation
* Install [`node`](https://nodejs.org/en/) (tested on 6.9.1, 7.8.0 and 9.2.1)
* Install [`yarn`](https://yarnpkg.com/en/)
* Clone repository
* Go to main directory and run ``yarn``

## Commands
run automated tests
* ``yarn test``

encode file content and save it to ./test-results.txt;
* ``node encode-file < /my-test/test.txt``

test individual methods with your input

NOTE: parameters have to be passed in double quotes
* ``node execute encodeMorse "I AM IN TROUBLE"``
* ``node execute encodeAndObfuscateMorse "I AM IN TROUBLE"``
* ``node execute flattenArray "[1, 2, [3, 4, [5,6]]]"``


## Challenges:
### 1.
Write an algorithm to flatten an arbitrarily nested array of integers. e.g. [ 1, [ 2, [ 3 ] ], 4 ] -> [ 1, 2, 3, 4 ].

### 2.
Write a program that will accept text either from stdin, or as a file path and will translate the alphanumeric sentence
to Morse code. Then for bonus points, obfuscate the Morse code. Below is a list of international Morse code and the algorithm
for obfuscation. Separate letters with pipe (|), and separate words with forward slash (/).

#### International Morse Code
* A .-
* B -...
* C -.-.
* D -..
* E .
* F ..-.
* G --.
* H ....
* I ..
* J .---
* K -.-
* L .-..
* M --
* N -.
* O ---
* P .--.
* Q --.-
* R .-.
* S ...
* T -
* U ..-
* V ...-
* W .--
* X -..-
* Y -.--
* Z --..
* 0 -----
* 1 .----
* 2 ..---
* 3 ...--
* 4 ....-
* 5 .....
* 6 -....
* 7 --...
* 8 ---..
* 9 ----.
* Fullstop .-.-.-
* Comma --..--

#### Obfuscation
For obfuscation, your team decided to replace the number of consecutive dots with a number, and replace the number of consecutive dashes with the letter of the alphabet at that position. E.g. S = ... = 3, Q = --.- = b1a, F = ..-. = 2a1.

#### Example
* Sentence: I AM IN TROUBLE
* Morse Code: ../.-|--/..|-./-|.-.|---|..-|-...|.-..|.
* Obfuscated Morse Code: 2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1

#### Input
An example input text file:

```
HELLO
I AM IN TROUBLE
```

#### Output
A text file in the following format:

```
4|1|1A2|1A2|C
2/1A|B/2|A1/A|1A1|C|2A|A3|1A2|1
```
