var Book = function() {};
Book.prototype.getBook = function() {
  return 'JS북';
};

class Book {
  constructor(title) {
    this.title = title;
  }
  getBook() {
    return this.title;
  }
}
