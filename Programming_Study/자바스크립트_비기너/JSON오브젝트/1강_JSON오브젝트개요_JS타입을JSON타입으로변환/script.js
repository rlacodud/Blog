var value = {
  book: '책',
  title: 123
};
var result = JSON.stringify(value);
console.log(result);
// {"book":"책","title":123}
// 큰 따옴표 안에 작성됨

var value = ['book', '책', 123];
var result = JSON.stringify(value);
console.log(result);
// ["book","책",123]

console.log(JSON.stringify([Infinity, NaN, null]));
console.log(JSON.stringify([true, false]));
// [null,null,null]
// [true,false]

console.log(JSON.stringify(undefined));
console.log(JSON.stringify([undefined]));
console.log(JSON.stringify({value: undefined}));
// undefined
// [null]
// {}
// undefined는 작성한 곳에 따라 다르게 변환
// 배열 안에 있으면 null로 변환
// 프로퍼티값이면 프로퍼티 이름도 없어짐

var data = {book: '책', point: 55};
function replace(key, value) {
  // point값 55를 11로 변경
  return key === 'point' ? 11 : value;
};
var result = JSON.stringify(data, replace);
console.log(result);
// {"book":"책","point":11}

var data = {book: '책', point: 11, amount: 90};
var result = JSON.stringify(data,
  ['book', 'amount']);
console.log(result);
// {"book":"책","amount":90}
// 이름이 같은 것만 반환됨

var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data, "", '\n');
console.log(result);
// {

//   "sports": "soccer",
  
//   "time": 90
//   }

var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data, "", 4);
console.log(result);
// {
//   "sports": "soccer",
//   "time": 90
// }
// 세번째 파라미터에 숫자 기입 시 해당 숫자만큼 들여쓰기 삽입

var data = {sports: 'soccer', time: 90};
var result = JSON.stringify(data, '', '##');
console.log(result);
// {
//   ##"sports": "soccer",
//   ##"time": 90
//   }
// 문자열을 작성하면 데이터 앞에 해당 문자 삽입