function inverted(num) {
  console.log(num[0] + num[num.length - 1]);
}
inverted([10, 2, 30]);
function daysOfWeek(day) {
  return day === 1
    ? `Monday`
    : day === 2
    ? `Tuesday`
    : day === 3
    ? `Wednesday`
    : day === 4
    ? `Thursday`
    : day === 5
    ? `Friday`
    : day === 6
    ? `Saturday`
    : day === 7
    ? `Sunday`
    : `Invalid day!`;
}
console.log(daysOfWeek(2));
function reverse(n, array) {
  let valio = ``;
  for (let i = n - 1; i >= 0; i--) {
    valio += array[i] + ` `;
  }
  return valio;
}
console.log(reverse(2, [2, 3, 4]));
function reverseTwoPointZero(array) {
  return array.reverse().join(` `);
}
console.log(reverseTwoPointZero([`a`, `b`, `c`, `d`]));
function evenSum(x) {
  let s = 0;
  x.map((el) => (Number(el) % 2 === 0 ? (s += Number(el)) : (sum += 0)));
  return s;
}
console.log(evenSum([`2`, `4`, `6`, `8`, `10`]));
function equalArrays(x, y) {
  return x.join(``).includes(y.join(``))
    ? `Arrays are identical. Sum: ${x
        .map(Number)
        .reduce((el1, el2) => el1 + el2)}`
    : `Arrays are not identical. Found diference at ${Math.abs(
        x
          .map(Number)
          .map((el) => (y.map(Number).includes(el) ? el : "x"))
          .indexOf("x")
      )} index`;
}
console.log(equalArrays(["10", "20", "30"], ["10", "20", "30"]));
function condenseAToN(x) {
  let y = 0;
  let a = [];
  for (let i = 0; i < x.length - 1; i++) {
    y += x[i] + x[i + 1];
    a.join(x[i]);
    if (a.length > 0) {
      for (let j = 0; j < a.length - 1; j++) {
        y += a[j] + a[j + 1];
      }
    } else {
      y += 0;
    }
    console.log(a);
  }
}
condenseAToN([5, 0, 4, 1, 2]);
