function spyFromTF2(array) {
  let words = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i].includes(`Change`)) {
      words = words.replaceAll(
        array[i][array[i].length - 3],
        array[i][array[i].length - 1]
      );
    }
  }
  return words;
}
console.log(
  spyFromTF2(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"])
);
