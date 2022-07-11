var value = '01234567';
console.log(value.substring(2, 5));
// 234

var value = '01234567';
console.log(value.substring(5));
console.log(value.substring());
// 567
// 01234567
// 파라미터를 하나도 작성x -> 전체 반환

var value = '01234567';
console.log(value.substring(5, 20));
// 567
// 두번째 파라미터 값이 전체 length보다 크면 전체 문자열 length 사용

var value = '01234567';
console.log(value.substring(-7, 2));
console.log(value.substring(5, 1));
console.log(value.substring(5, 'A'));
// 01
// 1234
// 01234

var value = '01234567';
console.log(value.substr(0, 3));
// 012

var value = '01234567';
console.log(value.substr(-3, 3));
// 567

var value = '01234567';
console.log(value.substr(4));
console.log(value.substr());
// 4567
// 01234567

var value = '01234567';
console.log(value.slice(1, 4));
console.log(value.slice(false, 4));
// 123
// 0123

var value = '01234567';
console.log(value.slice('A'));
console.log(value.slice());
// 01234567
// 01234567

var value = '01234567';
console.log(value.slice(5));
console.log(value.slice(5, 3));
// 567
// ''
// 두번째를 작성하지 않으면 length 사용 = 끝까지 반환
// 첫번째가 두번째보다 크거나 같으면 빈 문자열

var value = '01234567';
console.log(value.slice(4, -1));
console.log(value.slice(-5, -2));
console.log(value.slice(-2, -5));
// 45
// 345
// ''