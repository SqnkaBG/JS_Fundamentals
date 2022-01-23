function stringToNumbers(x) {
  return x === "zero"
    ? "0"
    : x === "one"
    ? "1"
    : x === "two"
    ? "2"
    : x === "three"
    ? "3"
    : x === "four"
    ? "4"
    : x === "five"
    ? "5"
    : x === "six"
    ? "6"
    : x === "seven"
    ? "7"
    : x === "eight"
    ? "8"
    : "9";
}
console.log(stringToNumbers("zero"));
function primeTrigger(x) {
  return x % 2 != 0 && x % 3 != 0;
}
console.log(primeTrigger(6));
function cone(r, h) {
  return `volume = ${((1 / 3) * h * Math.PI * r ** 2).toFixed(4)} \narea = ${(
    Math.PI *
    r *
    (r + Math.sqrt(r * r + h * h))
  ).toFixed(4)} `;
}
console.log(cone(3, 5));
function max(x, y, z) {
  return Math.max(x, y, z);
}
console.log(max(4, 5, 6));
function binaryToNormal(x) {
  return parseInt(x, 2);
}
console.log(binaryToNormal(`0101001010101`));

function chessGay(x) {
  let b = 0;
  console.log(`<div class="chessboard">`);
  for (let i = 1; i <= x; i++) {
    console.log(` <div>`);
    if (i % 2 != 0) {
      for (let j = 1; j <= x; j++) {
        if (j % 2 != 0) {
          console.log(`   <span class="black"></span>`);
        } else if (j % 2 == 0) {
          console.log(`   <span class="white"></span>`);
        }
      }
      console.log(` </div>`);
    } else if (i % 2 == 0) {
      for (let k = 1; k <= x; k++) {
        if (k % 2 != 0) {
          console.log(`   <span class="white"></span>`);
        } else if (k % 2 == 0) {
          console.log(`   <span class="black"></span>`);
        }
      }
      console.log(` </div>`);
    }
  }
  console.log(`</div>`);
}
chessGay(5);
function triangleArea(a, b, c) {
  return (
    (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2))
  );
}
console.log(triangleArea(2, 3.5, 4));
