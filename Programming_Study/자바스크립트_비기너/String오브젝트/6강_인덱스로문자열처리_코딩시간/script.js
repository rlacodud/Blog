var value = 'sports';
log(value.charAt(1));
log(value[1]);
// p
// p

var value = 'sports';
console.log(value.charAt(12));
// ''

var value = 'sports';
console.log(value[12]);
// undefined

var value = '123123';
log(value.indexOf(2));
log(value.indexOf(23));
// 1
// 1

var value = '123123';
log(value.indexOf(2, 3));
// 4
// 3번 인덱스부터 2를 찾으므로 
// 1이 아닌 4가 반환됨.

var value = '1231233';
log(value.indexOf(15));
// -1
// 같은 문자가 없으면 -1 반환 -> 결과가 -1일 경우를 조건으로 다양한 활용 가능

var value = '123123';
log(value.indexOf(2, -1));
log(value.indexOf(2, 9));
log(value.indexOf(2, 'A'));
// 1
// 두번째 파라미터값이 0보다 작으면 처음부터 검색
// -1
// 두번째 파라미터값이 length보다 크면 -1 반환
// 1
// 두번째 파라미터가 NaN이면 처음부터 검색

var value = '123123';
log(value.lastIndexOf(2));
// 4

var value = '1231231';
log(value.lastIndexOf(1, 4));
log(value.lastIndexOf(2, -1));
// 3
// -1