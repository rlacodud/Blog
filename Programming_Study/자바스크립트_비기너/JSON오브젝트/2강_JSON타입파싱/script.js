var value = '123';
try {
  var result = JSON.parse(value);
} catch(e) {
  console.log('JSON 파싱 에러');
};
console.log(result);
console.log(typeof result);
// 123
// number

var value = 'true';
var result = JSON.parse(value);
console.log(result);
console.log(typeof result);
// true
// boolean

var value = '["ABC", "가나", "12"]';
var result = JSON.parse(value);
console.log(result);
// ['ABC', '가나', '12']
// 배열에 작성된 String 타입의 숫자는 숫자로 변환X

var value = '{"point": "123"}';
var result = JSON.parse(value);
console.log(result);
// {point: '123'}
// JS는 프로퍼티 이름에 큰따옴표를 사용하지 않으므로 큰따옴표가 표시되지 않음

var data = '{"book": "책", "movie": "영화"}'
var check = function(key, value) {
  return key === "book" ? "JS책" : value;
  // value는 원래 key가 갖고 있던 value
};
var result = JSON.parse(data, check);
console.log(result);
// {book: 'JS책', movie: '영화'}