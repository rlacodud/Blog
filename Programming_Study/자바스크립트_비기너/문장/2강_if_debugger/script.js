var a = 1, b = 2;
if(a === b) log('블록을 사용하지 않음') ;

if (a === b)
  log('1번 줄')
  log('2번 줄');
  // 블록을 사용하지 않음
  // 1번 줄
  // 2번 줄

var a = 1, b = 1;
if (a === b) {
  log('블록 사용');
};
// 블록 사용

var a = 1, b = 2;
if (a === b)
  log('블록 사용하지 않음, true');
else
  log('블록 사용하지 않음, else');
// 블록 사용하지 않음, else

var a = 1, b = 2;
if (a === b) {
  log('블록 사용, true');
} else { 
  log('블록 사용, else');
}
// 블록 사용, else

var sports = '스포츠';
debugger;
log(sports);
// 스포츠