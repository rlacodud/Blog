var obj = new Number();
log(typeof obj);
// object

var oneObj = new Number('123');
log(oneObj.valueOf());

var twoObj = new Number('456');
log(twoObj.valueOf());
// 123
// 456