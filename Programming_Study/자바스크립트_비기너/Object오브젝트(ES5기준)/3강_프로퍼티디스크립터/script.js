var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS북',
  enumerable: true
});
for(var name in obj) {
  console.log(name);
  console.log(obj[name]);
};
// book
// JS북

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS북'
  // get: function() {}
  // Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
});
// value 속성은 get/set 속성과 같이 작성 불가

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS책',
  // 변경 가능
  writable: true
});
obj.book = '변경 가능';
console.log(obj.book);
// 변경 가능

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS책',
  // 변경 불가
  writable: false
});
obj.book = '변경 불가';
console.log(obj.book);
// JS책
// 에러는 발생하지 않지만 값이 변경되지 않음

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS북',
  // 열거 가능
  enumerable: true
});
for (var name in obj) {
  console.log(name + ':' + obj[name]);
};
// book: JS북

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS북',
  // 열거 불가
  enumerable: false
});
for (var name in obj) {
  console.log(name + ':' + obj[name]);
};
// 

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS북',
  // 삭제 가능
  configurable: true
});
delete obj.book;
console.log(obj.book);
// undefined

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS북',
  // 삭제 불가
  configurable: false
});
delete obj.book;
console.log(obj.book);
// JS북