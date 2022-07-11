console.log(isNaN('ABC'));
console.log(isNaN());
// true
// true

console.log(isNaN(123));
console.log(isNaN('123'));
console.log(isNaN(null));
// false
// false
// false
// null은 0

console.log(NaN === NaN);
// false
// 설계 실수
console.log(Object.is(NaN, NaN));
// true
// Object.is()를 사용하면 true 반환

// NaN
console.log(isFinite(0 / 0));
// infinity
console.log(isFinite(1 / 0));
console.log(isFinite('ABC'));
// false
// false
// false

console.log(isFinite(123));
console.log(isFinite('123'));
console.log(isFinite(false));
// true
// true
// true