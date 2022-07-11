var getBook = function(title) {
  return title;
};
var result = getBook('JS책');
console.log(result);
// JS책

var getBook = function inside(value) {
  if (value === 102) {
    return value;
  };
  return inside(value + 1);
};
getBook(100);
// 102
// inside()는 함수 외부에서 호출 불가
// -> getBook()을 호출하여 함수 안으로 이동한 후 호출
// 함수가 본인을 계속 호출(재귀함수)하므로 조건문에 부합하여 return문에 도달할 때까지 반복 실행
// 102가 되면 조건에 부합하여 102를 반환하고 종료됨