console.log(Math.abs(-123));
console.log(Math.abs(-Infinity));
// 123
// Infinity
// 음수를 양수로 변환한 절댓값 반환

console.log(Math.floor(5.3));
console.log(Math.floor(-1.7));
console.log(Math.floor(-1.0));
// 5
// -2
// -1
// 소수 이하 버림, 정숫값 반환
// 소수 이하 값이 있으면서 음수이면 -1을 더해 반환

console.log(Math.ceil(5.1));
console.log(Math.ceil(-1.7));
console.log(Math.ceil(-0.3));
// 6
// -1
// 0
// 소수 이하 올림, 정숫값 반환

console.log(Math.round(5.1));
console.log(Math.round(5.5));
console.log(Math.round(-1.6));
console.log(Math.round(-1.3));
// 5
// 6
// -2
// -1
// 양수면 반올림, 음수면 반내림

console.log(Math.max(5, 3, 9));
console.log(Math.max(5, 3, 'AB'));
// 9
// NaN
// 파라미터 값 중에서 가장 큰 값을 반환
// 파라미터 값을 전부 숫자로 변환하여 비교
// NaN 하나라도 있으면 NaN 반환

console.log(Math.min(5, 3, 9));
console.log(Math.min(5, 3, 'AB'));
// 3
// NaN
// 파라미터 값 중에서 가장 작은 값을 반환
// 파라미터 값을 전부 숫자로 변환하여 비교
// NaN 하나라도 있으면 NaN 반환

console.log(Math.pow(10, 2));
console.log(Math.pow(10, 0));
console.log(Math.pow('A', 1));
console.log(Math.pow(1, 'A'));
console.log(Math.pow(1));
// 100
// 1
// NaN
// NaN
// NaN
// 파라미터 x값의 y승 값을 반환
// y가 0일 때 x가 NaN이어도 1을 반환
// y가 NaN이면 NaN 반환

console.log(Math.random());
console.log(Math.random());
// 0.6970477404309998
// 0.1391219365266354