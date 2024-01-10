"use strict";

function mostPopular(word) {
  const freqs = getFreqs(word);
  let mostCommonLetters = [];
  let highCount = 0;

  for (let letter in freqs) {

    if (freqs[letter] > highCount) {
      mostCommonLetters = [letter];
      highCount = freqs[letter];
    } else if (highCount === freqs[letter]) {
      mostCommonLetters.push(letter);
    }
  }

  return mostCommonLetters;
}

function getFreqs(word) {
  const freqs = {}

  for (let char of word) {
    freqs[char] = (freqs[char] || 0) + 1
  }

  return freqs;
}
