function carWash(x) {
  let y = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === `soap`) {
      y += 10;
    } else if (x[i] === `water`) {
      y += (y / 100) * 20;
    } else if (x[i] === `vacuum cleaner`) {
      y += (y / 100) * 25;
    } else {
      y -= (y / 100) * 10;
    }
  }
  return `The car is ${y.toFixed(2)}% clean.`;
}

console.log(
  carWash(["soap", "soap", "vacuum cleaner", "mud", "soap", "water"])
);
function number(x) {
  let a = x.toString().split(``).map(Number).reduce((a, b) => a + b, 9)
  return a / 5 <=  
}
console.log(number(1234));
function splitToDigit(n) {
  return (n + ``).split("").map((i) => {
    return Number(i);
  });
}

console.log(splitToDigit(100));
