var value ='1Aa가';
for (var k = 0; k < value.length; k++) {
  console.log(value.charCodeAt(k));
};
console.log(value.charCodeAt(12));
// 49
// 65
// 97
// 44032
// NaN
// 12번째가 없으므로 NaN이 반환

console.log(String.fromCharCode(49, 65, 97, 44032));
// 1Aa가

var value = '나';
console.log(value.localeCompare('가'));
console.log(value.localeCompare('나'));
console.log(value.localeCompare('다'));
// 1
// 0 
// -1