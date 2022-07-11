var data = ['book', '책', 123];
var obj = new Array();
var result = obj.concat(data);
console.log(result);
// ['book', '책', 123]

var data = ['book', '책', 123];
var result = data.concat();
console.log(result);
// ['book', '책', 123]

var data = ['book', '책', 123];
var bookObj = {
  concat: function(data) {
    return data.concat();
  }
};
console.log(bookObj.concat(data));
// ['book', '책', 123]

var data = ['book', '책', 123];
var Book = function(data) {
  this.data = data;
};
Book.prototype.concat = function() {
  return this.data.concat();
};
var oneInstance = new Book(data);
console.log(oneInstance.concat());
// ['book', '책', 123]
