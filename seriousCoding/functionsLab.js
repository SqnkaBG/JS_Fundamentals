function grade(x) {
  if (x < 3) {
    console.log(`Fail (2)`);
  } else if (x < 3.5) {
    console.log(`Poor (${x.toFixed(2)})`);
  } else if (x < 4.5) {
    console.log(`Good (${x.toFixed(2)})`);
  } else if (x < 5.5) {
    console.log(`Very good (${x.toFixed(2)})`);
  } else {
    console.log(`Excellent`);
  }
}
grade(6);
function math(x, y) {
  return x ** y;
}
console.log(math(2, 8));
function nString(x, y) {
  return x.repeat(y);
}
console.log(nString(`String`, 5));
function calc(x, y, z) {
  return z === `multiply`
    ? x * y
    : z === `divide`
    ? x / y
    : z === `add`
    ? x + y
    : x - y;
}
console.log(calc(5, 10, `add`));
function order(x, y) {
  return x === `cofee`
    ? `${(y * 1.5).toFixed(2)}`
    : x === `coke`
    ? `${(y * 1.4).toFixed(2)}`
    : x === `water`
    ? `${(y * 1).toFixed(2)}`
    : `${(y * 2).toFixed(2)}`;
}
console.log(order(`snaks`, 5));
function sign(x, y, z) {
  return x < 0 && y > 0 && z < 0
    ? `Positive`
    : x > 0 && y < 0 && z > 0
    ? `Negative`
    : x < 0 && y < 0 && z > 0
    ? `Positive`
    : x > 0 && y > 0 && z > 0
    ? `Positive`
    : x < 0 && y > 0 && z > 0
    ? `Negative`
    : x > 0 && y < 0 && z < 0
    ? `Positive`
    : x < 0 && y < 0 && z < 0
    ? `Negative`
    : x > 0 && y > 0 && z < 0
    ? `Negative`
    : `OK`;
}
console.log(sign(-1, 2, 3));
