// Generic
// 함수 정의 시에는 따로 정의하지 않고 각 배열에서 type을 정의함으로써 자유롭게 활용 가능.
// function getSize<T>(arr: T[]): number {
//   return arr.length;
// }

// const arr1 = [1, 2, 3];
// getSize<number | string>(arr1); //3

// const arr2 = ['a', 'b', 'c'];
// getSize<string>(arr2); //3

// const arr3 = [true, false, false];
// getSize<boolean>(arr3); //3

// interface Mobile<T> {
//   name: string;
//   price: number;
//   option: T;
// }

// const m1: Mobile<{color: string; coupon: boolean}> = {
//   name: 's21',
//   price: 1000,
//   option: {
//     color: 'red',
//     coupon: false,
//   }
// }

// const m2: Mobile<string> = {
//   name: 's20',
//   price: 900,
//   option: 'good'
// }

// interface User {
//   name: string;
//   age: number;
// }

// interface Car {
//   name: boolean;
//   color: string;
// }

// interface Book {
//   price: number;
// }

// const user: User = {name: 'a', age: 10};
// const car: Car = {name: 'bmw', color: 'red'};
// const book: Book = {price: 3000};

// function showName<T extends {name: string}> (data: T): string {
//   return data.name;
// }

// showName(user);
// showName(car);
// showName(book);