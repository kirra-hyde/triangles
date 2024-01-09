function calculateWordScores(words) {
  let wordScores = [];
  for (let word of words) {
    let score = 0;
    for (let char of word) {
      if (!(char.toUpperCase() in LETTER_SCORES)) {
        score = null;
        break;
      }
      score += LETTER_SCORES[char.toUpperCase()];
    }
    wordScores.push(score);
  }
  return wordScores;
}

const LETTER_SCORES = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};
