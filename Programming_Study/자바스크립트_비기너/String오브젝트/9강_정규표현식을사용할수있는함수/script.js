var value = 'Sports';
console.log(value.match(/s/));
console.log(value.match('spo'));
// [s]
// null
// 정규표현식은 / 사이에 작성
// value 변수에는 S가 대문자이기에 매치가 안됨. => null

var value = 'abcabc';
console.log(value.replace('a', '바꿈'));
console.log(value.replace(/a/, '바꿈'));

function change() {
  return '함수';
};
console.log(value.replace(/a/, change()));
// 바꿈bcabc
// 바꿈bcabc
// 함수bcabc

var value = 'cbacba';
console.log(value.search(/a/));
console.log(value.search('K'));
// 2
// -1
// k가 없으므로 매치X => -1 반환

console.log('12_34_56'.split('_'));
// [12, 34, 56]
// 배열 형태

var value = '123';
console.log(value.split(''));
console.log(value.split());
// [1, 2, 3]
// [123]
// 분리자에 빈 문자열 작성 => 하나씩 분리하여 반환
// 분리자 작성X => 분리대상 전체를 하나의 배열로 반환

var value = '12_34_56_78';
console.log(value.split('_', 3));

value = '123';
console.log(value.split('A'));
// [12, 34, 56]
// [123]
// 두번째 파라미터에 숫자 작성 => 앞에서부터 수만큼만 반환
// 분리자가 분리대상에 X => 분리대상 전체를 하나의 배열로 반환