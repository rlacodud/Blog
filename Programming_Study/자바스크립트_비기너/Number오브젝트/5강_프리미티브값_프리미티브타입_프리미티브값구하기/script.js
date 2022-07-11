var obj = new Number(123);
log(obj + 200);
// 323
// 123이 인스턴스의 프리미티브값으로 설정되었기에 연산 가능

var obj = new Number(123);
log(obj.valueOf());
// 123
// 프리미티브값 반환