function mostPopular(s) {
  let ltr_obj = {};
  let common = [];
  let high = 0;
  for (let letter of s) {
    const count = (ltr_obj[letter] || 0) + 1;
    ltr_obj[letter] = count;
    if (count > high) {
      common = [letter];
      high = count;
    } else if (count == high) {
      common.push(letter);
    }
  }

  return common;
}
