function getBook(title) {
  return title;
};
var result = getBook('JS북');
console.log(result);
// JS북

function add(one, two) {
  return one + two;
};
console.log(add.length);
// 2

function add(one, two) {
  return one + two;
};
add(1, 2, 3, 4);
console.log(add.length);
// 2
// 함수의 파라미터 수는 함수를 호출한 곳에서 보낸 파라미터 수가 아님.