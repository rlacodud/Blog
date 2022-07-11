var obj = new Date(2019, 02);
console.log(obj);
// Fri Mar 01 2019 00:00:00 GMT+0900 (한국 표준시)

console.log(new Date());
// Tue Feb 15 2022 16:51:02 GMT+0900 (한국 표준시)
// 현재 시간

console.log(new Date('2019-02'));
// Fri Feb 01 2019 09:00:00 GMT+0900 (한국 표준시)

console.log(new Date(2019, 11, 34));
// Fri Jan 03 2020 00:00:00 GMT+0900 (한국 표준시)
// 월일시분초 범위를 넘기면 상위 시간값에 반영
// 문자열로 작성하면 에러남

console.log(Date.now());
console.log(new Date());
// 1644911714427
// Tue Feb 15 2022 16:55:14 GMT+0900 (한국 표준시)

console.log(Date.parse('2019-01-23T09:11:23.123'));
// 1548202283123

var obj = new Date(2019, 02, 15);
console.log(obj.getMonth());
console.log(obj.getDate());
// 2
// 15

var obj = new Date();
console.log(obj.valueOf());
console.log(obj.setMonth(01));
console.log(obj.setDate(15));
// 1644912243739
// 1644912243739
// 1644912243739