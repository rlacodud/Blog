var url = 'data?a=번&b=호';
console.log(encodeURI(url));
// data?a=%EB%B2%88&b=%ED%98%B8

var url = 'data?a=%EB%B2%88&b=%ED%98%B8';
console.log(decodeURI(url));
// data?a=번&b=호
