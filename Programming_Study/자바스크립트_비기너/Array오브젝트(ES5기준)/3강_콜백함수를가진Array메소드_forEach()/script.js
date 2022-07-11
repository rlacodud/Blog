var list = ['A', 'B', 'C'];
list.forEach(function(el, index, all) {
  console.log(el + ':' + index + ':' + all);
});
// A:0:A,B,C
// B:1:A,B,C
// C:2:A,B,C
// break와 continue가 사용 불가하므로 처음부터 끝까지 반복은 불가피

var list = ['A', 'B', 'C'];
var fn = function(el, index, all) {
  console.log(el + ':' + index + ':' + all);
};
list.forEach(fn);
// A:0:A,B,C
// B:1:A,B,C
// C:2:A,B,C

var list = [1, 2];
var fn = function(el, index, all) {
  console.log(el + this.ten);
};
list.forEach(fn, {ten: 10});
// 11
// 12