function Book(point) {
  this.point = point;
};
Book.prototype.getPoint = function(){};
Book.prototype.setPoint = function(){};
var obj = new Book(100);

var result = Object.getPrototypeOf(obj);
for (var key in result) {
  console.log(key + ':' + result[key]);
};
// getPoint:function(){}
// setPoint:function(){}
// get과 set은 세트

var obj = {};
Object.defineProperties(obj, {
  book: {value: '책'},
  point: {value: 123}
});
var names = Object.getOwnPropertyNames(obj);
for (var k = 0; k < names.length; k++) {
  console.log(names[k]);
};
// book
// point
// 열거 가능 여부를 체크하지 않기에 enumerable를 true로 설정하지 않아도 열거 가능

var obj = {};
Object.defineProperties(obj, {
  book: {
    value: '책', enumerable: true
  },
  point: {value: 123}
});
var names = Object.keys(obj);
for (var k = 0; k < names.length; k++) {
  console.log(names[k]);
};
// book
// point는 enumerable을 true로 설정하지 않았기에 열거 불가