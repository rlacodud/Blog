// 전역 변수 선언
// drag_area, .drag-area-text의 부모인 section1
const container = document.querySelector('#section1');
// textarea에 입력된 값을 담을 변수
let changeText = '가나다라';
// 현재 drag-text에 입력되어있는 값을 담을 변수
let prevText = '가나다라';

// 공통 class reset
function reset() {
  // tool display none
  $('.drag-area').removeClass('on');
  $('.drag-area-text').removeClass('on');
  // container on class 초기화
  $('.back-color-tool-container').removeClass('on');
  $('.background-image-container').removeClass('on');
  $('.icon-tool-container').removeClass('on');
  $('.remove-container').removeClass('on');
  // 모든 tool-button active class 초기화
  $('.tool-button').removeClass('active');
}

// 공통 close 기능
$('.close').on('touchstart', function () {
  // container on class 초기화
  $('.icon-tool-container').removeClass('on')
  $('.background-image-container').removeClass('on');
})

// BACKGROUND COLOR------------------------------------------------------------------------------------

// slide
let slider = document.querySelector(".back-color-tool-container .back-color-list");
let isGrab = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", grabSlider);
slider.addEventListener("mousemove", grabMove);
slider.addEventListener("mouseup", () => isGrab = false);
slider.addEventListener("mouseleave", () => isGrab = false);

function grabSlider(e) {
  e.preventDefault();
  isGrab = true;
  startX = e.x;
  scrollLeft = slider.scrollLeft;
}

function grabMove(e) {
  e.preventDefault();
  if (!isGrab) return;
  let moveX = e.x;
  let walk = (moveX - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
}

// background color click event
$('#background-color').on('touchstart', function () {
  // reset 호출
  reset();
  // background-color tool button active class 활성화
  $(this).addClass('active');
  // back-color-tool-container 활성화
  $('.back-color-tool-container').addClass('on');
})

// background color 클릭 시
$('.back-color').on('click', function () {
  // reset 호출
  reset();
  // back-color-tool-container 비활성화
  $('.back-color-tool-container').removeClass('on')
})

// 색상 변경
$('#red').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'red');
})
$('#yellow').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'yellow')
})
$('#orange').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'orange')
})
$('#green').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'green')
})
$('#blue').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'blue')
})
$('#indigo').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'indigo')
})
$('#purple').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'purple')
})
$('#gray').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'gray')
})
$('#black').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'black')
})
$('#white').on('click', function () {
  // reset 호출
  reset();
  $('#section1').removeClass('one');
  $('#section1').removeClass('two');
  $('#section1').css('background-color', 'white')
})

// Background Image------------------------------------------------------------------------------------
$('#background-image').on('touchstart', function () {
  // reset 호출
  reset();
  // background-image tool button active class 활성화
  $(this).addClass('active');
})

// 이미지 파일이 업로드되었을 때
$('#file').on('change', function() {
  // 업로드된 파일을 찾음
  const selectedFile = document.getElementById('file').files[0];
  // 해당 이미지 파일의 url을 임의로 생성
  let url = URL.createObjectURL(selectedFile);
  // 해당 url을 section1의 background-image로 젹용
  $('#section1').css('background-image', `url(${url})`)
})

// 첫번째 배경 버튼 클릭 시
$('#background-one').on('touchstart', function () {
  // 두번째 배경 제거
  $('#section1').removeClass('two');
  // 첫번째 배경 대입
  $('#section1').addClass('one');
})
// 두번째 배경 버튼 클릭 시
$('#background-two').on('touchstart', function () {
  // 첫번째 배경 제거
  $('#section1').removeClass('one');
  // 두번째 배경 대입
  $('#section1').addClass('two');
})

// ICON------------------------------------------------------------------------------------
// icon click event
$('#icon').on('touchstart', function () {
  // reset 호출
  reset();
  // icon tool button active class 활성화
  $(this).addClass('active');
  // icon-tool-container 활성화
  $('.icon-tool-container').addClass('on');
})

// 각 icon 클릭 시 실행
$('.icon').on('touchstart', function (e) {
  // reset 호출
  reset();
  // 복제된 drag 요소에 적용하기 위해 클릭한 icon의 id를 받아옴.
  let iconId = $(this).attr('id');

  const frame = new Scene.Frame({
    transform: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  });

  // 각 drag의 부모가 될 div 생성
  const dragEl = document.createElement("div");
  // container(section1)의 자식 요소로 삽입
  container.appendChild(dragEl);
  // drag-area라는 class명 부여
  dragEl.classList.add('drag-area');

  // drag 요소가 될 div 생성
  const target = document.createElement("div");
  // drag라는 class명 부여
  target.classList.add("drag");
  // 클릭한 icon의 id를 부여함으로써 같은 svg가 복제되도록 함
  target.setAttribute("id", iconId);
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
    // 기본 정비율로 resize되도록 width값에 맞춰 height도 변경
  }).on("resize", e => {
    frame.set("width", `${e.width}px`);
    frame.set("height", `${e.width}px`);
    // 정비율이 아닌 gun의 경우 비율에 맞춰 계산
    if (iconId === 'gun') {
      let gunHeight = e.width / 1.4;
      frame.set("height", `${gunHeight}px`);
    }

    frame.set("transform", "translateX", `${e.drag.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.drag.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  });

  moveable.dragStart(e);

  // 중복 방지를 위해 off 후 on 실행
  $('.drag-area').off('touchstart').on('touchstart', function () {
    // reset 호출
    reset();
    // 선택한 drag-area에 on class 부여(tool 활성화)
    $(this).addClass('on');
    // 선택한 drag-area를 section1의 맨 마지막에 삽입(최상위 객체로 전환)
    $(this).appendTo($('#section1'));

    // remove-container 활성화
    $('.remove-container').addClass('on');

    // 현재 선택된 element를 thisDrag로 정의
    let thisDrag = $(this);
    // remove 버튼 클릭 시
    $('.remove').off('touchstart').on('touchstart', function () {
      console.log(thisDrag)
      // 현재 선택된 element 제거
      thisDrag.remove();
    })
  })
});

// ----------------------------------------------------------------
// Text

// Text 생성 버튼 클릭 시
$('#text').on('touchstart', function (e) {
  // reset 호출
  reset();
  // text tool button active class 활성화
  $(this).addClass('active');

  const frame = new Scene.Frame({
    transform: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  });

  // 각 drag-text의 부모가 될 div 생성
  const dragEl = document.createElement("div");
  // container(section1)의 자식 요소로 삽입
  container.appendChild(dragEl);
  // drag-area-text라는 class명 부여
  dragEl.classList.add('drag-area-text');

  // drag-text 요소가 될 p 생성
  const target = document.createElement("p");
  // drag-text라는 class명 부여
  target.classList.add("drag-text");
  // '가나다라'라는 기본 text 삽입
  target.innerHTML = '가나다라';
  // drag-area-text의 자식 요소로 삽입
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
    // font-size도 변경되도록 임의로 width값을 이용하여 계산
    let fontSize = e.width / 5;

    frame.set("width", `${e.width}px`);
    frame.set("height", `${e.width}px`);
    // font-size 적용
    frame.set("font-size", `${fontSize}px`);

    frame.set("transform", "translateX", `${e.drag.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.drag.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  });

  moveable.dragStart(e);

  // text를 변경할 수 있는 input-container 활성화
  $('.input-container').addClass('on');
  dragEl.classList.add('on');

  // 선택된 drag-text에 입력된 값을 받아오고
  prevText = $(this).children('.drag-text').text();
  // 이를 input-area에 반영
  $('.input-container .input-area').val(prevText);

  // 중복 방지를 위해 off 후 on 실행
  $('.drag-area-text').off('touchstart').on('touchstart', function (e) {
    // reset 호출
    reset();
    // 선택한 drag-area-text에 on class 부여
    $(this).addClass('on');
    // 선택한 drag-area-text를 section1의 맨 마지막에 삽입
    $(this).appendTo($('#section1'));

    // remove-container 활성화
    $('.remove-container').addClass('on');

    // 현재 선택된 element를 thisDrag로 정의
    let thisDragText = $(this);
    // remove 버튼 클릭 시
    $('.remove').off('touchstart').on('touchstart', function () {
      // 현재 선택된 element 제거
      thisDragText.remove();
    })
  })

  // input-area에 텍스트 입력 시
  $('.input-container .input-area').on('keyup', function () {
    // 입력된 값을 changeText에 대입
    changeText = $(this).val();
  })
});

// input-area 닫기 버튼을 눌렀을 때
$('.input-container .close').on('touchstart', function () {
  // input-container 비활성화
  $('.input-container').removeClass('on');
  // drag-text의 내용을 input-area에 입력되어있던 값으로 변경
  $('.drag-area-text.on .drag-text').text(changeText);
  reset()
})

$('.download').on('touchstart', function() {
  reset()
  domtoimage.toBlob(document.querySelector('#section1'))
  .then(function (blob) {
      window.saveAs(blob, 'image__.png');
  });
})