var value = String(123);
log(value);
log(typeof value);

log(typeof ("" + 123));
// 123
// string
// string

var obj = new String(123);
log(typeof obj);
// object

var obj = new String(123);
log(obj.valueOf());
// 123