function beggining(x) {
  return Number(x[0]) + Number(x[x.length - 1]);
}
console.log(beggining([`10`, `20`, `30`]));
function negative(x) {
  let y = [];
  x.map(Number).map((el) => (el < 0 ? y.unshift(el) : y.push(el)));
  return y.join(`\n`);
}
console.log(negative(["7", "-2", "8", "9"]));
function firstLast(x) {
  let y = x.slice(1, x[0] + 1);
  let z = x.slice(x.length - x[0], x.length);
  return `${y.join(` `)}\n${z.join(` `)}`;
}
console.log(firstLast([3, 7, 8, 9, 10, 15, 20]));
function smallestX(x) {
  let y = x.sort((a, b) => a - b).slice(0, 2);
  return y.join(` `);
}
console.log(smallestX([3, 0, 10, 4, 7, 3]));
function last(n, k) {
  let x = [1];
  for (let i = 1; i < n; i++) {
    let start = x.slice(-k);
    let sum = 0;
    for (let element of start) {
      sum += element;
    }
    x.push(sum);
  }
  return x.join(` `);
}
console.log(last(6, 3));
function list(input) {
  let s = input.sorted(x);
  for (let i = 0; i < s.length; i++) {
    return `${i + 1}.${s[i]}`;
  }
}
console.log(list(["Potatoes", "Tomatoes", "Onions", "Apples"]));
