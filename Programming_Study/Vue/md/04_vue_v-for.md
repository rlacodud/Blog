[03_vue_state_props](./03_vue_state_props.md)

<br>

# __Vue v-for__

## __1. 프로젝트 생성__
#### __component가 반복될 때__ 이를 효율적으로 구성할 수 있는 방법이 있다.
#### 웹툰 리스트를 보여주는 사이트 예제를 통해 알아보자.

```terminal
vue create v-for
```

<br>

#### App.vue는 우리가 이전에 프로젝트를 생성했을 때의 __초기상태와 동일하게__ 설정한다.

<br>

---

<br>

## __2. 데이터__
#### component에 사용될 webtoon 데이터를 준비한다.
```js
// App.vue
export default {
  name: 'App',
  components: {
  },
  date() {
    return {
      webtoons: [
        {
          name: "햄스터와 그녀",
          link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
          img:
            "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54"
        },
        {
          name: "프롬 스타",
          link: "http://webtoon.daum.net/webtoon/view/fromstar",
          img:
            "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1"
        },
        {
          name: "위대한 로맨스",
          link: "http://webtoon.daum.net/webtoon/view/greatromance",
          img:
            "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085"
        },
        {
          name: "빛나는 손을",
          link: "http://webtoon.daum.net/webtoon/view/Hand",
          img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001"
        }
      ]
    }
  }
}
</script>
```

<br>

#### 위와 같이 해당 __vue 파일 내부에__ `data`로 넣어도 되지만 `data`가 많고 복잡할 경우 js 파일로 따로 생성하여 전달하는 경우도 있다.
```js
// data.js
export default: [
  {
    name: "햄스터와 그녀",
    link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
    img:
      "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54"
  },
  {
    name: "프롬 스타",
    link: "http://webtoon.daum.net/webtoon/view/fromstar",
    img:
      "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1"
  },
  {
    name: "위대한 로맨스",
    link: "http://webtoon.daum.net/webtoon/view/greatromance",
    img:
      "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085"
  },
  {
    name: "빛나는 손을",
    link: "http://webtoon.daum.net/webtoon/view/Hand",
    img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001"
  }
]

// App.vue
<script>
import data from './assets/data';

export default {
  name: 'App',
  data() {
    return {
      data: data
    }
  }
}
</script>
```

<br>

#### import해온 `data`는 __왼쪽에 사용할 이름 | 오른쪽에 import해온 이름을__ 기입함으로써 사용한다.
#### 그러나 보통은 같은 이름을 사용한다.

<br>

---

<br>

## __3. Component 생성__
#### Webtoon.vue 파일을 생성하고 다음과 같이 작성하자.
```vue
<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap"></ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {type: Array, default: () => []}
  }
}
</script>

<style>

</style>
```

<br>

#### 그 후, 해당 `Webtoon` component를 App.vue에서 불러오고 __data `props`를 전달해준다.__
```vue
// App.vue
<template>
<div id="app">
  <Webtoon :items="webtoons"/>
</div>
</template>

<script>
import Webtoon from './components/Webtoon.vue';

export default {
  name: 'App',
  components: {
    Webtoon
  },
}
// ...
```
#### `data`를 사용할 곳에서 바로 import해도 되지만 __여러 곳에서 사용하는 경우에는 루트 vue인 App.vue에서__ import하는 게 좋다.

<br>

---

<br>

## __4. v-for__
#### 이제 `v-for` 디렉티브를 이용하여 리스트를 렌더링해볼텐데 `v-for`는 아래와 같은 방식으로 사용한다.
```html
<div v-for="a in i" :key={a}>{a}</div>
```
>#### __리스트로 렌더링되는 component는 항상 `key`라는 `props`값이 필요하다.__
>#### 그 이유는 가상돔에서 리스트 component에서 변경된 부분을 감지할 때 `key`값을 이용하여 구분하기 때문에 리스트 렌더링 시에는 항상 `key`값이 필요하다.

<br>

>#### __(1) `i`__
>#### __`i`는 해당 리스트가 반복되는 횟수__ 를 의미하므로 숫자를 넣어도 되지만
>#### 주로 `v-for`를 사용할 때에는 데이터 리스트를 렌더링하는 경우가 많으므로 해당 데이터를 넣는다.
>#### <br>
>#### __(2) `a`__
>#### `i`로 데이터를 넣었을 경우, `a`는 마음대로 작명하면 된다.
>#### __`a`는 `i`(데이터 리스트) 의 데이터 하나하나인 배열을__ 의미한다.

<br>

#### 그럼 `v-for`를 이용해 `Webtoon` component를 구성해보자.
```vue
// Webtoon.vue
<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap">
      <li class="item" v-for="(item, idx) in items" :key="{idx}">
        <a :href="item.link" target="_blank">
          <img :src="item.img">
          <span class="tit">제목: {{item.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>
```
#### __태그 내에 변수를 사용할 경우에는 `{{변수명}}`__ 와 같은 형식을 이용한다.

<br>

#### 이어서 `Webtoon` Component의 style을 다음과 같이 정의하면
```html
<style scoped>
  h2 {text-align: center;}
  a {list-style: none; text-decoration: none;}
  li {list-style: none;}
  .wrap {max-width: 450px; width: 100%; margin: 0 auto;}
  .item {border-bottom: 1px solid #ebebeb; margin-bottom: 25px;}
  .tit {display: inline-block; font-size: 18px; font-weight: bold; color: #000; padding: 20px 15px;}
  img {width: 100%; background: #ebebeb; border-radius: 4px;}
</style>
```

<br>

#### 아래와 같은 화면이 나온다.

![v_for][v_for]

[v_for]: ./img/v_for.png "v_for"

<br>

#### 이렇게 `v-for`를 이용해 뤱툰 리스트가 나오는 예제를 만들어봤다.
#### 이 예제 프로젝트에 이어서 다음 시간엔 `v-if`와 `v-show`에 대해 알아보자.

<br>

[05_vue_v-if](./05_vue_v-if.md)