function getTotal(one, two) {
  return one + two;
};
var result = getTotal.call(this, 10, 20);
console.log(result);
// 30

var value = {one: 10, two: 20};
function getTotal() {
  return this.one + this.two;
};
var result = getTotal.call(value);
console.log(result);
//  30

function getTotal(one, two) {
  return one + two;
};
var result = getTotal.apply(this, [10, 20]);
console.log(result);
// 30

var getBook = function() {
  return 100 + 23;
};
var result = getBook.toString();
console.log(result);
// function() {
//   return 100 + 23;
// }