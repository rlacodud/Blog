log(Number('123') + 500);
log(Number('abc'));
// 623
// NaN
// '123'은 숫자로 변환 가능하므로 적용됨

log(Number(0x14)); // 16진수
log(Number(true));
log(Number(null));
log(Number(undefined));
// 20
// 1
// 0
// NaN