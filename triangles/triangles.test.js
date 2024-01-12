"use strict";

it('should validate edge lengths', function () {
  expect(validateEdges(2, 4)).toEqual([true, true]);
  expect(validateEdges(22, 444)).toEqual([true, false]);

});

it('should calculate areas', function () {
  expect(calcArea(2, 4)).toEqual(4);
});

it('should calculate hypotenuses', function () {
  expect(calcHypot(3, 4)).toEqual(5);
});

it('should craft correct message', function () {

  expect(makeMessage(4, 10)).toEqual("Hypotenuse is 10 and area is 4.");
  expect(makeMessage(150, 10)).toEqual(
    "Hypotenuse is 10 and area is 150. That's a really big triangle!"
  );
});


