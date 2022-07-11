# __TypeScript__

## __1. TypeScript란?__
#### 마이크로소프트가 발표한 타입스크립트(TypeScript)는 자바스크립트(Javascript)를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어이다.
#### 요즘은 대형 SI 프로젝트에서 흔하게 사용되고 있으며 개발자 구인 시 우대사항 기술로도 자주 언급되는 걸 본 적이 있을 것이다.

<br>

---

<br>

## __2. TypeScript의 특징__
### __(1) 컴파일 언어, 정적 타입 언어__
#### 자바스크립트는 동적 타입의 인터프리터 언어로 런타임에서 오류를 발견할 수 있다.
#### 이에 반해 타입스크립트는 정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨(Babel)을 통해 자바스크립트 언어로 변환된다.
#### 코드 작성 단계에서 타입을 체크해 오류를 확인할 수 있고 미리 타입을 결정하기 때문에 실행 속도가 매우 빠르다는 장점이 있다.
#### 하지만 코드 작성 시 매번 타입을 결정해야 하기 때문에 번거롭고 코드량이 증가하며 컴파일 시간이 오래 걸린다는 단점이 있다.

<br>

### __(2) 자바스크립트 슈퍼셋__
#### 타입스크립트는 자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어이다.
#### 따라서 유효한 자바스크립트로 작성한 코드는 확장자를 .js에서 .ts로 변경하고 타입스크립트로 컴파일해 변환할 수 있다.

<br>

### __(3) 객체 지향 프로그래밍 지원__
#### 타입스크립트는 ES6에서 새롭게 사용된 문법을 포함하고 있으며 Class, Interface, 상속, Module 등과 같은 객체 지향 프로그래밍 패턴을 제공한다.

<br>

---

<br>

## __3. TypeScript 사용을 고려해야 하는 이유__
### __(1) 높은 수준의 코드 탐색과 디버깅__
#### 타입스크립트는 코드에 목적을 명시하고 목적에 맞지 않는 타입의 변수나 함수들에서 에러를 발생기켜 버그를 사전에 제거한다.
#### 또한 코드 자동완성이나 실행 전 피드백을 제공하여 작업과 동시에 디버깅이 가능해 생산성을 높일 수 있다.
#### 실제로 한 연구에 따르면 모든 자바스크립트 버그의 15%가 사전에 타입스크립트로 감지할 수 있다고 한다.

<br>

### __(2) 자바스크립트 호환__
#### 타입스크립트는 자바스크립트와 100% 호환된다. 따라서 프론트엔드 또는 백엔드 어디든 자바스크립트를 사용할 수 있는 곳이라면 타입스크립트도 쓸 수 있다.
#### 타입스크립트는 앱과 웹을 구현하는 자바스크린트와 동일한 용도로 사용 가능하며 서버단에서 개발이 이루어지는 복잡한 대형 프로젝트에서도 빛을 발한다.

<br>

### __(3) 강력한 생태계__
#### 타입스크립트는 그리 오래되지 않은 언어임에도 불구하고 강력한 생태계를 가지고 있다.
#### 대부분의 라이브러리들이 타입스크립트를 지원하며 마이크로소프트의 비주얼 스튜디오 코드를 비롯해 각종 에디터가 타입스크립트 관련 기능과 플러그인을 지원한다.

<br>

### __(4) 점진적 전환 가능__
#### 기존의 자바스크립트 프로젝트를 타입스크립트로 전환하는 데 부담이 있다면 추가 기능이나 특정 기능에만 타입스크립트를 도입함으로써 프로젝트를 점진적으로 전환할 수 있다. 자바스크립트에 주석을 추가하는 것에서부터 시작해 시간이 지남에 따라 코드베이스가 완전 바뀌도록 준비 기간을 가질 수 있다.

<br>

---

<br>

## __4. 프론트엔드 프레임워크와 타입스크립트__
### __(1) 리액트(React)__
#### 리액트와 타입스크립트의 호환성은 비교적 좋은 편이다.
#### 최근들어 많은 개발자들이 리액트와 타입스크립트 조합을 선택하고 있다.
#### 리액트 공식 홈페이지에서는 타입스크립트를 사용하기 위한 가이드를 제시하고 있다.

<br>

### __(2) 뷰(Vue.js)__
#### 뷰2.0에서는 타입스크립트를 사용할 수 있지만 몇몇 라이브러리의 도움을 받아야 하거나 구현 자체가 안되는 문제도 다수 있었다.
#### 다행스럽게도 최근 릴리즈된 뷰3.0부터는 타입스크립트를 공식 지원한다.

<br>

### __(3) 앵귤러(Angular)__
#### 자바스크립트 기반인 앵귤어 버전1과 달리 버전2부터는 타입스크립트 기반으로 만들어졌고 타입스크립트를 권장하고 있다.

<br>

---

<br>

## __5. 타입스크립트로 전환하는 방법__
#### 해당방법은 비주얼 스튜디오 코드 에디터를 사용하는 경우에 한한다.


<br>

### __(1) TypeScript 설치__
```terminal
npm install -g typescript
```

<br>

### __(2) TypeScript 설정파일 생성__
#### 타입스크립트 설정옵션을 직접 설정하고 싶다면 파일 tsconfig.json을 프로젝트 디렉터리 안에 생성하고 다음과 같이 작성한다.
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

<br>

#### 자동으로 생성되길 원한다면 다음과 같이 터미널에 입력해준다.
```terminal
tsc --init
```

<br>

#### 위 타입스크립트 설정에서 각 옵션이 의미하는 바를 알아보자.
>#### __- target__
>#### 컴파일된 코드가 어떤 환경에서 실행될지 정의한다.
>#### 예를 들어 화살표 함수를 사용하고 target을 화살표 함수가 지원되지 않는 es5로 한다면 일반 function 키워드를 사용하는 함수로 변환을 해준다.
>#### __- module__
>#### 컴파일된 코드가 어떤 모듈 시스템을 사용할지 정의한다.
>#### 예를 들어 이 값을 위와 같이 common으로 하면 export default Sample을 하게 됐을 때 컴파일된 코드에서는 exports.default = helloWorld로 변환해주지만 이 값을 es2015로 하면 export default Sample을 그대로 유지하게 된다.
>#### __- strict__
>#### 모든 타입 체킹 옵션을 활성화한다는 것을 의미한다.
>#### __- esModuleInterop__
>#### commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해준다.

<br>

#### 현재 기본적으로 만들어진 설정에서 한가지 속성을 추가해볼텐데 `outDir`이라는 속성이다.
#### 이를 통해 컴파일된 파일들이 저장되는 경로를 지정할 수 있다.
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"
  }
}
```

<br

---

<br>

## __6. 기본 문법__
### __(1) 기본 타입__
#### __(1-1) 타입 종류__
#### 타입스크립트는 다양한 기본 타입을 제공한다.
>#### Boolean
>#### Number
>#### String
>#### Object
>#### Array
>#### Tuple
>#### Enum
>#### Any
>#### Void
>#### Null
>#### Undefined
>#### Never

<br>

#### __(1-2) 변수에 타입 설정__
```ts
let str: string = 'hi';
let num: number = 100;

let arr: Array = [1, 2, 3];
let arr2: number[] = [1, 2, 3];

let obj: object = {};
let obj2: {name: string, age: number} =  {
  name: 'hoho',
  age: 22
}
```

#### 타입스크립트는 말그대로 요소들의 Type을 엄격하게 정의함으로써 기존 자바스크립트 내에서 작성 시 발생할 오류와 버그들을 방지해주는 역할을 한다고 볼 수 있다.
#### 그렇기에 정의 시엔 늘 타입을 설정해줘야 한다.

<br>

#### __(1-3) 함수에 타입 설정__
```ts
function add(a: number, b: number):number {
  return a + b;
}
// 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {
  console.log(a);
}
```
#### 함수에 타입 설정 시 매개변수() 뒤에 설정하는 값을 return받을 결과값의 타입이다.
#### 또한 매개변수 뒤에 ?를 붙이면 해당 파라미터는 설정이 옵션으로 설정되어 미설정 시 문제가 전혀 없다.


<br>

#### __(1-4) Tuple__
#### 배열의 타입 순서와 배열 길이를 지정할 수 있다.
```ts
var srr:[string, number] = ['aa', 100];
```

<br>

#### __(1-5) Enum__
#### Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입이다.
#### 값의 종류가 일정한 범위로 정해져 있는 경우에 유용하다.
#### 기본적으로 0부터 시작하며 값을 1씩 증가한다.
```ts
enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스'
}
```

<br>

#### __(1-6) Any__
#### 모든 데이터 타입을 허용한다.

<br>

#### __(1-7) Void__
#### 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입이다.
#### 즉 함수에서 아무것도 반환하지 않을 때 사용한다.
```ts
function sayHello():void {
  console.log('hello');
}
```


<br>

#### __(1-8) Never__
#### 특정 값이 절대 발생할 수 없게 할 때 사용한다.
```ts
function showError():never {
  throw new Error();
}
```

<br>

---

<br>

### __(2) 인터페이스 Interface__
#### 인터페이스는 각 변수의 타입을 정의한 규칙을 의미한다.
```ts
interface User {
  age: number;
  name: string;
}
```

<br>

#### __(2-1) 변수와 함수에 활용한 인터페이스__
```ts
var person: User = {
  age: 30,
  name: 'aa'
}

function getUser(user: User) {
  console.log(user);
}
```

<br>

#### __(2-2) 인덱싱__
```ts
interface StringArray {
  [index: number]: string;
}

var arr2: StringArray = ['a', 'b', 'c'];
arr[0] = 10; // Error
```
#### Interface에서 결과값을 string으로 설정했기에 number 타입인 10을 대입하면 에러가 발생한다.

<br>

#### __(2-3) 인터페이스 확장__
#### extends 사용 시 말 그대로 인터페이스의 객체를 확장시킬 수 있다.
```ts
interface Person {
  name: string;
  age: number;
}

interface User extends Person {
  language: string;
}
```
#### 위 예제를 보면 Person 인터페이스에는 name과 age만 정의되어있었으나
#### extends를 통해 language라는 새로운 객체가 정의되었다.

<br>

### __(3) 오퍼레이터__
#### __(3-1) Union 타입__
#### 자바스크립트의 or 연산자와 같은 의미의 타입이다.
#### Union 타입으로 지정하면 각 타입의 공통된(보장된) 속성에만 접근 가능하다.
```ts
interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color);
  if(gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}
```
#### 위 예제를 보면 getGift 함수의 파라미터인 gift로 Car 또는 Mobile 인터페이스를 설정하여
#### 둘 중 무엇으로든 접근 가능하도록 해준다.

<br>

#### __(3-2) Interaction 타입__
#### 자바스크립트의 and 연산자와 같은 의미의 타입이다.
#### 각각의 모든 타입이 포함된 객체를 넘기지 않으면 에러가 발생한다.
```ts
interface Car {
  name: string;
  start():void;
}

interface Toy {
  name: string;
  color: string;
  price: number;
}

const toyCar: Toy & Car = {
  name: '타요',
  start() {},
  color: 'blue',
  price: 1000,
};
```
#### 위 예제에서는 Car 인터페이스에서는 name과 start 함수를,
#### Toy 인터페이스에서는 name과 color, price 객체를 정의했고
#### 이를 Interaction 타입으로 정의했으므로 모든 객체를 넘겨야 에러가 발생하지 않는다.

<br>

### __(4) 제네릭 Generics__
#### 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는 데 사용된다.
#### 제네릭이란 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미한다.
```ts
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number | string>(arr1); //3

const arr2 = ['a', 'b', 'c'];
getSize<string>(arr2); //3

const arr3 = [true, false, false];
getSize<boolean>(arr3); //3
```
#### 함수명 뒤에 꺾쇠를 통해 제네릭을 정의해주고
#### 이 함수를 호출하는 함수명 뒤에 꺾쇠 안에 원하는 타입을 설정하면
#### 효율적으로 하나의 함수를 여러 타입에서 동작하도록 할 수 있다.

<br>

### __(5) 타입 추론__
#### 말그대로 타입스크립트가 코드를 해석하는 과정을 뜻하는데
```ts
var a = true;
a = 100; // Error
```
#### 위 예제를 보면 처음 변수 a를 생성 및 정의할 당시 Boolean 타입인 true로 정의했기에 타입스크립트는 a를 Boolean 타입으로 추론하고 있었는데
#### a를 100이라는 number 타입으로 재정의했기 때문에 에러가 발생한다.

<br>

---

<br>



## __7. 타입스크립트 파일 만들기__
#### 프로젝트 디렉터리 내에 src 디렉터리를 만들고 그 안에 practice.ts라는 파일을 만들자.