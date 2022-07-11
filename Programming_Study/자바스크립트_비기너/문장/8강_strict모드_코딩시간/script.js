book = '책';
log(book);
// 책

"use strict";
try {
  book = '변수 선언하지 않음';
  console.log(book);
} catch(error) {
  console.log(error.message);
}
// book is not defined