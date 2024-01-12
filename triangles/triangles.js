"use strict";

/** Are sizes valid integers 2-50?
 *
 * Take 2 numbers
 * Return array of 2 booleans.  Ex. [true, false]
 */

function validateEdges(a, b) {

  return [
    (Number.isInteger(a) && a >= 2 && a <= 50),
    (Number.isInteger(b) && b >= 2 && b <= 50),
  ];
}


/** Get form data
 *
 * Return object of triangle edge sizes.  Ex. {a: 20, b: 34}
 */

function getInput() {
  const edgeA = +document.getElementById("side-a").value;
  const edgeB = +document.getElementById("side-b").value;

  return { edgeA, edgeB };
}


/** Calculate the area of a triangle from its two edges
 *
 * Take 2 numbers
 * Return 1 number
 */

function calcArea(edgeA, edgeB) {
  return (edgeA * edgeB / 2);
}


/** Calculate the hypotenuse of a triangle from its two edges
 *
 * Take 2 numbers
 * Return 1 number
 */

function calcHypot(edgeA, edgeB) {
  return (Math.round(Math.sqrt(edgeA * edgeA + edgeB * edgeB)));
}


/** Given input numbers above 0, make a message about triangle facts.
 *
 * Take 2 numbers
 * Return a string.  If either input is 0, string will be empty.
 */

function makeMessage(area, hypot) {
  let msg = "";

  if (area && hypot) {
    msg = `Hypotenuse is ${hypot} and area is ${area}.`;

    if (area > 100) {
      msg += ` That's a really big triangle!`;
    }
  }

  return msg;
}


/** If input is valid, updates DOM with message about triangle.  Otherwise,
 * update DOM with message of invalid input.
 *
 * Take 2 booleans and 1 string
 */

function updateDom(aOk, bOk, msg) {

  document.getElementById("a-msg").innerHTML = aOk ? "" : "Invalid";
  document.getElementById("b-msg").innerHTML = bOk ? "" : "Invalid";
  document.getElementById("msg").innerHTML = msg;

}


/* Handle form submission */

function processForm(evt) {
  evt.preventDefault();

  const { edgeA, edgeB } = getInput();

  const [aOk, bOk] = validateEdges(edgeA, edgeB);

  let area = 0;
  let hypot = 0;

  if (aOk && bOk) {
    area = calcArea(edgeA, edgeB);
    hypot = calcHypot(edgeA, edgeB);
  }

  const msg = makeMessage(area, hypot);

  updateDom(aOk, bOk, msg);
}