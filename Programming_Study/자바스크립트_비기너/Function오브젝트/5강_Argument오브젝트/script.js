function getTotal(one) {
  return one + arguments[1] + arguments[2];
};
var result = getTotal(10, 20, 30);
console.log(result);
// 60

function getTotal(one) {
  return one + arguments[1] + arguments[2];
};
var result = getTotal.apply(this, [10, 20, 30]);
console.log(result);
// 60
// 함수 밖에서는 arguments 오브젝트와 액세스 불가