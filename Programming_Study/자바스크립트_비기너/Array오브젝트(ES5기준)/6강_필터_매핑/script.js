var value = [10, 20 , 30 , 40];
var fn = function(el, index, all) {
  return el > 15;
};
var result = value.filter(fn);
console.log(result);
// [20, 30, 40]
// true가 하나도 없으면 빈 배열이 할당됨

var value = [10, 20 , 30];
var fn = function(el, index, all) {
  return el + this.add;
};

var point = {add: 100};
var result = value.map(fn, point);
console.log(result);
// [110, 120, 130]