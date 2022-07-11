// keyof
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: 'm' | 'f';
// }
// type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
// const uk: UserKey = 'id';
// Partial<T>
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: 'm' | 'f';
// }
// // interface User {
// //   id?: number;
// //   name?: string;
// //   age?: number;
// //   gender?: 'm' | 'f';
// // }
// // =
// let admin: Partial<User> = {
//   id: 1,
//   name: 'Bob'
// }
// Required<T>
// Required로 설정하면 option으로 생성했던 부분도 필수로 설정해야 하는 항목이 됨.
// interface User {
//   id: number;
//   name: string;
//   age?: number;
// }
// let admin: Required<User> = {
//   id: 1,
//   name: 'Bob',
//   age: 30
// }
// Readonly<T>
// Readonly로 설정했기 때문에 추후에 수정이 불가함.
// interface User {
//   id: number;
//   name: string;
//   age?: number;
// }
// let admin: Readonly<User> = {
//   id: 1,
//   name: 'Bob'
// };
// admin.id = 4;
// Record<K, T>
// K = key | T = type
// interface Score {
//   '1' : 'A' | 'B' | 'C' | 'D';
//   '2' : 'A' | 'B' | 'C' | 'D'
//   '3' : 'A' | 'B' | 'C' | 'D'
//   '4' : 'A' | 'B' | 'C' | 'D'
// }
// =
// type Grade = '1' | '2' | '3' | '4';
// type Score = 'A' | 'B' | 'C' | 'D' | 'F';
// const score: Record<Grade, Score> = {
//   1: 'A',
//   2: 'C',
//   3: 'B',
//   4: 'D'
// }
// interface User {
//   id: number;
//   name: string;
//   age: number;
// }
// function isValid(user: User) {
//   // User를 키값으로 받아와 boolean type의 결과를 받겠다는 의미.
//   const result: Record<keyof User, boolean> = {
//     id: user.id > 0,
//     name: user.name !== '',
//     age: user.age > 0,
//   }
//   return result;
// }
// Pick<T, K>
// key값들 중 원하는 부분만 골라서 작업 가능.
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: 'M' | 'W';
// }
// const admin: Pick<User, 'id' | 'name'> = {
//   id: 0,
//   name: 'Bob'
// }
// Omit<T, K>
// key값들 중 원하지 않는 부분을 골라 설정 가능.
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   gender: 'M' | 'W';
// }
// const admin: Omit<User, 'age' | 'gender'> = {
//   id: 0,
//   name: 'Bob'
// }
// Exclude<T1, T2>
// T1 type들 중에서 T2 type과 겹치는 type을 제외시킴.
// type T1 = string | number | boolean;
// type T2 = Exclude<T1, number | string>;
// NonNullable<Type>
// Null, undefined를 제외한 type을 생성.
// type T1 = string | null | undefined | void;
// type T2 = NonNullable<T1> // string, void
