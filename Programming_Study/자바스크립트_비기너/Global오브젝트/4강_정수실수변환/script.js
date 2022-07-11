console.log(parseInt(123.56));
// 123

console.log(parseInt('-123.45'));
console.log(parseInt('123px'));
console.log(parseInt('12AB34'));
// -123
// 123
// 12

console.log(parseInt('0012'));
console.log(parseInt('   123'));
console.log(parseInt());
// 12
// 123
// NaN
// 0 또는 빈 문자열을 제외시킴

console.log(parseInt(13, 16));
console.log(parseInt('0X13'));;
// 19
// 19
// 두번째 파라미터 작성 시, 해당 진수로 첫번째 파라미터값을 변환함
// 0(숫자)X는 16진수를 나타냄

console.log(parseFloat('-123.45') + 6);
console.log(parseFloat('12.34AB56'));
// -117.45
// 12.34
// 문자 이후는 변환하지 않음

console.log(parseFloat('1.2e3'));
console.log(parseFloat('   12.34   ') + 20);
console.log(parseFloat());
// 1200
// 32.34
// NaN