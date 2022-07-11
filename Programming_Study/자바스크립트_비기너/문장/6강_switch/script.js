var exp = 1;
switch(exp) {
  case 1:
    log(100);
  case 2:
    log(200);
};
// 100
// 200

var exp = 1;
switch(exp) {
  case 1:
    log(100);
    break;
  case 2:
    log(200);
};
// 100

var exp = 7, value;
switch(exp) {
  case 1:
    value = 100;
  default:
    value = 700;
  case 2:
    value = 200;
};
log(value);
// 200

var exp = 3;
switch(exp) {
  case 2:
  case 3:
    log(100);
};
// 100
// exp값이 2 또는 3이면 case 수행