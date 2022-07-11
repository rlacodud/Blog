var book = {
  title: "책",
  point: 123
};
// title은 문자열이므로 원래 따옴표를 작성해야 하나 js에서 문자열로 간주하기에 생략 가능

var book = {
  title: '책',
  point: {
    ten: 10,
    bonus: 200,
    promotion: function(){}
  }
};

var book = {};
book.title = 'JS책';
log(book);
// {title: JS책};

var book = {};
book['title'] = 'JS책';
log(book);
// {title: JS책};

var book = {title: 'JS책'};
var varName = 'title';
book[varName] = 'HTML책';
log(book);
// [title: HTML책]
