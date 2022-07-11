var one = 1;
var value = one++ +3;
// 이 때부터 one에 1이 증가됨
log(value);
log(one);
// 4
// 2

var one = 1;
var value = ++one + 3;
log(value);
// 5

var two = 2;
var value = two-- + 3;
log(value);
log(two);
// 5
// 1

var two = 2;
var value = --two + 3;
log(value);
// 4 

var value = true;
log(!value);
log(!!'a');
// false
// true