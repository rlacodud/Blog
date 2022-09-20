[07_vue_computed_watch](./07_vue_computed_watch.md)

<br>

# __Vue Router__
#### 사용자가 접속한 주소에 맞는 페이지가 보이게 해주는 Router에 대해 알아보자.

<br>

## __1. 프로젝트 생성__
#### 터미널창에 아래 명령어를 입력하여 새로운 vue 프로젝트를 생성하고
```terminal
vue create vue_router
```

<br>

#### `vue-router`를 설치한다.
```terminal
npm i --save vue-router
```

<br>

#### 이어서 src 디렉토리에 `router.js` 파일 생성 후, 아래와 같이 작성하자.
```js
import { createWebHistory, createRouter } from "vue-router";

const routes = [
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
```
#### __참고로 위 방식은 Vue 3 버전의 방식이다.__

<br>

---

<br>

## __2. 페이지 Component 생성__
#### 이어서 각 경로에 접속할 경우, 보여질 페이지를 생성해보자.
#### __component 디렉토리에 Home.vue 파일과 ErrorPage.vue 파일을 생성하여__ 다음과 같이 작성하자.
```html
// Home.vue
<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'Home_'
}
</script>

<style>
</style>
```
```html
// ErrorPage.vue
<template>
  <div>
    <h1>Error Page</h1>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
```

<br>

#### 그 후, router.js 파일에 각 component의 경로를 추가하자.
```js
// router.js
import ErrorPage from './views/ErrorPage.vue';
import Home from './views/Home.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    component: ErrorPage
  }
];
```
>#### 이전에는 우리가 지정하지 않은 경로로 접속할 경우의 경로를 `*`로 작성했으나 __3 버전부터는 `pathMatch`를 사용한다.__

<br>

#### 모든 __추가 라이브러리를 사용할 경우에는 `main.js`에서 등록을__ 해줘야 한다.
```js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
```


<br>

#### 마지막으로 router를 사용할 App.vue 파일 내에 __`router`를 사용하겠다는 의미로 `router-view`__ 태그를 사용하자.
```vue
<template>
<div>
  <router-view/>
</div>
</template>
```

<br>

#### 화면에서 확인해보면 경로에 따라 우리가 만든 페이지가 보이는 걸 확인할 수 있다.
![router][router]

[router]: ./img/router.gif "router"

<br>

#### 이렇게 지정된 경로에 따라 적합한 페이지가 나오게 하는 `router`에 대해 알아봤다.
#### 다음 시간에는 우리가 배운 기본적인 개념을 응용하여 Todo List를 만들어보자.

<br>

[09_vue_todo](./09_vue_todo.md)