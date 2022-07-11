var value;
try {
  value = ball;
} catch(error) {
  log('catch 실행');
};
// catch 실행

var sports;
try {
  sports = ball;
} catch (error) {
  log('catch 실행');
} finally {
  log('finally 실행');
};
// catch 실행
// finally 실행

try {
  throw '예외 발생시킴';
  var sports = '스포츠';
} catch(error) {
  log(error);
  log(sports);
};
// 예외 발생시킴
// undefined
// throw 이후의 문장은 실행하지 않음

try {
  throw {
    msg: '예외 발생시킴',
    bigo: '임의의 이름 사용'
  };
} catch(srror) {
  log(error.msg);
  log(error.bigo);
};
// 예외 발생시킴
// 임의의 이름 사용

try {
  throw new Error('예외 발생시킴');
  // 오브젝트 생성 후 파라미터값 부여
} catch(error) {
  log(error.message);
};
// 예외 발생시킴