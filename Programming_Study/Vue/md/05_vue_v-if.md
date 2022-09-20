[04_vue_v-for](./04_vue_v-for.md)

<br>

# __Vue v-if__
## __1. v-if__
#### `v-if`의 사용법은 우리가 javascript 내에서 사용하던 `if`의 사용방법과 비슷한데 아래와 같다.
```html
<div v-if="true">true</div>
<div v-if="false">false</div>>
```
#### 즉 __`v-if`는 조건의 결과가 참이 아니면 렌더링을 하지 않는다.__

<br>

#### `v-else` 또한 `v-if`와 함께 이용할 수 있는데 __앞의 조건이 성립하지 않는다면 `else` 조건이 동작한다.__
```html
<div v-if="false">true</div>
<div v-else>false</div>
```

<br>

---

<br>

## __2. v-show__
#### `v-if`와 결과는 같지만 동작하는 방식이 다른 `v-show` 또한 있다.
#### `v-if`의 경우, 조건이 성립하지 않을 경우, __태그 자체를 렌더링하지 않지만 `v-show`는 렌더링은 하되, `display: none;` 처리를 한다.__

<br>

#### 저번 웹툰 페이지 프로젝트에 이어 __`v-if` 혹은 `v-show`를 이용하여 신작에는 N 딱지가 붙도록 해보자.__
#### 이를 위해 우선 업데이트 여부를 확인할 수 있는 data를 추가해야 한다.
```js
data() {
  return {
    webtoons: [
      {
        name: "햄스터와 그녀",
        link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
        img:
          "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",
          isUpdate: true
      },
      {
        name: "프롬 스타",
        link: "http://webtoon.daum.net/webtoon/view/fromstar",
        img:
          "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1",
          isUpdate: true
      },
      {
        name: "위대한 로맨스",
        link: "http://webtoon.daum.net/webtoon/view/greatromance",
        img:
          "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085",
          isUpdate: false
      },
      {
        name: "빛나는 손을",
        link: "http://webtoon.daum.net/webtoon/view/Hand",
        img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001",
        isUpdate: false
      }
    ]
  }
}
```

<br>

#### 그 후 `v-if`를 이용하여 __`isUpdate`가 true인 웹툰 리스트에만__ N 태그가 보이도록 한다.
```html
<template>
  <div>
    <h2>Webtoon</h2>
    <ul class="wrap">
      <li class="item" v-for="(item, idx) in webtoons" :key="{idx}">
        <a :href="item.link" target="_blank">
          <img :src="item.img">
          <span class="tit">제목: {{item.name}}</span>
        </a>
        <span class="tag" v-if="webtoons.isUpdate">N</span>
      </li>
    </ul>
  </div>
</template>
```

<br>

#### 이제 N 태그의 모양을 꾸며보자.
```html
<style scoped>
  h2 {text-align: center;}
  a {list-style: none; text-decoration: none;}
  li {list-style: none;}
  .wrap {max-width: 450px; width: 100%; margin: 0 auto;}
  .item {position: relative; border-bottom: 1px solid #ebebeb; margin-bottom: 25px;}
  .tit {display: inline-block; font-size: 18px; font-weight: bold; color: #000; padding: 20px 15px;}
  img {width: 100%; background: #ebebeb; border-radius: 4px;}
  .tag {position: absolute; top: 10px; left: 10px; padding: 5px 30px; color: #fff; border-radius: 4px; background: #fc2332; font-weight: bold;}
</style>
```

<br>

#### 화면을 보면 __`isUpdate`가 true인 웹툰에만__ N 태그가 붙은 걸 알 수 있다.
![v-if][v-if]

[v-if]: ./img/v-if.png "v-if"

<br>

#### 이렇게 조건에 따라 태그의 렌더링 여부를 결정하는 `v-if`와 `display:none;`을 하는 `v-show`에 대해 알아봤다.
#### 다음 시간에는 data-binding을 하는 방법에 대해 알아보자.

<br>

[06_vue_data_binding](./06_vue_data_binding.md)