// 생성자 함수
var Book = function(point) {
  this.point = point;
};
Book.prototype.getPoint = function() {
  return this.point + 100;
};
var oneInstance = new Book(200);
console.log(oneInstance.getPoint());
// 300