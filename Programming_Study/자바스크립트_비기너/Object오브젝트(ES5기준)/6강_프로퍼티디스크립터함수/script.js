var obj = {};
Object.defineProperty(obj, 'book', {
  value: '책',
  writable: true, enumerable: true
});
var desc =
Object.getOwnPropertyDescriptor (obj, 'book');
for (var key in desc) {
  console.log(key + ':' + desc[key]);
};
// value:책
// writable:true
// enumerable:true
// configurable:false
// 프로퍼티 디스크립터의 속성 이름, 값 반환

var obj = {};
Object.preventExtensions(obj);
// obj에 프로퍼티 추가 금지
// 데이터 보호 관점으로 접근 용이
try {
  Object.defineProperty(obj, 'book', {
    value: '책'
  });
  // 프로퍼티를 추가하려 하였으나 불가하여
  // catch문이 실행되고 콘솔 출력
} catch (e) {
  console.log('추가 불가');
};
// 추가 불가

var obj = {};
Object.defineProperty(obj, 'book', {
  value: '책',
});
console.log(Object.isExtensible(obj));

Object.preventExtensions(obj);
console.log(Object.isExtensible(obj));
// true
// false

var obj = {};
Object.defineProperty (obj, 'book', {
  value: '책', writable: true
});

Object.seal(obj);
try {
  Object.defineProperty (obj, 'sports', {
    value: '스포츠'
  });
} catch(e) {
  console.log('추가 불가');
};
// 추가 불가

var obj = {};
Object.defineProperty (obj, 'book', {
  value: '책', writable: true
});
console.log(Object.isSealed(obj));

Object.seal(obj);
console.log(Object.isSealed(obj));
// false
// true

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS책', writable: true
});

Object.freeze(obj);
try {
  Object.defineProperty (obj, 'book', {
    value: '포인트'
  });
} catch(e) {
  console.log('변경 불가');
};
console.log(obj.book);
// 변경 불가
// JS 책

var obj = {};
Object.defineProperty(obj, 'book', {
  value: 'JS책',
  writable: true
});
console.log(Object.isFrozen(obj));

Object.freeze(obj);
console.log(Object.isFrozen(obj));
// false
// true