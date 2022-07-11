var obj = new Function('one', 'two',
'return one + two');
console.log(obj(100, 200));
// 300

var obj = new Functioon("return 1 + 2;");
console.log(obj());
// 3
// 파라미터를 작성하지 않으면 함수 코드가 없는 Function 인스턴스 생성