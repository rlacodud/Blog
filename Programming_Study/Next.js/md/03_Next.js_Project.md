[02_Next.js_Typescript](./02_Next.js_Typescript.md)

---

<br>

# __Next.js 연습 프로젝트__
#### 직접 Next.js를 이용해 독후감 사이트 프로젝트를 생성해보며 Next.js의 동작원리와 구조 등을 이해해보자.
#### 우리가 만들 독후감 사이트의 구조는 아래와 같다.
>#### |-- 메인(글 목록)
>#### |--- 글 자세히 보기
>#### |-- 글 쓰기

<br>

## __1. 프로젝트 생성__
#### 다음 명령어를 통해 `next-book`라는 이름의 Next.js 프로젝트를 생성해보자.
>#### npx create-next-app next-book

<br>

#### 여기서 package.json 파일의 script 부분을 확인해보면 다음과 같은 내용이 작성되어 있는데

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

#### 각 코드의 기능은 아래와 같다.
>#### __- `dev`__
>#### 개발모드를 띄우는 명령어
>#### __- `build`__
>#### 개발한 내용을 build하여 프로덕션(배포) 준비
>#### __- `start`__
>#### 프로덕션(배포) 모드로 구동
>#### __- `lint`__
>#### 코드의 불필요한 부분을 정리

<br>

---

<br>

## __2. component__
### __(1) Navigation 생성__
#### 우선 우리는 간단한 Navigation 레이아웃을 잡아볼텐데
#### Navigation과 같이 __여러 페이지에서 반복적으로 사용되는 부분의 경우 Component로 여겨__ 별도로 components 폴더를 생성하고 해당 디렉토리에서 작업한다.

<br>

#### 루트 디렉토리에 components 폴더를 생성하고 하위에 Nav.js 파일을 생성하자.
```js
// components/Nav.js

const Nav = () => {
  return (
    <div>
      
    </div>
  )
}

export default Nav
```
#### 위 구조가 Next.js 파일들의 기본 구조인데 React의 구조와 동일하나 React를 따로 import하지 않아도 된다는 장점이 있다.

<br>

#### __(1-1) Link__
#### Next.js에서는 네비게이트 시 `Link`를 사용해야 한다. 이 때 원래 a에 들어갈 주소 `href`를 `Link` 태그에 삽입해준다.
```js
// components/Nav.js

import Link from 'next/link';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/write'>
            <a>Write</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
```

<br>

### __(2) Layout 생성__
#### 우리는 [01_Next.js](./01_Next.js.md)에서 __`pages/_app.js`가 모든 페이지에 레이아웃 등을 설정할 때 사용__ 한다고 배웠다.
#### _그러나 대부분 사람들은 `_app.js` 파일이 너무 커지고 복잡해지는 걸 원치 않고 이런 게 하나의 패턴이라고 한다._

<br>

#### 그러므로 앞서 생성한 `Nav` Component를 `Layout`이라는 새로운 component에 적용시키며 페이지의 기본 레이아웃을 잡아주자.
```js
// components/Layout.js

import Nav from "./Nav"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout
```
#### `Nav` component를 사용하기 위해 import한 뒤
#### `Nav` 아래로 자식 component 요소들이 존재할 예정이기에 `children`이라는 이름의 props로 받아와 삽입하는 구조로 잡아준다.

<br>

### __(3) HeadInfo 생성__
#### 우리는 Next.js의 강점으로 SEO를 언급했다.
#### SEO를 위해 페이지의 `head`를 직접 수정할텐데 이 또한 각 페이지마다 반복적으로 적용되는 내용이므로 보통 component로 구분한다.

<br>

```js
// components/HeadInfo.js

import Head from "next/head"

const HeadInfo = ({ title, keyword, contents }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta keyword={keyword}></meta>
        <meta contents={contents}></meta>
      </Head>
    </div>
  )
}

HeadInfo.defaultProps = {
  title: 'My Book Blog',
  keyword: 'Book Blog Next js',
  contents: 'practice Next js'
}

export default HeadInfo
```
#### (1) 우선 next에서 제공하는 기본 head 구조를 가져오기 위해 `Head` component를 import해주고
#### (2) `Head`가 사용되는 자식 요소로부터 받아와서 변경될 수도 있는 title, keyword, contents와 같은 경우에는 props로 받아와 동적으로 적용될 수 있도록 한다.
#### (3) 자식 요소로부터 받아온 값이 없을 경우를 대비하여 기본값 또한 설정해준다.

<br>

#### 이렇게 생성한 `HeadInfo`를 적용하기 위해 pages 디렉토리의 index.js의 기존 내용을 전부 삭제하고 `HeadInfo`를 삽입하자.
```js
import HeadInfo from "../components/HeadInfo"

export default function Home() {
  return (
    <div>
      <HeadInfo/>
    </div>
  )
}
```

<br>

#### 페이지의 `title`을 보면 My Book Blog로 `title`이 적용된 걸 볼 수 있다.

<br>

### __(4) `_app.js` 적용___
#### 이제 `_app.js`에 레이아웃을 적용할 차례이다.
```js
// pages/_app.js

import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
```
#### 생성한 `Layout` component를 import해주고 기존에 있던 __`<Component {...pageProps} />`를 `Layout` component로 감싸준다.__

<br>

#### 그리고 화면을 보면 상단에 우리가 만든 네비게이션이 보인다.
![nav][nav]

[nav]: ./img/nav.png "nav"

#### 좀 더 디자인을 적용하기 위해 css를 생성하고 적용해보자.

<br>

---

<br>

## __3. style 적용__
### __(1) module.css 생성__
#### styles 디렉토리에 `Nav.module.css` 파일을 생성하고 다음과 같이 작성하자.
```css
/* styles/Nav.module.css */

.nav {padding: 0.5rem 1rem; background: #000;}
.nav ul {display: flex;}
.nav li {margin-right: 1rem; color: #fff;}
```

<br>

>#### 여기서 주의해야 할 건 `global.css`를 제외한 __모든 css 파일에는 `module.`을 붙여야 한다는 것이다.__

<br>

#### 그리고 모든 ul의 `list-style`을 없애기 위해 __모든 파일에 적용되는 `global.css` 파일에__ 아래 내용을 추가한다.
```css
/* styles/global.css */

ul {list-style: none;}
```

<br>

### __(2) module.css import__
#### style을 적용시킬 `Nav` component에 `Nav.module.css`를 import하는데 이 때 __import해오는 이름은 임의로 작명하면 된다.__
```js
// components/Nav.js

import navStyles from '../styles/Nav.module.css';
```

<br>

#### 불러온 module.css를 적용시킬 때에는 클래스명을 텍스트로 적는 것이 아니라  __javascript의 객체에서 속성을 불러오는 형식으로__ 작성한다.
```js
// components/Nav.js

return (
  <nav className={navStyles.nav}>
    <ul>
```

<br>

>#### __만약 여러개의 클래스를 적용해야 할 때에는?__
>#### 그런 때에는 __문자열로__ 적용시키면 된다.
>#### <nav className={`${navStyles.link} ${navStyles.nav}`}>

<br>

#### 화면을 보면 다음과 같이 style이 잘 적용된 것을 확인할 수 있다.
![nav_style][nav_style]

[nav_style]: ./img/nav_style.png "nav_style"

<br>

---

<br>

## __4. 데이터 받아오기__
### __(1) Write 생성__
#### 이어서 네비게이션의 Write 클릭 시 이동되는 `/write` 경로의 페이지를 생성하고 다음과 같이 `HeadInfo`의 `title`을 넘겨주자.
```js
// pages/write.js

import HeadInfo from "../components/HeadInfo"

const write = () => {
  return (
    <div>
      <HeadInfo title="Book Blog Write"/>
      write
    </div>
  )
}

export default write
```

<br>

### __(2) 데이터 연결__
#### 이제 메인 페이지에서 게시글 목록을 보여줄 것이기에 글 데이터를 받아오는 작업을 해볼텐데 __[jsonplaceholder](https://jsonplaceholder.typicode.com/) 사이트에 무료로 오픈되어 있는 API가 있다.__
#### 이 중 우리는 게시글 API인 https://jsonplaceholder.typicode.com/posts 해당 링크를 이용하여 데이터를 받아오는 방법을 알아볼 것이다.

<br>

#### 메인 페이지에서 보여질 것이므로 index.js 파일에서 작업을 진행하자.
```js
// pages/index.js

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();

  return {
    props: {
      posts
    },
    revalidate: 20
  }
}
```
#### __`getStaticProps`는 Next.js에서 권장하는 페이지 정적생성 방법인데 기본적으로 page에서 외부 데이터를 가져올 때 사용된다.__

<br>

#### 기본 구조는 위와 같으며 과정은 아래와 같다.
>#### (1) `fetch`를 통해 데이터를 가져오고
>#### (2) 이를 json 형태로 posts 변수에 데이터 내용을 담는다.
>#### (3) posts 변수를 외부에서도 사용 가능하도록 props로 return하는데
>#### (4) `revalidate`를 통해 20초 지난 시점부터 언제든 접속이 일어나면 새롭게 data를 받아서 재정의(업데이트)한다.

<br>

#### 받아온 data를 화면에 보여주기 위해 `posts`를 props로 return문 안에 `map` 함수를 통해 구현한다.
```js
// pages/index.js

export default function Home({posts}) {
  return (
    <div>
      <HeadInfo/>
      <h1 className={HomeStyle.title}>Welcome to My Book Blog</h1>
      <ul className={HomeStyle.list}>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
```
#### 각 게시글 클릭 시 해당 게시글 자세히보기 페이지로 넘어갈 수 있도록 `Link` 태그 또한 달아준다.

<br>

#### style 또한 정의해주는데 Home.module.css의 기존 내용을 전부 지우고 아래와 같이 정의한다.
```css
.title {text-align: center; margin-bottom: 50px;}
.list {margin: 0 auto; max-width: 1500px;}
.list li {padding: 1rem 0; border-bottom: 1px solid #eee;}
```

<br>

#### 그럼 아래와 같은 화면이 완성된다.
![index][index]

[index]: ./img/index.png "index"

<br>

---

<br>

## __5. 자세히 보기 페이지__
#### 이어서 각 게시글 클릭 시 해당 게시글 자세히보기 페이지를 제작해볼텐데
#### pages 디렉토리에 posts 폴더를 생성하고 하위애 [id] 폴더를 생성한 뒤 index.js 파일을 생성해보자.

<br>

>#### |-- pages
>#### |--- posts
>#### |---- [id]
>#### |----- index.js
#### 위와 같은 형태를 __동적 라우팅이라고 하는데 동적 라우팅은 `[변수].js`파일을 통해__ 설정할 수 있다.
#### `index.js`로 `/posts/${post.id}`의 경로에서 __보여질 화면의 기본 틀을 잡는다__ 고 이해하면 된다.

<br>

#### 우리가 위에서 pages/index.js 파일에 각 게시물 `Link`를
>#### <Link href={`/posts/${post.id}`}>
#### 위와 같이 설정했기에 `posts/[id].index.js`가 반응하여 화면에 보여지는 것이다.

<br>

### __(1) `getStaticProps` && `getStaticPaths`__
#### 그럼 이제 각 게시글들이 보여지도록 할텐데 이를 위해 우선 우리는 url 상에서의 `posts/` 뒤의 id값에 대한 설정을 해야 한다.
#### 이는 `getStaticPaths`를 이용해볼 것이다.
```js
// pages/posts/[id]/index.js

export const getStaticProps = async (context) => {
  const { id } = context.params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_end=10')
  const posts = await res.json();
  const ids = posts.map(post => post.id)
  const paths = ids.map(id => {
    return {
      params: {id: id.toString()}
    }
  })

  return {
    paths,
    fallback: false
  }
}
```
#### 여기서 `getStaticPaths`의 기능은 크게 두가지로 볼 수 있다.
>#### 1. 현재 url의 id값 알아오기
>#### 2. 연결되는 url의 제한 설정

<br>

#### __`fallback: false`를 통해 현재 API에 존재하는 post의 id값 내에서만__ url이 설정되었을 때(ex) /post/1) 에러없이 화면이 보여지게 하고 __그 외의 경우에는 404 에러가 뜨도록 한다.__
#### 이어서 `getStaticPaths`를 통해 얻은 url id의 정보를 `getStaticProps`에 context로 넘겨 __해당 id를 가진 post의 내용만 받아올 수 있도록 했다.__

<br>

#### 받아온 해당 게시글의 데이터를 props로 받아와 해당 게시글의 title이 보여지도록 한다.
```js
// pages/posts/[id]/index.js

const index = ({ post }) => {
  const { title } = post

  return (
    <div>
      <HeadInfo/>
      <h2>{title}</h2>
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </div>
  )
}
```

<br>

---

<br>

## __6. Write 페이지__
#### 마지막으로 write 페이지에 `react-quill`을 이용해서 글을 작성할 수 있는 폼을 추가해주자.
#### `react-quill`은 React 텍스트 에디터로 Desktop/Mobile을 모두 지원하는 Rich Text Editor 중 하나다.

<br>

### __(1) `react-quill` 설치__
#### 우선 패키지를 설치하기 위해 터미널에 아래 명령어를 입력하자.
>#### yarn add react-quill

<br>

#### 패키지 설치가 끝나면 에디터를 사용할 write.js에 `quill style`을 import하자.
```js
// pages/write.js

import 'react-quill/dist/quill.snow.css';
``` 

<br>

#### 여기서 `Quill`은 `SSR`이 지원되지 않기에 단순히 static import하면 아래와 같은 에러가 뜬다.
>#### document is not defined

<br>

### __(2) `dynamic import()`__
#### __document가 정의되기 전에 `react-quill`이 로드되고 정의되지 않은 document를 조작하려고 해서 에러가 발생하는 것이다.__
#### 이러한 문제를 해결하기 위해 Next.js는 javascript용 ES2020 __`dynamic import()`를 지원하는데, 모듈을 동적으로 import할 수 있도록 한다.__

<br>

#### 즉, 첫 페이지 진입 시에 최소한으로 필요한 코드만 다운받고 __사용자가 특정 페이지나 위치에 도달할 때마다 코드를 로드함으로써 첫 페이지의 초기 성능 또한 올리는 것이다.__
#### 이런 방식을 __lazy-load(게으른 로딩)__ 이라고 한다.

<br>

#### 아래와 같이 `dynamic`을 import하고
```js
// pages/write.js

import dynamic from 'next/dynamic'
```

<br>

#### `dynamic`을 이용해서 `react-quill`을 `SSR`이 아닌 상태로 import하고 테마를 설정해준다.
```js
// pages/write.js

const write = () => {
  const QuillWrapper = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>
  })
  return (
    <div>
      <HeadInfo/>
      <QuillWrapper theme="snow"/>
    </div>
  )
}
```

<br>

#### 그럼 아래와 같이 텍스트 에디터가 나타난다.
![write][write]

[write]: ./img/write.png "write"

#### 이렇게 간단하게 Next.js가 동작하는 기본 구조와 원리에 대해 알아봤다.
#### 다음 시간에는 Next.js 프로젝트에 sass를 적용하는 방법에 대해 배워보자.

<br>

---

[04_Next.js_Sass](./04_Next.js_Sass.md)