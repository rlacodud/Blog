console.log(Array.isArray([1, 2]));
console.log(Array.isArray(123));
// true
// false

console.log(typeof {a: 1});
console.log(typeof [1, 2]);
console.log(typeof null);
// object
// object
// object
// typeof 연산자로 데이터 타입을 구할 경우, 모두 object이므로 배열 여부 체크 불가