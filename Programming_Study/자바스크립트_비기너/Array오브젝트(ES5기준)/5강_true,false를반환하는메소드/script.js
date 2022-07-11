var value = [20, 10, 30, 40];
var fn = function(el, index, all) {
  console.log(el);
  // 아래 영역에서 10은 false 결과값을 가지므로 10까지 실행하고 every()문은 종료됨
  return el > 15;
};
var result = value.every(fn);
console.log('결과:', result);
// 20
// 10
// 결과: false

var value = [10, 20, 30, 40];
var fn = function(el, index, all) {
  console.log(el);
  return el > 15;
};
var result = value.some(fn);
console.log('결과:', result);
// 10
// 20
// 결과: true