[08_vue_router](./08_vue_router.md)

<br>

# __Vue Todo__
## __1. 프로젝트 생성__
#### 터미널에 다음 명령어를 입력하여 새로운 프로젝트를 생성해보자.
```terminal
vue create todo 
```

<br>

#### 먼저 Todo 페이지의 Component 구조를 알아보자.
>#### __`Header.vue`: input | 사용자가 '할 일'을 입력하여 추가__
>#### __`Todo.vue`: Todo List | 추가된 '할 일'들의 리스트를 보여줌__
>#### __`Footer.vue`: Filter | '할 일'의 수를 보여줌__

<br>

#### 잘 보면 여기서는 __3개의 Component가 같은 데이터를 공유한다.__
#### 바로 '할 일' 이다.

<br>

#### 그러나 vue에서는 기본적으로 __형제 Component끼리 데이터의 공유가 불가한데__ 이런 때에는 형제 Component를 __감싸는 Component에게 data를 올리면__ 된다.

<br>

---

<br>

## __2. 기본 구조__
### __(1) main.css__
#### 우선 전체적인 구조의 style을 정의하기 위해 assets 디렉토리에 `main.css` 파일을 생성한 후 다음과 같이 입력하자.
```css
/* assets/main.css */
html, body {margin: 0; padding: 0;}
button {margin: 0; padding: 0; border: 0; background: none; font-size: 100%;vertical-align: baseline; font-family: inherit; font-weight: inherit; color: inherit; -webkit-appearance: none; appearance: none; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
body {font: 14px "Helvetica Neue", Helvetica, Arial, sans-serif; line-height: 1.4em; background: #f5f5f5; color: #4d4d4d; min-width: 230px; max-width: 550px; margin: 0 auto; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-weight: 300;}
:focus {outline: 0;}
.hidden {display: none;}
.todoapp {background: #fff; margin: 130px 0 40px 0; position: relative; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);}
.todoapp input::-webkit-input-placeholder {font-style: italic; font-weight: 300; color: #e6e6e6;}
.todoapp input::-moz-placeholder {font-style: italic; font-weight: 300; color: #e6e6e6;}
.todoapp input::input-placeholder {font-style: italic; font-weight: 300; color: #e6e6e6;}
.new-todo,
.edit {position: relative; margin: 0; width: 100%; font-size: 24px; font-family: inherit; font-weight: inherit; line-height: 1.4em; border: 0; color: inherit; padding: 6px; border: 1px solid #999; box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2); box-sizing: border-box; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
.new-todo {padding: 16px 16px 16px 60px; border: none; background: rgba(0, 0, 0, 0.003); box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);}
.clear-completed,
html .clear-completed:active {float: right; position: relative; line-height: 20px; text-decoration: none; cursor: pointer;}
.clear-completed:hover {text-decoration: underline;}
.info {margin: 65px auto 0; color: #bfbfbf; font-size: 10px; text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5); text-align: center;}
.info p {line-height: 1;}
.info a {color: inherit; text-decoration: none; font-weight: 400;}
.info a:hover {text-decoration: underline;}
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .toggle-all,
  .todo-list li .toggle {
    background: none;
  }
  .todo-list li .toggle {
    height: 40px;
  }
}
@media (max-width: 430px) {
  .footer {
    height: 50px;
  }
  .filters {
    bottom: 10px;
  }
}
```

<br>

### __(2) Header__
#### 이어서 components 디렉토리에 `Header.vue` 파일을 아래와 같이 생성한다.
#### 위에서 간단하게 정리했듯 `Header` Component는 __사용자에게 Todo 항목을 입력받아 생성한다.__
```html
<!-- components/Header.vue  -->
<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?">
  </header>
</template>

<script>
export default {};
</script>

<style>
  h1 {position: absolute; top: -155px; width: 100%; font-size: 100px; font-weight: 100; text-align: center; color: rgba(175, 47, 47, 0.15); -webkit-text-rendering: optimizeLegibility; -moz-text-rendering: optimizeLegibility; text-rendering: optimizeLegibility;}
</style>
```

<br>

### __(3) Todo__
#### 같은 디렉토리에 Todo.vue 파일을 아래와 같이 생성한다.
#### `Todo` Component는 __Todo list들을 보여주는 곳으로, 추후 기능 추가로 제거 / 수정이 가능하다.__
```html
<!-- components/Todo.vue -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li class="todo">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>Hello</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text">
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style>
  .main {position: relative; z-index: 2; border-top: 1px solid #e6e6e6;}
  .toggle-all {width: 1px; height: 1px; border: none; opacity: 0; position: absolute; right: 100%; bottom: 100%;}
  .toggle-all + label {width: 60px; height: 34px; font-size: 0; position: absolute; top: -52px; left: -13px; -webkit-transform: rotate(90deg); transform: rotate(90deg);}
  .toggle-all + label:before {content: ">"; font-size: 22px; color: #e6e6e6; padding: 10px 27px 10px 27px;}
  .toggle-all:checked + label:before {color: #737373;}
  .todo-list {margin: 0; padding: 0; list-style: none;}
  .todo-list li {position: relative; font-size: 24px; border-bottom: 1px solid #ededed;}
  .todo-list li:last-child {border-bottom: none;}
  .todo-list li.editing {border-bottom: none; padding: 0;}
  .todo-list li.editing .edit {display: block; width: calc(100% - 43px); padding: 12px 16px; margin: 0 0 0 43px;}
  .todo-list li.editing .view {display: none;}
  .todo-list li .toggle {text-align: center; width: 40px; height: auto; position: absolute; top: 0; bottom: 0; margin: auto 0; border: none; -webkit-appearance: none; appearance: none;}
  .todo-list li .toggle {opacity: 0;}
  .todo-list li .toggle + label {background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: center left;}
  .todo-list li .toggle:checked + label {background-image: url("data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E");}
  .todo-list li label {word-break: break-all; padding: 15px 15px 15px 60px; display: block; line-height: 1.2; transition: color 0.4s;}
  .todo-list li.completed label {color: #d9d9d9; text-decoration: line-through;}
  .todo-list li .destroy {display: none; position: absolute; top: 0; right: 10px; bottom: 0; width: 40px; height: 40px; margin: auto 0; font-size: 30px; color: #cc9a9a; margin-bottom: 11px; transition: color 0.2s ease-out;}
  .todo-list li .destroy:hover {color: #af5b5e;}
  .todo-list li .destroy:after {content: "×";}
  .todo-list li:hover .destroy {display: block;}
  .todo-list li .edit {display: none;}
  .todo-list li.editing:last-child {margin-bottom: -1px;}
</style>
```

<br>

### __(3) Footer__
#### 같은 디렉토리에 Footer.vue 파일을 다음과 같이 생성하는데
#### `Footer` Component는 __모든 todo, 완료한 todo, 진행 중인 todo 항목들을 말그대로 구분해서 보여준다.__
```html
<!-- components/Footer.vue  -->
<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>10</strong> items left
    </span>
    <ul class="filters">
      <li>
        <a href="javascript:;" class="selected">Done</a>
      </li>
    </ul>
    <button class="clear-completed" style="display: none;">Clear completed</button>
  </footer>
</template>

<script>
export default {};
</script>

<style>
  .footer {color: #777; padding: 10px 15px; height: 20px; text-align: center; border-top: 1px solid #e6e6e6;}
  .footer::before {content: ''; position: absolute; right: 0; bottom: 0; left: 0; height: 50px; overflow: hidden;   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);}
  .todo-count {float: left; text-align: left;}
  .todo-count strong {font-weight: 300;}
  .filters {margin: 0; padding: 0; list-style: none; position: absolute; right: 0; left: 0;}
  .filters li {display: inline;}
  .filters li a {color: inherit; margin: 3px; padding: 3px 7px; text-decoration: none; border: 1px solid transparent; border-radius: 3px;}
  .filters li a:hover {border-color: rgba(175, 47, 47, 0.1);}
  .filters li a.selected {border-color: rgba(175, 47, 47, 0.2);}
</style>
```

<br>

#### 이제 필요한 Component를 모두 생성하였으니 App.vue에서 불러와보자.
```html
<!-- App.vue  -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header/>
      <Todo/>
      <Footer/>
    </section>
  </div>
</template>

<script>
import "./assets/css/main.css";

import Header from "./components/Header";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    Todo,
    Footer
  }
};
</script>

<style>
</style>
```

<br>

---

<br>

## __3. Read__
#### CRUD 기능을 하나씩 만들어볼텐데, 우선 기본인 Read부터 구현해보자.

<br>

### __(1) Todo 불러오기__
#### 앞서 말했듯 __할 일은 모든 Component에서 공유 가능하여야 하므로 부모인 App.vue가 가지도록__ 한다.
```js
// App.vue
  data() {
    return {
      todos: [
        {
          id: new Date(),
          text: 'Vue 공부',
          isDone: true
        },
        {
          id: new Date(),
          text: '운동',
          isDone: false
        }
      ],
    }
  },
```
>#### 여기서 __`id`는 각 todo가 고유한 값을 가지도록__ 하기 위해 생성된 시간으로 하고
>#### `text`는 말 그대로 할 일의 내용,
>#### `isDone`은 완료 여부를 뜻한다.

<br>

#### 할 일 목록은 `Todo` Component에서 보여주므로 __`Todo` Component에게 `todos`를 props로 넘겨준다.__
```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header/>
      <Todo :todos="todos"/>
      <Footer/>
    </section>
  </div>
</template>

<!-- components/Todo.vue  -->
<script>
export default {
  props: {
    todos: { type: Array, default: () => [] }
  }
};
</script>
```

<br>

#### 받은 props는 __`v-for`를 이용하여 list로 그려준다.__
```html
<!-- components/Todo.vue  -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li class="todo" v-for="({ id, text, isDone }, idx) in todos" :key="idx">
        <div class="view">
          <input class="toggle" type="checkbox">
          <label>{{ text }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text">
      </li>
    </ul>
  </section>
</template>
```
#### __`{ id, text, isDone }` 와 같은 방식은 해체할당자__ 라고 한다.

<br>

#### 여기서 `id`와 `isDone`은 정의해놓고 아직 사용하지 않아 에러가 뜰텐데
#### 이 경우, 당장 확인하고 싶다면 아무 곳에나 `id`나 `isDone`을 사용하면 된다.

<br>

### __(2) condition에 따른 class 처리__
#### __`isDone`의 값에 따라 Todo의 style이 달라지도록__ 해야 하는데 이를 위해 아래와 같이 수정해보자.
```html
<!-- components/Todo.vue -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li
        :class="{todo: true, completed: isDone }"
        v-for="({ id, text, isDone }, idx) in todos"
        :key="idx"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="isDone">
          <label>{{ text }}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" type="text">
      </li>
    </ul>
  </section>
</template>
```
>#### `:class="{todo: true, completed: isDone }"`를 보면
>#### __`todo`라는 class는 true로, 항상 적용이 되도록__ 하였고
>#### __`completed`는 `isDone`의 값에 따라__ 적용이 되도록 하였는데 해당 Todo의 `isDone`이 true이면 붙는 거고 false이면 붙지 않도록 한 것이다.

<br>

#### 코드가 잘 작성되었다면 아래와 같은 화면이 보일 것이다.
![basic][basic]

[basic]: ./img/basic.png "basic"

<br>

---

<br>

## __4. Create__
#### 이제 __새로운 Todo를 생성할 수 있도록__ 기능을 구현해보자.
#### Todo data 추가는 `Header`의 input에서 일어나지만 __모든 data를 App.vue가 가지고 있기__ 때문에 __data를 다루는 모든 함수는 App.vue에__ 위치하게 된다.
```js
// App.vue
methods: {
  insertTodo(text){
    this.todos = [
      ...this.todos,
    {
      id: new Date().getTime(),
      text,
      isDone: false
    }
    ]
  },
}
```
>#### __`...this.todos`는 `spread` 문법으로, 기존의 배열을 복사하는__ 효과를 가진다.
>#### 늘 강조하는 것이지만 __기존 data를 보존한 상태로__ 수정하는 것이 중요하다.

<br>

#### `id`와 `isDone`은 고정된 값이고 __`insertTodo`는 text를 매개변수로__ 받고 있는데 이는 사용자가 입력한 내용만을 받아와 생성하기 때문이다.
#### 이 text값은 `Header`에 있는 `input`의 value값으로, __부모와 자식 사이에 이벤트를 이용하여 data를 주고받을 수 있어야 한다.__

<br>

#### 이런 때 필요한 게 `on`, `emit`인데 __부모는 `on`을 이용하여 custom event를 등록__ 하고 __자식은 `emit`을 이용하여 해당 이벤트를 발생시킨다.__

<br>


```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
      <Todo :todos="todos" />
      <Footer />
    </section>
  </div>
</template>

<!-- components/Todo.vue -->
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      v-model="text"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>
```
#### `v-model`로 text를 등록하여 __`input`창에 입력되는 값을 실시간으로 받아온다.__

<br>

#### 이로써 __`input`의 입력값이 App.vue의 함수와 연결되었으므로__ enter 키를 눌렀을 때 해당 Todo가 생성되도록 하고자 한다.

<br>

#### 각 키에는 고유한 숫자가 부여되는데 Enter는 13이다.
#### 즉, __입력된(눌려진) key가 13일 때 text값을 넘겨주면__ 된다.
```html
<!-- components/Header.vue -->
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="text"
      @keypress="handleTodo"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  },
  methods: {
    handleTodo({ keyCode }) {
      const { text } = this;

      if (keyCode === 13 && text !== "") {
        this.$emit("insertTodo", text);
        this.text = "";
      }
    }
  }
};
</script>
```
#### __`@keypress` 즉, 어떤 key가 눌렸을 때 `handleTodo` 함수를 호출한다.__

<br>

#### 이 `handleTodo` 함수는 `keyCode`를 매개변수로 받고 __`keyCode`가 13(enter)이며 `input`창이 빈 값이 아닐 때를__  조건으로
#### 부모 Component의 `insertTodo` custom event를 실행시킨다.

<br>

#### 그 후 input창을 비워준다. (리셋)

<br>

#### 그럼 아래와 같이 입력한 텍스트값대로 todo가 생성된다.
![create][create]

[create]: ./img/create.gif "create"

<br>

---

<br>

## __5. Remove__
#### 이번엔 __생성돼있는 Todo를 제거하는__ 기능을 생성해보자.
#### Todo에 마우스 오버 시 X 버튼이 보이는데 __이 버튼을 누르면 제거되도록__ 해보자.

<br>

#### 보통 제거 기능을 구축하는 경우, __`filter`를 사용하여 선택한 `id`와 같지 않은__ Todo들로 배열을 재구성해주는 방식을 사용한다.
```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
      <Todo :todos="todos" @removeTodo="removeTodo" />
      <Footer />
    </section>
  </div>
</template>

<script>
  methods: {
    insertTodo(text) {
      // ...
      },
      removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      }
    }
</script>
```
#### 제거하는 `removeTodo` 함수는 `Todo` Component에서 사용할 것이기 때문에 __Todo에 `removeTodo`로 `on`을 생성한다.__

<br>

#### `removeTodo` 함수가 실행되게 할 `emit`을 자식 Component인 `Todo`에서 실행하는데
#### 이는 제거 버튼인 X를 눌렀을 때 실행되어야 하기에 `@click`으로 `emit`을 실행하는 함수를 호출한다.
#### 여기에는 해당 todo의 __`id`를 매개변수로 전달해줌으로써 선택된 todo가 무엇인지__ 구분할 수 있도록 해준다.
```html
<!-- Todo.vue -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li
        :class="{todo: true, completed: isDone }"
        v-for="({ id, text, isDone }) in todos"
        :key="id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="isDone" />
          <label>{{ text }}</label>
          <button class="destroy" @click="handleRemove(id)"></button>
        </div>
        <input class="edit" type="text" />
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    props: {
      todos: { type: Array, default: () => [] }
  },
  methods: {
    handleRemove(id) {
      this.$emit("removeTodo", id);
    }
  }
};
</script>
```
#### `this.$emit("removeTodo", id)`은 부모 Component 중 `removeTodo`라는 명령어를 가진 함수를 호출시키는데 `id`를 매개변수로 전달한다는 의미이다.
#### 이렇듯 다른 Component에 `data`를 전달하고 이를 기준으로 함수를 호출시키는 등의 동작을 할 수 있다.

<br>

#### 코드를 잘 작성했다면 아래와 같이 마우스 오버 시 나오는 X 버튼을 클릭하면 해당 todo가 삭제된다.
![delete][delete]

[delete]: ./img/delete.gif "delete"

<br>

---

<br>

## __6. Update__
### __(1) 상태 Update__
#### 이번엔 __기존에 생성되어있는 todo의 상태를 업데이트하는__ 기능을 생성해보자.
#### 여기서 말하는 __상태란 완료 여부를 결정하는 `isDone`__ 과 같은 것을 의미한다.

<br>

#### __todo를 클릭하면 `isDone`의 상태를 반대로__ 하면 된다.
```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
      <Todo :todos="todos" @removeTodo="removeTodo" @updateDone="updateDone" />
      <Footer />
    </section>
  </div>
</template>

<script>
  export default {
    // ...
    methods: {
      insertTodo(text) { // ... }
      removeTodo(id) { // ... },
      updateDone(id) {
        const todos = [...this.todos];
        const todo = todos.find(todo => todo.id === id);

        if (todo) {
          todo.isDone = !todo.isDone;
          this.todos = todos;
        }
      }
    }
  };
  }
}
</script>
```
#### 이 또한 __기존 todos를 복사해두고 이를 변형하는__ 방식을 취하고 있는데
#### 선택된 todo를 찾고 이 todo의 `isDone` 상태를 반대로 함으로써 true였다면 false로, false였다면 true로 하는 방식이다.

<br>

#### 해당 이벤트를 호출해줄 `updateDone` 커스텀 이벤트를 만들고 Todo에서 이를 실행시켜준다.

<br>

#### `handleDone`이 바로 `updateDone`을 실행시켜줄 함수이다.
#### 이 또한 `id`를 매개변수로 전달하여 선택된 todo를 구분할 수 있게 해주었다.
``` html
<!-- Todo.vue  -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li
        :class="{todo: true, completed: isDone }"
        v-for="({ id, text, isDone }) in todos"
        :key="id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="isDone" @click="handleDone(id)" />
          <label>{{ text }}</label>
          <button class="destroy" @click="handleRemove(id)"></button>
        </div>
        <input class="edit" type="text" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
    props: {
      todos: { type: Array, default: () => [] }
    },
    methods: {
      handleRemove(id) { // ... },
      handleDone(id) {
        this.$emit("updateDone", id);
      }
    }
  };
}
</script>
```
#### `handleDone` 함수에서 App.vue의 `updateDone`이 실행될 수 있도록 한다.

<br>

#### 그럼 다음과 같이 클릭할 때마다 todo의 `isDone` 상태가 반대로 업데이트된다.
![update_state][update_state]

[update_state]: ./img/update_state.gif "update_state"

<br>

### __(2) Text Update__
#### 우리가 처음 `Todo` Component를 제작할 때 수정할 수 있는 input창을 숨겨놨었다.
#### 그러나 이를 __우리가 수정하고 싶을 때 나타나게 함으로써 수정된 값을 받고 적용되도록__ 할 것이다.

<br>

#### 여기서는 Todo를 더블클릭했을 때를 조건으로 잡는다.
```html
<!-- Todo.vue  -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li
        :class="{todo: true, completed: isDone, editing: edit.id === id }"
        v-for="({ id, text, isDone }) in todos"
        :key="id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="isDone" @click="handleDone(id)" />
          <label @dblclick="handleEdit({ text, id })">{{ text }}</label>
          <button class="destroy" @click="handleRemove(id)"></button>
        </div>
        <input class="edit" type="text" v-model="edit.text" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todos: { type: Array, default: () => [] }
  },
  data() { // ... },
  methods: {
    handleRemove(id) { // ... },
    handleDone(id) { // ... },
    handleEdit({ text, id }) {
          this.edit = {
            text,
            id
          };
        }
      }
    };
  }
}
</script>
```
#### `handleEdit`에는 __수정할 text와 해당 todo의 `id`를 매개변수로__ 전달해준다.
#### `handleEdit`이 호출되면 해당 todo의 text와 `id`를 불러와서 `edit` 배열의 내용을 변경해준다.
#### 그리고 이렇게 text가 변경되며 __`v-model`을 활성화시켜서 App.vue의 `updateTodo`를 호출시킨다.__

<br>

#### 여기서 li의 class 부분도 변경되었다.
```html
<li
  :class="{todo: true, completed: isDone, editing: edit.id === id }"
  v-for="({ id, text, isDone }) in todos"
  :key="id"
>
```
#### __`editing` class가 붙는 조건은 edit의 `id`와 해당 todo의 `id`가 같을 때이다.__
#### 즉, 더블클릭이 되었을 때 `editing` class가 붙는 것이다.

<br>


#### 이제 수정될 값을 입력하고 __enter를 쳤을 때 내용이 변경되도록__ 해주면 된다.
```html
<!-- Todo.vue -->
<template>
  <section class="main">
    <ul class="todo-list">
      <li
        :class="{todo: true, completed: isDone, editing: edit.id === id }"
        v-for="({ id, text, isDone }) in todos"
        :key="id"
      >
        <div class="view">
          <input class="toggle" type="checkbox" :checked="isDone" @click="handleDone(id)" />
          <label @dblclick="handleEdit({ text, id })">{{ text }}</label>
          <button class="destroy" @click="handleRemove(id)"></button>
        </div>
        <input class="edit" type="text" v-model="edit.text" @keypress="handleUpdate" />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    todos: { type: Array, default: () => [] }
  },
  data() { // ... },
  methods: {
    handleRemove(id) { // ... },
    handleDone(id) { // ... },
    handleEdit({ text, id }) { // ... },
    handleUpdate({ keyCode }) {
      if (keyCode === 13) {
        this.$emit("updateTodo", this.edit);
        this.edit = { // 추가된 후 edit state 를 리셋합니다
          text: "",
          id: -1
        };
      }
    }
  }
}
</script>
```
#### `handleUpdate` 함수로 구현해주면 되는데 enter키이기에 똑같이 13일 때를 조건으로 App.vue에서 `updateTodo`를 호출해준 뒤, `edit`의 내용을 리셋해주면 된다.

<br>

#### 우리가 의도한대로 더블클릭 시 수정할 수 있는 input창이 활성화되고 여기에 입력한 값으로 todo가 수정된다.
![update_text][update_text]

[update_text]: ./img/update_text.gif "update_text"

<br>

---

<br>

## __7. Filter__
#### __`Footer`에 있는 filter의 종류별로 화면에 보여지는 todo가 다르게끔__ 기능을 생성해보자.
#### 먼저 filter를 구성해볼텐데 종류는 `전체, 진행중, 진행완료`로 이루어진다.
```html
<!-- components/Footer.vue  -->
<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>10</strong> items left
    </span>
    <ul class="filters">
      <li v-for="(filter, idx) in filters" :key="idx">
        <a href="javascript:;" class="selected">{{ filter }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      filters: ["All", "Active", "Completed"]
    };
  }
};
</script>
```

<br>

#### `Footer`에서 선택된 filter의 값은 Todo의 data를 가지고 있는 __App.vue가 전달받아야 Todo의 리스트 항목도 변경된다.__
```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
       <Todo
        :todos="todos"
        @removeTodo="removeTodo"
        @updateDone="updateDone"
        @updateTodo="updateTodo"
      />
      <Footer :filterType="filterType"/>
    </section>
  </div>
</template>

<script>
  export default {
    // ...,
 data() {
   return {
     filterType: 'All' 
    }
  },
  // ...
}
</script>
```
#### 여기서 `filterType`의 data를 `All`로 설정함으로써 __페이지가 처음 로드되었을 때 기본 filter type을 전체로__ 해주고
#### 이 `filterType` data를 `Footer` Component에 전달해준다.

<br>

#### `Footer` Component에서는 `selected` class를 __`filterType`과 `filter`가 일치할 때를 조건으로__ 붙여준다.
```html
<!-- components/Footer.vue -->
<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>10</strong> items left
    </span>
    <ul class="filters">
      <li v-for="(filter, idx) in filters" :key="idx">
        <a href="javascript:;" :class="{selected: filterType === filter}">{{ filter }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: {
      filterType: { type: String, default: 'All'}
  },
  data() {
    return {
      filters: ["All", "Active", "Completed"]
    };
  }
};
</script>
```

<br>

#### 이어서 filter를 클릭했을 때 `filterType`을 업데이트해줘야 하는데 이는 App.vue에서 제어한다.
```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
       <Todo
        :todos="todos"
        @removeTodo="removeTodo"
        @updateDone="updateDone"
        @updateTodo="updateTodo"
      />
      <Footer :filterType="filterType" @onFilterType="handleFilterType"/>
    </section>
  </div>
</template>

<script>
  export default {
    // ...
  methods: {
    // ...,
    handleFilterType(type) {
      this.filterType = type
    }
  }
};
</script>

<!-- components/Footer.vue -->
<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>10</strong> items left
    </span>
    <ul class="filters">
      <li v-for="(filter, idx) in filters" :key="idx" @click="handleFilterType(filter)">
        <a href="javascript:;" :class="{selected: filterType === filter}">{{ filter }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: {
      filterType: { type: String, default: 'All'}
  },
  data() {
    return {
      filters: ["All", "Active", "Completed"]
    };
  },
 methods: {
    handleFilterType (type) {
      this.$emit('onFilterType', type)
    }
 }
};
</script>
```
#### `Footer` Component에서는 `filter` 클릭 시 (App.vue의 `onFilterType`을 호출해주는) `handleFilterType`을 호출해주고 __매개변수로는 현재 클릭된 `filter`의 type을 전달한다.__

<br>

#### 이렇게 `filterType`을 업데이트해주는 작업은 완료하였고
#### 이제는 __바뀐 `filterType`에 따라 다른 리스트가 보여지도록__ 하면 된다.
```html
<!-- App.vue -->
<template>
  <div id="app">
    <section class="todoapp">
      <Header @insertTodo="insertTodo" />
       <Todo
        :todos="filteredList"
        @removeTodo="removeTodo"
        @updateDone="updateDone"
        @updateTodo="updateTodo"
      />
      <Footer 
        :filterType="filterType" 
        :size="filteredList.length"
        @onFilterType="handleFilterType"
      />
    </section>
  </div>
</template>

<script>
  export default {
    // ...
  computed: {
    filteredList () {
      switch(this.filterType) {
        case "All": {
          return this.todos
        }
        case "Active": {
          return this.todos.filter((todo) => !todo.isDone)
        }
        case "Completed": {
          return this.todos.filter((todo) => todo.isDone)
        }
        default: {
          return []
        }
      }
    }
  },
  // ...
}
</script>
```
#### __`switch`문을 통해 `filterType`의 종류에 따라 반환하는 Todo의 항목들이 달라지도록__ 한다.
#### 그리고 이 length를 `Footer` Component에 `size` props로 전달하여 __보여지는 todo가 몇개인지__ 또한 알려줄 수 있도록 한다.
```html
<!-- components/Footer.vue -->
<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ size }}</strong> items left
    </span>
    <ul class="filters">
      <li v-for="(filter, idx) in filters" :key="idx" @click="handleFilterType(filter)">
        <a href="javascript:;" :class="{selected: filterType === filter}">{{ filter }}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  props: {
    filterType: { type: String, default: 'All'},
    size: { type: Number, default: 0 }
  },
  // ... 
};
</script>
```

<br>

#### 이렇게 간단한 CRUD 기능을 가진 Todo 페이지를 vue를 이용하여 생성해봤다.
#### vue의 기본이자 가장 중요한 문법과 기능들을 십분활용했으니 이제는 이를 어떻게 다양하게 활용할 수 있는가에 달렸다.