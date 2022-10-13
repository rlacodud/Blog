[04_Next.js_Sass](./04_Next.js_Sass.md)

---

<br>

# __Next.js에 styled jsx로 css 적용하기__
#### 우리가 이전까지 배운 css 적용 방법은 아래와 같았다.
```js
import HeadInfo from "../components/HeadInfo"
import HomeStyle from '../styles/Home.module.css'
import Link from "next/dist/client/link"

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
>#### __1. css | scss 파일을 생성하고__
>#### __2. 파일을 사용할 component에서 import한다.__
>#### __3. classname으로 적용시킨다.__

<br>

#### 사실상 큰 문제는 아니지만 css 파일을 따로 생성하고 class명 보려고 왔다갔다 하는 수고스러움이 있다고 생각한다.
#### 이를 해결해주는 게 `styled jsx`이다.

<br>

#### 간단하게 아래와 같이 해당 js 파일 내에서 style을 정의해주는 것이다.
```js
<nav>
  <Link href="/">
    <a>Home</a>
  </Link>
  <Link href="/about">
    <a>About</a>
  </Link>
  <style jsx>{`
    nav {
      background-color: tomato;
    }
    a {
      text-decoration: none;
    }
  `}</style>
</nav>
```
#### 부모 Component가 같은 class명을 사용한다고 해도 문제가 없다.
#### 적용 범위가 다르기 때문이다.

<br>

#### 백틱(``) 기호 안에 있기 때문에 변수 또한 사용 가능하다.
```js
<style jsx>{`
  nav {background-color: tomato;}
  a {text-decoration: none;}
  .active {color: ${props.color}}
`}</style>
```

<br>

#### 보통은 해당 component로만 적용 범위가 한정되어지지만 f`ont-family`와 같은 전역적으로 적용되어야 하는 style의 경우, `jsx` 옆에 `global`만 붙이면 된다.

>#### <style jsx global>