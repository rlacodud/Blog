var k = 1;
while (k < 3) {
  log(k);
  k++;
};
// 1
// 2

var k = 0;
do { 
  log('do:', k);
  k++;
} while (k < 3) {
  log('while:', k);
}
// do: 0
// do: 1
// do: 2
// while: 3
// while의 조건문이 false가 될 때
// while문 실행
// 그 전까지는 do문 반복 실행