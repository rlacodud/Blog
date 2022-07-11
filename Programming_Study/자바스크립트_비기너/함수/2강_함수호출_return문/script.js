function setValue(one, two) {
  var total = one + two;
};
setValue(10, 20);

function getPoint() {
  return 10 * 30;
};
var result = getPoint();
log(result);
// 300

function getPoint() {
};
var result = getPoint();
log(typeof result);
// undefined

function getPoint() {
  return
  10 * 30;
};
var result = getPoint();
log(result);
// undefined
// return 뒤에 줄바꿈을 할 경우, js에서 자동으로 세미콜론을 삽입하여
// 아무런 결과값없이 반환하게 됨