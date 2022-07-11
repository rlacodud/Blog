var value = 1234;
log(value.toExponential());
// 1.234e+3

var value = 123456;
log(value.toExponential(3));
// 1.235e+5
// 자릿수에 맞춰 반올림

var value = 1234.567;
log(value.toExponential(2));
// 소수 두자리까지 표시하므로 셋째자리애서 반올림
log(value.toExponential());
// 파라미터값을 작성하지 않으면 0으로 간주하여 소수 첫째자리에서 반올림하여 정숫값 표시
// 1234.57
// 1235