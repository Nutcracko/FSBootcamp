const data = require("./httpserver/data.json");

//mapping
var names = data.map((n) => n.name);
console.log(names);

const joined = names.join(" ");
console.log(joined);

//filter method
var user = data.filter((x) => x.id == 1);
console.log(user);

//reduce method
const array = [1, 2, 3, 4, 5];
var reduced = array.reduce((accumulator, currentval) => {
  return accumulator + currentval;
}, 0);
console.log(reduced);
