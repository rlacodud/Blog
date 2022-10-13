# __Next.js__
## __1. Next.js란?__
#### Next.js는 __React로 만드는 `서버 사이드 렌더링(SSR)` 프레임 워크__ 이다.
#### 그렇다면 기존 React만을 사용하는 것보다 __Next.js를 사용할 때 얻는 이득은 무엇일까?__

<br>

#### 그 이득을 이해하기 위해 우선 `CSR`과 `SSR`의 개념에 대해 이해해야 한다.

<br>

### __(1) CSR vs SSR__
#### `create-react-app`으로 만든 __React.js 앱은 `CSR`(Client Side Rendering)__ 이고
#### `create-next-app`으로 만든 __Next.js 앱은 `SSR`(Server Side Rendering)__ 이다.

<br>

#### 이름 자체에서도 깨달았을 수도 있지만 `CSR`과 `SSR`은 유저가 브라우저에서 보는 화면인 __"UI를 어디서(Client | Server) 만들어주는지"__ 에 따라 구분한다.

<br>

#### 각 방식의 작업 과정의 차이를 통해 더 자세히 알아보자.
#### __(1-1) `CSR`__
#### 1. 유저가 브라우저를 통해 앱에 접속한다.
#### 2. 앱은 브라우저에게 javascript 정보가 들어있는 빈 html 문서를 전달한다.
#### 3. 브라우저는 javascript 파일을 다운로드하고 동시에 유저는 빈 화면을 보게 된다.
#### 4. 브라우저에서 javascript 파일의 다운로드가 끝나면 리액트 코드가 있는 javascript 파일을 실행한다.
#### 5. 브라우저에 있는 리액트 코드가 UI를 렌더링하고 유저는 드디어 앱이 보여주고자 했던 화면을 보게 된다.

<br>

#### 위 과정을 보면 `CSR`의 아래와 같은 단점을 확인할 수 있다.

<br>

>#### __1. 사용자 대기 시간__
>#### __모든 javascript 파일이 로드된 이후에__ 사용자가 앱을 볼 수 있게 된다.
>#### 이 때까지 사용자는 많은 시간을 대기해야 한다는 문제가 생긴다.
>#### <br>
>#### __2. SEO 문제__
>#### javascript가 로드되지 않은 경우, 초기 html 파일은 비어있으므로 아무런 정보를 보이지 않게 되고
>#### 비어있는 해당 페이지를 검색엔진으로 스캔함으로써 __결론적으로 검색에 아무 페이지도 걸리지 않게 된다.__

<br>

#### _이 두가지를 해결하는 것이 `SSR`이다._

<br>

#### __(1-2) `SSR`__
#### 1. 유저가 브라우저를 통해 앱에 접속한다.
#### 2. 서버에서 리액트를 실행한다.
#### 3. 리액트는 UI를 렌더링한다.
#### 4. 렌더링된 결과를 통해 브라우저에게 html을 제공하고 이 때 유저는 앱의 초기화면을 보게 된다.
#### 5. 이후 브라우저는 리액트 코드가 있는 javascript 파일을 다운받고 실행시킨다.
#### 이 때부터 일반적인 리액트 앱과 같이 `CSR`의 동작(동적 렌더링)을 하게 되고 이 과정을 hydration이라고 한다.

<br>

#### 위 과정을 보면 `CSR`로 야기됐던 문제가 해결되었다는 것을 알 수 있는데
>#### 첫번째 문제는 __서버에서 javascript를 로딩함으로써__ 클라이언트 측에서는 javascript를 로딩하는 시간이 줄어들게 되고 
>#### <br>
>#### 두번째 문제는 검색엔진이 javascript를 읽는 것이 아닌, __서버측에서 javascript, html, css를 만들어 컨텐츠를 직접 업로드함으로써__ 검색엔진에 게시글이 걸리게 된다.
>#### 또한 meta 태그를 자유롭게 추가함으로써 SEO를 용이하게 할 수 있다.

<br>

---

<br>

## __2. Next.js가 제공하는 주요 기능__
#### 이렇게 Next.js의 중요한 동작 원리이자 큰 특징을 알아봤고 이외에도 추가적으로 제공하는 Next.js의 기능을 알아보자.

<br>

### __(1) hot reloading__
#### 개발 중 저장되는 코드는 자동으로 새로고침한다.

<br>

### __(2) automatic routing__
#### pages 폴더에 있는 파일은 해당 파일 이름으로(component명이 아님) 자동 라우팅된다.
>#### ex) pages/page1.js -> localhost:3000/page1

<br>

### __(3) single file components__
#### `style.jsx`를 사용함으로써 component 내부에 해당 component만 scope(범위)를 가지는 css를 만들 수 있다.

<br>

### __(4) code splitting__
#### dynamic import를 이용하면 손쉽게 code splitting이 가능하다.
#### __code splitting은 내가 원하는 페이지에서 원하는 javascript와 라이브러리를 렌더링하는 것이다.__
#### 이를 통해 모든 번들이 하나로 묶이지 않고 각각 나뉘어 좀 더 __효율적으로 javascript 로딩 시간을 개선할 수 있다.__

<br>

---

<br>

## __3. Next.js 프로젝트 생성 방법__
### __(1) create-next-app 설치__
#### Next.js를 사용하기 위해서는 `create-next-app`을 설치할 필요가 있다.
#### 아래 명령어를 입력하여 `create-next-app`을 설치하자.
>#### npm install -g create-next-app

<br>

### __(2) 프로젝트 생성__
#### 이제 명령어 `create-next-app`을 이용해 Next.js 프로젝트를 생성해보자.
>#### npx create-next-app my-app

<br>

#### __(2-1) 기본 폴더 구조__
>#### |-- pages
>#### |-- public
>#### |-- styles
>#### |-- .eslintrc.json
>#### |-- next.config.js
>#### |-- package.json
#### 생성된 Next.js 프로젝트 폴더 내 구조를 보면 위와 같다.

<br>

>#### __- pages__
>#### Next.js 프로젝트에서 __화면에 표시될 페이지들을__ 저장하는 폴더
>#### __+ `pages/index.js`__
>#### index(root) 페이지에 해당하는 파일
>#### __+ `pages/_app.js`__
>#### 모든 페이지에 공통으로 사용되는 component | 모든 페이지에 레이아웃 등을 설정할 때 사용
>#### <br>
>#### __- public__
>#### Next.js 프로젝트의 static 파일들(이미지 파일 등)이 저장됨.
>#### <br>
>#### __- styles__
>#### 스타일 파일(css)을 저장하는 폴더
>#### __+ `styles/globals.css`__
>#### 전체 페이지에 적용되는 스타일 파일
>#### <br>
>#### __- `.eslintrc.json`__
>#### 정적 코드 분석 툴인 ESLint 설정에 관한 파일
>#### <br>
>#### __- `next.config.js`__
>#### Next.js 프로젝트 설정에 관한 파일
>#### <br>
>#### __- `package.json`__
>#### 개발에 필요한 라이브러리를 관리하는 파일

<br>

---

<br>

## __4. Next.js 프로젝트 실행__
#### 터미널에 다음 명령어를 입력하면
>#### npm run dev

<br>

#### Next.js 프로젝트가 실행되며 브라우저에 [http://localhost:3000](http://localhost:3000)가 자동으로 열리고 아래와 같은 화면이 보여진다.
![tutorial][tutorial]

[tutorial]: ./img/tutorial.png "tutorial"
#### 위 화면은 Next.js 프로젝트 생성 시 초기 기본 화면이다.

<br>

---

<br>

## __5. Next.js 프로젝트 배포__
#### 이어서 우리가 생성한 Next.js 프로젝트를 배포하고 싶다면 다음과 같은 절차를 거치면 된다.

<br>

### __(1) Git Repository 생성__
#### Git에서 우리가 배포할 Next.js 프로젝트명으로 Repository를 생성한다.

<br>

### __(2) vercel 접속 및 로그인__
#### 배포를 도와주는 [vercel](https://vercel.com/) 페이지에 접속하여 로그인을 한다.

<br>

### __(3) Git Repository에 Next.js 프로젝트 업로드__
#### 터미널에 아래 명령어들을 입력하여 우리가 생성한 Next.js 프로젝트를 Git Repository에 업로드하자.
>#### 1. git init
>#### 2. git add .
>#### 3. git commit -m 'first'
>#### 4. git status
>#### 5. git remote add origin (Git Repository url)
>#### 6. git branch
>#### 7. git push -u origin (6에서 확인한 branch)

<br>

### __(4) vercel과 Git Repository 연결__
![vercel][vercel]

[vercel]: ./img/vercel.png "vercel"
#### 위 화면과 같이 vercel과 Git Repository를 연결하여 import하면 연결된 Next.js 프로젝트가 deploy되어 배포가 완료된다.

<br>


#### 이렇게 간단하게 Next.js가 무엇인지, 그리고 어떻게 프로젝트를 생성하고 배포하는지에 대해 배워봤다.
#### 다음 시간에는 Next.js의 또다른 강점 중 하나인 Typescript를 적용하는 방법에 대해 배워보자.

<br>

---

<br>

[02_Next.js_Typescript](./02_Next.js_Typescript.md)