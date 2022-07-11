var value = [undefined, null, NaN, 0, ""];
for (var k = 0; k < value.length; k++) {
  var obj = new Boolean(value[k]);
  console.log(obj + 1);
};
// 1
// 1
// 1
// 1
// 1

var value = [12, '1', '0', 'false'];
for (var k = 0; k < value.length; k++) {
  var obj = new Boolean(value[k]);
  console.log(obj + 1);
};
// 2
// 2
// 2
// 2
// 문자열이면서 값이 있으면 true로 변환

var value = [12, '1', '0', 'false'];
for (var k = 0; k < value.length; k++) {
  console.log(Boolean(value[k]) + 1);
};
// 2
// 2
// 2
// 2

var result = true.toString();
console.log(result);
console.log(typeof result);
// true
// string

var obj = new Boolean(3);
console.log(obj.valueOf());
// true