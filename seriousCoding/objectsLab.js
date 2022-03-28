function info(n, s, a) {
  let person = {};
  person.firstName = n;
  person.lastName = s;
  person.age = a;
  return person;
}
console.log(info("Peter", "Pan", "20"));
function ciTy(city) {
  let props = Object.keys(city);
  for (let prop of props) {
    console.log(`${prop} -> ${city[prop]}`);
  }
}

ciTy({
  name: "Sofia",
  area: 492,
  population: 1238438,
  country: "Bulgaria",
  postCode: "1000",
});
function convertObject(x) {
  let person = JSON.parse(x);

  for (let key of Object.keys(x)) {
    console.log(`${key}: ${person[key]}`);
  }
}
console.log(convertObject('{"name": "George", "age": 40, "town": "Sofia"}'));
