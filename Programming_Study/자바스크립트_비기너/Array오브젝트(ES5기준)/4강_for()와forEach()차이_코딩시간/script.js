var list = [1, 2, 3];
var fn = function(el, index, all) {
  if (index === 0) {
    // forEach()가 실행되자마자(index가 0이니까)
    // 배열에 AB를 추가하지만
    // forEach()가 실행되어 반복되는 도중에 추가하면 처리하지 않음
    list.push('AB');
  };
  console.log(el);
};
list.forEach(fn);
// 1
// 2
// 3

var list = [1, 2, 3];
var fn = function(el, index, all) {
  if(index === 0) {
    // 현재 index가 0인 상황에서 2번째 index의 값을 변경하는 것이니 적용됨
    list[2] = 345;
  };
  console.log(el);
};
list.forEach(fn);
// 1
// 2
// 345

var list = [1, 2, 3];
var fn = function (el, index, all) {
  if (index === 0) {
    delete list[2];
  };
  console.log(el);
};
list.forEach(fn);
// 1
// 2

// 코딩 시간
// 함수 코드가 없는 빈 함수 작성 - 함수 이름: check()
// 배열에 1부터 1,000,000까지 작성
// forEach()로 배열을 반복하면서 check() 함수 호출
// 반복이 끝나면 실행 시간 출력
// 종료 시각 - 시작 시각
// 현재 시각 구하기: var start = Date.now();
// 현재 시각을 1/1000초로 반환

// 함수 코드가 없는 빈 함수 작성
function check() {

};
// 배열에 1부터 1,000,000까지 작성
// 1,000,000까지 직접 배열에 작성할 수 없으므로 빈 배열 생성
var number = [];
// 해당 배열에 반복문으로 1부터 1,000,000까지 삽입
// 변수 i를 1로 설정 후 1,000,000과 같거나 작을 때까지 i를 반복하여 1씩 증가시킴
for(var i = 1; i <= 1000000; i++) {
  // 정상 작동 확인용 console
  // console.log(i);
  // 매 반복마다 push 메소드를 이용해서 빈 배열 number에 i를 삽입함.
  number.push([i]);
};

// console.log(number);

var start = Date.now();
// forEach()로 배열을 반복하면서
number.forEach(function(el, index, all) {
  // check() 함수 호출
  check();
});
var end = Date.now();
// 반복이 끝나면 실행 시간 출력
console.log(start, end);
// 8초