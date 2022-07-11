var value = 20;
log(20 === value.toString());

log(value.toString(16));
// false
// 14
// toString으로 문자열로 변환

log(20..toString());
// 20
// 20.을 변환대상으로 인식

var value = 1234.56;
log(value.toLocaleString());
log(value.toLocaleString('de-DE'));
log(value.toLocaleString(
  'zh-Hans-CN-u-nu-hanidec'
));
// 1,234.56
// VM694:3 1.234,56
// VM694:4 一,二三四.五六