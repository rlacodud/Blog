var value = [1, 3, 5, 7];
var fn = function(prev, curr, index, all) {
  console.log(prev + '.' + curr);
  return prev + curr;
};
var result = value.reduce(fn);
console.log('결과:', result);
// 1.3
// 4.5
// 9.7
// 결과: 16
// return된 prev + curr의 값이 다음 콜백함수 호출 시 prev(파라미터 값)에 설정됨.

var value = [1, 3, 5];
var fn = function(prev, curr, index, all) {
  console.log(prev + '.' + curr);
  return prev + curr;
};
var result = value.reduce(fn, 7);
console.log('반환:', result);
// 7.1
// 8.3
// 11.5
// 반환: 16
// 두번째 파라미터값을 작성한 경우, 해당 값이 처음 콜백함수 호출 시 prev(파라미터 값)에 설정됨

var value = [1, 3, 5, 7];
var fn = function(prev, curr, index, all) {
  console.log(prev + '.' + curr);
  return prev + curr;
};
var result = value.reduceRight(fn);
console.log('결과:', result);
// 7.5
// 12.3
// 15.1
// 결과: 16
// 배열 끝에서 앞으로 읽어가며 실행됨