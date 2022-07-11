var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5));
// 2

var value = [1, 2, 5, 2, 5];
console.log(value.indexOf("5"));
// -1
// 타입까지 같은 값이 없으면 -1 반환

var value = [1, 2, 5, 2, 5];
console.log(value.indexOf(5, 3));
// 4
// 두번째 파라미터의 인덱스부터 검색

console.log('ABCBC'.indexOf('C', -2));
var list = ['A', 'B', 'C', 'B', 'C'];
console.log(list.indexOf('C', -2));
// 2
// 4
// String 오브젝트는 0으로 간주하여 처음부터 검색
// Array 오브젝트는 음수에 length를 더해 시작 인덱스로 사용(-2 + 5 = 3번째부터 검색)

var value = [1, 2, 5, 2, 5];
console.log(value.lastIndexOf(5));
// 4
// 파라미터값과 같은 엘리먼트의 마지막 인덱스 반환