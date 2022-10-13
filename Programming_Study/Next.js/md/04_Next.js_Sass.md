[03_Next.js_Project](./03_Next.js_Project.md)

---

<br>

# __Next.js에 Sass 적용하기__
#### 개인적으로 css보다는 Sass가 더 편하고 유용하다고 생각하기에 이번엔 Next.js 프로젝트에 Sass를 적용하는 방법에 대해 배워보자.

<br>

## __1. Sass 설치__
#### Sass를 적용할 Next.js 프로젝트에 아래 명령어를 입력하여 Sass를 설치해주자.
```js
npm i sass //--- npm
yarn add sass //--- yarn
```

<br>

#### 개인적으로 npm보다는 yarn을 이용해 Sass를 설치하는 게 오류가 안 나기에 추천한다.

<br>

---

<br>

## __2. css 파일 => scss 파일__
#### 기존에 생성되어 있는 css 파일 또한 전부 scss 파일로 변경해준다.
```terminal
styles/global.css => styles/global.scss
styles/Home.module.css => styles/Home.module.scss
```

<br>

---

<br>

## __3. next.config.js 파일 수정__
#### next.config.js에 아래와 같이 sassOption을 추가한다.
```js
// next.config.js

const path = require('path'); // 1. path 선언

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')], // 2. sassOptions 옵션 추가
  },
};

module.exports = nextConfig;
```

<br>

---

<br>

## __4. `_variables.scss`, `_mixins.scss` 파일 생성__
#### 모든 scss 파일에서 공통으로 사용할 _variables.scss, _mixins.scss 파일을 styles 디렉토리에 생성한다.

<br>

---

<br>

## __5. next.config.js 파일 수정__
#### 이제 next.config.js에 prependData 옵션을 추가한다.
#### 이로써 모든 파일에서 `_variables.scss`, `_mixins.scss` 두 파일에서 선언한 변수를 모든 파일에서 사용할 수 있다.
```js
// next.config.js

const path = require('path'); 

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`, // prependData 옵션 추가
  },
};

module.exports = nextConfig;
```

<br>

#### 이제 scss 파일을 생성하면 별다른 과정 없이 css 파일과 동일하게 적용되는 것을 확인할 수 있다.
#### 다음 시간에는 더 간편한 `styled jsx`에 대해 배워보자.

<br>

---

<br>

[05_Next.js_style_jsx](./05_Next.js_style_jsx.md)