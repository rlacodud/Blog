// drag_area의 부모인 container
const container = document.querySelector('#section1');

// drag 복제 대상
// 모바일의 경우 mousedown, click을 touchstart로 변경
document.querySelector(".original.drag").addEventListener("mousedown", e => {
  const frame = new Scene.Frame({
    transform: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  });

  // 각 drag의 부모가 될 div 생성
  const dragEl = document.createElement("div");
  // container의 자식 요소로 삽입
  container.appendChild(dragEl);
  // drag-area라는 class명 부여
  dragEl.classList.add('drag-area');

  // 쉬운 구분을 위해 각 drag 요소마다 다른 색상을 부여해줄 randomColor 생성
  let randomColor = '#' + Math.round(Math.random() * 0xffffff).toString(16);
  // darg 요소가 될 div 생성
  const target = document.createElement("div");
  // drag라는 class명 부여
  target.classList.add("drag");
  // Drag라는 text 삽입
  target.innerHTML = "Drag";
  // randomColor를 background로 적용
  target.style.background = randomColor;
  // drag-area의 자식 요소로 삽입
  dragEl.appendChild(target);

  // resize, rotate를 시켜주는 tool 생성
  const moveable = new Moveable(dragEl, {
    target,
    draggable: true,
    rotatable: true,
    resizable: true,
    origin: false,
  }).on("dragStart", e => {
    const x = parseFloat(frame.get("transform", "translateX"));
    const y = parseFloat(frame.get("transform", "translateY"));
    e.set([x, y]);
  }).on("drag", e => {
    frame.set("transform", "translateX", `${e.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  }).on("rotateStart", e => {
    const deg = parseFloat(frame.get("transform", "rotate"));

    e.set(deg);
  }).on("rotate", e => {
    frame.set("transform", "rotate", `${e.beforeRotate}deg`);

    target.style.cssText += frame.toCSS();
  }).on("resizeStart", e => {
    e.setOrigin(["%", "%"]);
    if (e.dragStart) {
      const x = parseFloat(frame.get("transform", "translateX"));
      const y = parseFloat(frame.get("transform", "translateY"));
      e.dragStart.set([x, y]);
    }
    // 정비율로 resize되도록 width값에 맞춰 height도 변경
  }).on("resize", e => {
    frame.set("width", `${e.width}px`);
    frame.set("height", `${e.width}px`);

    frame.set("transform", "translateX", `${e.drag.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.drag.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  });

  moveable.dragStart(e);

  // class를 reset
  function reset() {
    $('.drag-area').removeClass('on')
  }

  // 중복 방지를 위해 off 후 on 실행
  $('.drag-area').off('click').on('click', function () {
    // class reset
    reset()
    // 선택한 drag-area에 on class 부여
    $(this).addClass('on');
    // 선택한 drag-area를 section1의 맨 마지막에 삽입
    $(this).appendTo($('#section1'))
  })
});

// ----------------------------------------------------------------

// text 버전

// drag_area의 부모인 textContainer
const textContainer = document.querySelector('#section2');
// drag 복제 대상
// 모바일의 경우 mousedown, click을 touchstart로 변경
document.querySelector(".originalText.drag").addEventListener("mousedown", e => {
  const frame = new Scene.Frame({
    transform: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  });

  // 각 drag의 부모가 될 div 생성
  const dragEl = document.createElement("div");
  // container의 자식 요소로 삽입
  textContainer.appendChild(dragEl);
  // drag-area라는 class명 부여
  dragEl.classList.add('drag-area-text');

  // darg 요소가 될 div 생성
  const target = document.createElement("input");
  // drag라는 class명 부여
  target.classList.add("drag-text");
  // '가나다라'라는 text 삽입
  target.placeholder = '가나다라';
  // drag-area의 자식 요소로 삽입
  dragEl.appendChild(target);

  // resize, rotate를 시켜주는 tool 생성
  const moveable = new Moveable(dragEl, {
    target,
    draggable: true,
    rotatable: true,
    resizable: true,
    origin: false,
  }).on("dragStart", e => {
    const x = parseFloat(frame.get("transform", "translateX"));
    const y = parseFloat(frame.get("transform", "translateY"));
    e.set([x, y]);
  }).on("drag", e => {
    frame.set("transform", "translateX", `${e.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  }).on("rotateStart", e => {
    const deg = parseFloat(frame.get("transform", "rotate"));

    e.set(deg);
  }).on("rotate", e => {
    frame.set("transform", "rotate", `${e.beforeRotate}deg`);

    target.style.cssText += frame.toCSS();
  }).on("resizeStart", e => {
    e.setOrigin(["%", "%"]);
    if (e.dragStart) {
      const x = parseFloat(frame.get("transform", "translateX"));
      const y = parseFloat(frame.get("transform", "translateY"));
      e.dragStart.set([x, y]);
    }
    // 정비율로 resize되도록 width값에 맞춰 height도 변경
  }).on("resize", e => {
    frame.set("width", `${e.width}px`);
    frame.set("height", `${e.width}px`);

    frame.set("transform", "translateX", `${e.drag.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.drag.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  });

  moveable.dragStart(e);

  // class를 reset
  function reset() {
    $('.drag-area-text').removeClass('on')
  }

  // 중복 방지를 위해 off 후 on 실행
  $('.drag-area-text').off('click').on('click', function () {
    // class reset
    reset()
    const val = $(this).children('.drag-text')[0].attributes[1].nodeValue
    console.log(val)
    // 선택한 drag-area에 on class 부여
    $(this).addClass('on');
    // 선택한 drag-area를 section1의 맨 마지막에 삽입
    $(this).appendTo($('#section2'))
  })
});