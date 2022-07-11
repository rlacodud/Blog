// let count = 0; // 숫자
// count += 1;
// // count = '문자열'; // 에러

// const message: string = 'hello world'; // 문자열
// const done: boolean = true; // 불리언 값

// const numbers: number[] = [1, 2, 3] // 숫자 배열
// const messages: string[] = ['hello', 'world']  // 문자열 배열

// // messages.push(1); // 문자열 배열에 숫자를 넣으려고 하면 에러

// let mightBeUndefined:string | undefined = undefined; // string 일 수도 있고 undefined일 수도 있음.
// let nullableNumber: number | null = null; // number 일 수도 있고 null일 수도 있음

// let color:'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나
// color = 'yellow';
// // color = 'green'; // 에러

// ---------------------------------------------
// 함수 타입 정의.
// function sum(x: number, y: number): number {
//   return x + y;
// }

// sum(1, 2);

// function sumArray(numbers: number[]):number {
//   return numbers.reduce((acc, current) => acc + current, 0);
// }

// const total = sumArray([1, 2, 3, 4, 5]);
// 함수에서 아무것도 반환(return)하지 않는다면 반환 타입을 void로 설정.
// ------------------------------------------------

// // interface: 클래스 또는 객체를 위한 타입을 지정할 때 사용하는 문법
// interface Shape {
//   // Shape interface에는 getArea라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 number로 정의.
//   getArea(): number; 
// }

// // implements 키워드를 사용하여 해당 클래스가 Shape interface의 조건을 충족하겠다는 것을 명시.
// class Circle implements Shape {
//   constructor(public radius:number) {
//     this.radius = radius;
//   }

//   // 너비를 가져오는 함수.
//   getArea() {
//     return this.radius * this.radius * Math.PI;
//   }
// }

// class Rectangle implements Shape {
//   constructor(private width: number, private height: number) {
//     this.width = width;
//     this.height = height;
//   }
//   getArea() {
//     return this.width * this.height
//   }
// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

// shapes.forEach(shape => {
//   console.log(shape.getArea());
// })
// ------------------------------------------------

// // 일반 객체를 interface로 타입 설정.
// interface Person {
//   name: string;
//   age?: number; // 물음표가 들어갈 시 설정 여부는 옵션.
// }
// // 형식이 유사할 경우 extends를 이용해 상속 가능
// // 추가적인 속성은 따로 설정.
// interface Developer extends Person {
//   skills: string[];
// }

// const person: Person = {
//   name: '김사람',
//   age: 28
// };

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// }

// const people: Person[] = [person, expert];
// ------------------------------------------------

// // Type Alias
// type Person = {
//   name: string;
//   age?: number;
// }

// // &는 intersection으로 두개 이상의 타입들을 합침.
// type Developer = Person & {
//   skills: string[]
// }

// const person: Person = {
//   name: '김사람'
// }

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react']
// }

// // Person[]을 앞으로 People이라는 타입으로 사용 가능.
// type People = Person[];
// const people: People = [person, expert];

// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];
// ------------------------------------------------

// Generics
// 함수, Class, interface, type alias를 사용하게 될 때 여러 종류의 타입에 대해 호환을 맞춰야 하는 상황에서 사용.

// // 예를 들어 a랑 b에 어떤 타입이 올 지 몰라 any타입을 사용한 경우
// function merge(a: any, b: any): any {
//   return {
//     ...a,
//     ...b
//   }
// }
// // 결과값 또한 any이기에 무엇이 있는지 알 수 없어지고 타입 유추가 깨지게 됨.
// const merged = merge({foo: 1}, {bar: 1})

// 이런 상황에서 사용하는 것이 Generic

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  }
}

const merged = merge({foo: 1}, {bar: 1});

function wrap<T>(param: T) {
  return {
    param
  }
}

const wrapped = wrap(10)

interface Items<T> {
  list: T[];
} 

const items: Items<string> = {
  list: ['a', 'b', 'c']
}

class Queue<T> {
  list: T[] = [];
  get length() {
    return this.list.length;
  }
  enqueue(item: T) {
    this.list.push(item);
  }
  dequeue() {
    return this.list.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());