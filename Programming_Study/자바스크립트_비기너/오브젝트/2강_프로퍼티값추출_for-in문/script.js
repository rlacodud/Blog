var obj = {book: '책'};
log(obj.book);
log(obj['sports']);
// 책
// undefined

var sports = {
  soccer: '축구',
  baseball: '야구'
};
for (var item in sports) {
  log(item);
  log(sports[item]);
}
// soccer
// 축구
// baseball
// 야구
// 한 세트씩 실행
// 반복문이기에 모든 오브젝트 세트가 실행될 때까지 반복