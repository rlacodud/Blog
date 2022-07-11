// class Car {
//   // color: string;
//   // public 또는 readonly로 설정해주면 위에서 별도로 정의하지 않아도 사용 가능.
//   constructor(public color:string) {
//     this.color = color;
//   }
//   start() {
//     console.log('start');
//   }
// }

// const bmw = new Car('red');

// // 접근 제한자(Access modifier)
// // public - 자식 클래스, 클래스 인스턴스 모두 접근 가능
// // protected - 자식 클래스에서 접근 가능
// // private - 해당 클래스 내부에서만 접근 가능
// // 아무것도 작성 안하면 public으로 자동 설정.
// class Car {
//   readonly name: string = 'car';
//   color: string;
//   // static을 사용할 경우, Class명으로 불러오기
//   static wheels = 4;
//   constructor(color: string, name) {
//     this.color = color;
//     this.name = name;
//   }
//   start() {
//     console.log('start');
//     console.log(this.name);
//     console.log(Car.wheels)
//   }
// }

// class Bmw extends Car {
//   constructor(color: string, name) {
//     super(color, name);
//   }
//   showName() {
//     console.log(this.name);
//   }
// }

// const z4 = new Bmw('black', 'zzzz4');
// console.log(Car.wheels);
// // z4.name = 'zzz4';

// 추상 Class
// 프로퍼티나 메소드의 이름만 선언해주고 구체적인 개념은 상속받는 쪽에서 구현해주는 것을 의미.
// abstract class Car {
//   color: string;
//   constructor(color: string) {
//     this.color = color;
//   }
//   start() {
//     console.log('start');
//   }
//   abstract doSomething():void;
// }

// // 추상 class는 new를 이용해서 객체를 생성할 수 없음.
// // const car = new Car('red');

// class Bmw extends Car {
//   constructor(color: string) {
//     super(color);
//   }
//   doSomething() {
//     alert(3);
//   }
// }

// const z4 = new Bmw('black');