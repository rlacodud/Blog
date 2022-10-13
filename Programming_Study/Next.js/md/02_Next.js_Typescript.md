[01_Next.js](./01_Next.js.md)

---

<br>

# __Next.js에 Typescript 적용하기__
#### Next.js의 또다른 강점 중 하나는 __Typescript 문법 적용이 용이하다는 것이다.__
#### 그렇다면 Next.js 프로젝트에 Typescript를 적용하는 방법에 대해 알아보자.

<br>

## __1. 기존 프로젝트에 Typescript 적용하기__
#### 기존에 javascript 기반의 Next.js 프로젝트를 사용하고 있는 경우, 다음과 같은 명령어를 입력하여 빈 tsconfig.json 파일을 생성한다.
>#### touch tsconfig.json
#### 그리고 다음 명령어로 Next.js 프로젝트를 실행해보면
>#### npm run dev

<br>

#### Typescript를 설정하는 방법을 안내해주는데 __안내받은대로 명령어를 실행하여__ Typescript에 필요한 라이브러리들을 설치하고
#### 다시 Next.js 프로젝트를 실행해보면 프로젝트가 잘 실행되며 tsconfig.json 파일 또한 자동으로 내용이 설정되어 있는 것을 확인할 수 있다.
```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "incremental": true,
    "esModuleInterop": true,
    "module": "esnext",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve"
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

<br>

#### 이제 `.js` 파일을 `.tsx` 또는 `.ts`로 변경하고 Typescript를 적용하면 된다.

<br>

---

<br>

## __2. 새로운 프로젝트에 Typescript 적용하기__
#### 새롭게 Next.js 프로젝트를 생성한다면 다음 명령어를 실행하여 __Typescript가 적용된 Next.js 프로젝트를 생성하면 된다.__
>#### npx create-next-app --typescript new-project

<br>

#### 이렇게 Next.js 프로젝트에 Typescript를 적용하는 방법에 대해 알아봤다.
#### Typescript 문법은 매우 용이하니 별도로 공부하여 잘 활용하는 편이 좋다.

<br>

#### 다음 시간에는 Next.js를 이용한 예제 프로젝트를 만들어보며 Next.js를 다루는 방법을 자세히 알아보자.

<br>

---

<br>

[03_Next.js_Project](./03_Next.js_Project.md)