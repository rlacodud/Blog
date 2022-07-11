var obj = {};
Object.defineProperty(obj, 'book', {
  value: "JS북",
  enumerable: true
});
console.log(obj);
// {book: 'JS북'}

var obj = {};
Object.defineProperties(obj, {
  soccer: {
    value: '축구', enumerable: true
  },
  basketball: {
    value: '농구', enumerable: true
  }
});
for (var name in obj) {
  console.log(name + ':' + obj[name]);
};
// soccer:축구
// basketball:농구