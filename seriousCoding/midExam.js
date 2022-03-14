function burgerBus(input) {
  let n = 0;
  let name = ``;
  let money1 = 0;
  let money2 = 0;
  let total = 0;
  let totalC = 0;
  for (let i = 1; i < input.length; i += 3) {
    n++;
    totalC += Number(input[i + 2]);

    if (n != 3 && n != 5) {
      name += input[i];
      money1 += Number(input[i + 1]);
      money2 += Number(input[i + 2]);

      total += money1 - money2;
      console.log(
        `In ${name} Burger Bus earned ${(money1 - money2).toFixed(2)} leva.`
      );
      money1 -= Number(input[i + 1]);
      money2 -= Number(input[i + 2]);
      name = ``;
    } else if (n === 3) {
      name += input[i];
      money1 += Number(input[i + 1]);
      money2 += Number(input[i + 2]);

      total += money1 - (totalC / 100) * 50;
      console.log(
        `In ${name} Burger Bus earned ${money1 - (totalC / 100) * 50} leva.`
      );
      money1 -= Number(input[i + 1]);
      money2 -= Number(input[i + 2]);
      name = ``;
    } else if (n % 5 === 0) {
      name += input[i];
      money1 += Number(input[i + 1]);
      money2 += Number(input[i + 2]);

      total += money1 - money2 - ((money1 - money2) / 100) * 10;
      console.log(
        `In ${name} Burger Bus earned ${
          money1 - money2 - ((money1 - money2) / 100) * 10
        } leva.`
      );
      money1 -= Number(input[i + 1]);
      money2 -= Number(input[i + 2]);
      name = ``;
    }
  }
  console.log(`Burger Bus total profit: ${total} leva.`);
}
burgerBus([
  "3",
  "Sofia",
  "895.67",
  "213.50",
  "Plovdiv",
  "2563.20",
  "890.26",
  "Burgas",
  "2360.55",
  "600.00",
]);
burgerBus([
  "5",
  "Lille",
  "2226.00",
  "1200.60",
  "Rennes",
  "6320.60",
  "5460.20",
  "Reims",
  "600.20",
  "452.32",
  "Bordeaux",
  "6925.30",
  "2650.40",
  "Montpellier",
  "680.50",
  "290.20",
]);
function numbers(x) {
for (let i=1; i<x.length; i++) {
    
}
}
numbers(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"])