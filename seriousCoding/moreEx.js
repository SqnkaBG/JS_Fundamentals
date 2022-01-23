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
stringToNumbers("zero");
fun