[05_vue_v-if](./05_vue_v-if.md)

<br>

# __Vue Data Binding__
## __1. 단방향 데이터__
#### 이번에는 양방향 데이터(Two way biding) 바인딩에 대해 알아볼텐데 양방향 데이터를 알아보기 전에 단방향 데이터에 대해 먼저 알아보자.

<br>

#### 우리가 이전에 Webtoon 예제를 만들면서 `v-for`를 이용하여 리스트를 렌더링하고 name, img, link 등의 요소를 component에서 표시했다.
#### 이는 양쪽(vue 인스턴스와 component)에서 접근하는 것이 아닌, __vue 인스턴스의 값을 component에게 준 것뿐이기__ 때문에 단방향 데이터 바인딩이라고 한다.

<br>

---

<br>

## __2. 양방향 데이터__
#### 양방향 데이터 바인딩은 Vue 인스턴스와 component가 __서로의 데이터에 접근하는 것을__ 말한다.
#### vue에서는 __`v-model` 디렉티브를 이용하여 양방향 데이터 바인딩을 지원한다.__

<br>

#### 양방향 데이터 바인딩의 대표적인 예제는 폼을 다루는 것이다.
#### `props`로 내려받은 값은 바로 `v-model`에서 사용할 수 없으므로 __`v-model`은 `state`값을 꼭 사용해야 한다.__

<br>

### __(1) input__
#### 예제를 통해 데이터 바인딩 방법에 대해 알아보자.
#### 아래 명령어를 통해 새로운 프로젝트를 생성하고
```terminal
vue create data_binding
```

<br>

#### App.vue를 다음과 같이 작성해보자.
```html
<template>
  <div>
    <h1>{{title}}</h1>
    <input v-model="title">
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: ""
    }
  },
}
</script>

<style>
</style>
```
#### 이후 페이지에서 `input`창에 값을 입력할 때마다 자동으로 `h1` 태그 내에 해당값이 나타난다.
![input][input]

[input]: ./img/input.gif "input"
#### 이는 아래와 같은 흐름으로 이루어진다.
>#### 1. `input`t에 값이 입력된다.
>#### 2. `input`의 값을 바탕으로 title `state`가 업데이트된다.
>#### 3. 업데이트된 `state`값이 title에 표시된다.

<br>

### __(2) checkBox__
#### 체크박스 또한 `input`과 같은 방식으로 구성할 수 있다.
#### App.vue를 다음과 같이 수정해보자.
```html
// App.vue
<template>
  <!-- <div>
    <h1>{{title}}</h1>
    <input v-model="title">
  </div> -->
  <div>
    <h2>웹툰</h2>
    <div>
      <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoon"/>
      <label for="프롬스타">프롬스타</label>
      <input type="checkbox" id="햄스터와 그녀" value="햄스터와 그녀" v-model="checkedWebtoon"/>
      <label for="햄스터와 그녀">햄스터와 그녀</label>
      <input type="checkbox" id="위대한 로맨스" value="위대한 로맨스" v-model="checkedWebtoon"/>
      <label for="위대한 로맨스">위대한 로맨스</label>
      <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoon"/>
      <label for="아귀">아귀</label>
      <br/>
      <span>찜한 웹툰: {{checkedWebtoon}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: "",
      checkedWebtoon: [],
    }
  },
}
</script>
```

<br>


#### 이 또한 우리가 선택한 checkbox의 내용을 읽어오는 걸 볼 수 있다.

<br>

![checkbox][checkbox]

[checkbox]: ./img/checkbox.gif "checkbox"

<br>

### __(3) radioBox__
#### 이번엔 `radioBox`에 적용해보자.
```html
<template>
  <!-- <div>
    <h1>{{title}}</h1>
    <input v-model="title">
  </div> -->

  <!-- <div>
    <h2>웹툰</h2>
    <div>
      <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoon"/>
      <label for="프롬스타">프롬스타</label>
      <input type="checkbox" id="햄스터와 그녀" value="햄스터와 그녀" v-model="checkedWebtoon"/>
      <label for="햄스터와 그녀">햄스터와 그녀</label>
      <input type="checkbox" id="위대한 로맨스" value="위대한 로맨스" v-model="checkedWebtoon"/>
      <label for="위대한 로맨스">위대한 로맨스</label>
      <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoon"/>
      <label for="아귀">아귀</label>
      <br/>
      <span>찜한 웹툰: {{checkedWebtoon}}</span>
    </div>
  </div> -->

  <div>
    <h2>성별</h2>
    <input type="radio" id="male" value="male" v-model="gender"/>
    <label for="male">남</label>
    <br/>
    <input type="radio" id="female" value="female" v-model="gender"/>
    <label for="female">여</label>
    <br/>
    <span>당신의 성별을 알려주세요: {{gender}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: "",
      checkedWebtoon: [],
      gender: ""
    }
  },
}
</script>
```

<br>

![radiobox][radiobox]

[radiobox]: ./img/radiobox.gif "radiobox"

<br>

### __(4) selectBox__
```html
<template>
  <div>
    <h2>선호 장르</h2>
    <select v-model="category">
      <option disabled value>선택해주세요</option>
      <option>로맨스</option>
      <option>호러</option>
      <option>스릴러</option>
    </select>
    <span>선택: {{category}}</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      title: "",
      checkedWebtoon: [],
      gender: "",
      category: ""
    }
  },
}
</script>
```

<br>

![selectbox][selectbox]

[selectbox]: ./img/selectbox.gif "selectbox"

---

<br>

#### 데이터 바인딩은 Vue 프로젝트에서 매우 중요한 개념이기에 예제는 쉬울지 몰라도 잘 이해해서 넘어가야 한다.
#### 다음 시간에는 data를 다루는 데 유용한 Computed와 Watch에 대해 알아보자.

<br>

[07_vue_computed_watch]()