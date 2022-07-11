var obj = {};
Object.defineProperty(obj, 'book', {
  get: function() {
    return 'JS책';
  }
});
var result = obj.book;
console.log(result);
// JS책
// value 속성이 없으면 get 함수 호출

var obj = {}, data = {};
Object.defineProperty(obj, 'book', {
  set: function(param) {
    data.title = param;
    // set 함수에서 param를 받아서 data.title에 적용
  },
  get: function() {
    // get 함수에서 data.title을 반환함으로써 JS책이 반환되도록 함
    return data.title;
  }
});
obj.book = 'JS책';
console.log(obj.book);
// JS책
// value 속성이 없으면 set 함수 호출