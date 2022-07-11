// let user:object;
// user = {
//   name: 'xx',
//   age: 30
// }
// console.log(user.name);
// type Score = 'A' | 'B' | 'C' | 'F';
// interface User {
//   name: string;
//   age: number;
//   // ?를 붙이면 option 속성으로, 작성 여부가 상관 없음.
//   gender?: string;
//   // readonly는 읽기 전용 속성이라 추후에 수정, 추가, 삭제 불가.
//   readonly birthYear: number;
//   [grade: number] : Score;
// }
// let user: User = {
//   name: 'xx',
//   age: 30,
//   birthYear: 2000,
//   1: 'A',
//   2: 'B'
// }
// interface Add {
//   (num1: number, num2: number): number;
// }
// const add : Add = function(x, y) {
//   return x + y;
// }
// add(10, 20);
// interface IsAdult {
//   (age: number): boolean;
// }
// const a : IsAdult = (age) => {
//   return age > 19;
// }
// a(33) // true
// implements
// interface Car {
//   color: string;
//   wheels: number;
//   start(): void
// }
// class Bmw implements Car {
//   color;
//   wheels = 4;
//   constructor(c: string) {
//     this.color = c;
//   }
//   start(): void {
//     console.log('go...');
//   }
// }
// const b = new Bmw('green');
// console.log(b);
// b.start();
// interface Toy {
//   name: string;
// }
// // extends
// interface ToyCar extends Car, Toy {
//   price: number;
// }
