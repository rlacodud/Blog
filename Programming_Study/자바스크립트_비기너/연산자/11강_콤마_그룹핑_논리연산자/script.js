var value, zero = 0, two = 2;
log(value || zero || two) ;
// 2

var value, zero = 0;
log(zero || value);
// undefined
// 마지막까지 비교했는데 모두가 false면 false가 아니라 마지막 변숫값 반환

var one = 1;
log(one === 1 || two === 2);
// true

var one = 1, two = 2;
log(one && two);
// 2
// 모두가 truw이면 마지막 변숫값 반환

var one = 1, zero = 0;
log(one && zero && nine);
// 0