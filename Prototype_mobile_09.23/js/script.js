// 전역 변수 선언
// drag_area, .drag-area-text의 부모인 section1
const container = document.querySelector('.dc_deco-zone');
// 현재 drag-text에 입력되어있는 값을 담을 변수
let prevText = null;
// textarea에 입력된 값을 담을 변수
let changeText = null;
// 엔터를 포함하여 입력된 값을 담을 변수
let enterText = null;

// 가이드 유무를 판단하는 boolean 변수
let isGuid = true;
// 스티커, 텍스트 적용 여부를 판단하는 boolean 변수
let isDeco = false;

// 현재 선택된 텍스트를 담을 변수
let thisText = null;
// 현재 입력된 텍스트의 너비를 담을 변수
let thisTextWidth = null;
// 현재 입력된 텍스트의 높이를 담을 변수
let thisTextHeight = null;
// 텍스트의 너비와 높이를 적용시켜줄 텍스트 영역을 담을 변수
let thisTextArea = null;

// 선택한 텍스트 컬러를 담을 변수(기본: black)
let colorVal = 'black';
// 텍스트에 설정된 컬러값을 담을 변수
let thisColorVal = null;
// 선택한 텍스트 사이즈를 담을 변수(기본: 16px)
let sizeVal = '16px';
// 텍스트에 설정된 사이즈값을 담을 변수
let thisSizeVal = null;

// 스티커 이미지의 각 비율을 닮을 변수
let ratio = null;

// PC 모바일 구분 함수
function Mobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 공통 class reset
function reset() {
  // tool display none 
  $('.dc_drag-area').removeClass('on');
  $('.dc_drag-area-text').removeClass('on');
  $('.dc_remove').removeClass('on');
  $('.dc_edit').removeClass('on');
  $('.dc_option').removeClass('on');
  // popup on class 초기화
  $('.dc_pop').removeClass('active');
  // 모든 dc_tool-button active class 초기화
  $('.dc_tool-button').removeClass('active');
}

// 공통 close 기능
$('.dc_close').on('click touchstart', function () {
  // dc_pop active class 초기화
  $('.dc_pop').removeClass('active');
})

// 꾸미기 시작하기 버튼 클릭 시
$('.dc_down-button').on('click touchstart', function () {
  // 모바일일 경우
  if (Mobile()) {
    // 가이드 화면 display none
    $('.dc_guid-text--container').addClass('off');
    // isGuid false로 변경
    isGuid = false;
    // 버튼 텍스트 변경
    $('.dc_down-button').text('사진 저장하고 이벤트 응모하기');
  }
  // 스티커, 텍스트 요소가 없을 시
  if (!isDeco) {
    // alert 제공
    alert('배경화면 꾸며주세요!')
    // 스티커, 텍스트 요소가 있을 경우
  } else {
    // reset 호출
    reset();

    // 이미지 다운로드
    domtoimage.toBlob(document.querySelector('.dc_deco-zone'))
      .then(function (blob) {
        window.saveAs(blob, 'image__.png');
      });
  }
})

// Background Image------------------------------------------------------------------------------------
// ====모바일====
// 이미지 툴 버튼 클릭 시
$('.dc_image-button').off().on('click', function (e) {
  console.log('클릭 확인')
  e.stopPropagation();
  // 가이드가 해제되었을 때
  if (!isGuid) {
    // reset 호출
    reset();
    // dc_image-button active class 활성화
    $(this).addClass('active');
    // back-image-tool-container 활성화
    $('.dc_back-image--container').addClass('active');
  }
})

// ====PC, 모바일 공통 기능====
// 각 이미지 클릭 시
$('.dc_back-image label').off().on('click', function (e) {
  console.log('이미지 버튼 클릭 확인')
  // 이벤트 버블링 방지
  e.stopPropagation()
  // reset 호출
  reset();

  // 해당 이미지의 value값을 받아와
  let bgVal = $(this).prev('input').val();

  // dc_deco-zone의 백그라운드로 설정
  $('.dc_deco-zone').css('background-color', 'none');
  $('.dc_deco-zone').css('background-image', `url(https://rlacodud.github.io/Blog/Prototype_mobile_09.20/images/${bgVal}.jpg)`);
})

// Background Upload------------------------------------------------------------------------------------
// ====모바일 기능====
$('.blind--pc .dc_upload-button').on('touchstart', function () {
  // 가이드가 해제되었을 때
  if (!isGuid) {
    // reset 호출
    reset();

    // file 업로드 가능
    $('.blind--pc .dc_upload-button #mobileFile').prop('disabled', false);
    // dc_upload-button active class 활성화
    $(this).addClass('active');
  }
})
// 이미지 파일이 업로드되었을 때
$('.blind--pc .dc_upload-button #mobileFile').on('change', function () {
  // 업로드된 파일을 찾고
  const selectedFile = document.getElementById('mobileFile').files[0];
  // 해당 이미지 파일의 url을 임의로 생성
  let url = URL.createObjectURL(selectedFile);

  // dc_deco-zone의 background-color 변경
  $('.dc_deco-zone').css('background-color', 'white');
  // 해당 url을 dc_deco-zone의 background-image로 젹용
  $('.dc_deco-zone').css('background-image', `url(${url})`);
})

// ====PC 기능====
$('.blind--mobile .dc_upload-button').on('click', function () {
  // reset 호출
  reset();

  // file 업로드 가능
  $('.blind--mobile .dc_upload-button #file').prop('disabled', false);
})
// 이미지 파일이 업로드되었을 때
$('.blind--mobile .dc_upload-button #file').on('change', function () {
  // 업로드된 파일을 찾고
  const selectedFile = document.getElementById('file').files[0];
  // 해당 이미지 파일의 url을 임의로 생성
  let url = URL.createObjectURL(selectedFile);

  // dc_deco-zone의 background-color 변경
  $('.dc_deco-zone').css('background-color', 'white');
  // 해당 url을 dc_deco-zone의 background-image로 젹용
  $('.dc_deco-zone').css('background-image', `url(${url})`);
})

// Sticker------------------------------------------------------------------------------------
// ====모바일 기능====
$('.dc_sticker-button').on('touchstart', function () {
  // 가이드가 해제되었을 때
  if (!isGuid) {
    // reset 호출
    reset();
    // dc_sticker-button active class 활성화
    $(this).addClass('active');
    // dc_sticker--container 활성화
    $('.dc_sticker--container').addClass('active');
  }
})

// ====PC, 모바일 공통 기능====
// 각 sticker 클릭 시 실행
$('.dc_sticker button').on('mousedown touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();

  // isDeco를 true로 변경
  isDeco = true;

  // 복제된 drag 요소에 적용하기 위해 클릭한 sticker의 src를 받아옴
  let stickerImage = $(this).children('img').attr("src");

  // sticker의 너비와 높이를 구해서
  let stickerWidth = $(this).children('img').width();
  let stickerHeight = $(this).children('img').height();
  // ratio에 해당 sticker의 비율 대입
  ratio = stickerWidth / stickerHeight;

  const frame = new Scene.Frame({
    transform: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  });

  // 각 drag의 부모가 될 div 생성
  const dragEl = document.createElement("div");
  // dc_drag-area라는 class명 부여
  dragEl.classList.add('dc_drag-area');
  // container(dc_deco-zone)의 자식 요소로 삽입
  container.appendChild(dragEl);

  // drag 요소가 될 div 생성
  const target = document.createElement("div");
  // dc_drag라는 class명 부여
  target.classList.add("dc_drag");
  // dc_drag에 sticker의 너비와 높이를 대입
  target.style.width = stickerWidth;
  target.style.height = stickerHeight;
  // dc_drag-area의 자식 요소로 삽입
  dragEl.appendChild(target);

  // 이미지를 담을 img 생성
  const targetImg = document.createElement("img");
  // dc_drag의 src로 선택했던 sticker의 src를 대입
  targetImg.src = stickerImage;
  // dc_drag에 sticker의 너비와 높이를 대입
  targetImg.style.width = stickerWidth;
  targetImg.style.height = stickerHeight;
  // target의 자식 요소로 삽입
  target.appendChild(targetImg);

  // reset 호출
  reset();

  // 삭제 버튼이 될 button 생성
  const removeButtonContainer = document.createElement("button");
  // dc_remove라는 class명 부여
  removeButtonContainer.classList.add("dc_remove");
  // dc_drag의 자식 요소로 삽입
  target.appendChild(removeButtonContainer);

  // moveableFn 호출
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
  }).on("resize", e => {
    // 각 비율에 맞춰 리사이즈되도록 위에서 구한 ratio값을 이용하여 높이 계산 및 적용
    frame.set("width", `${e.width}px`);
    frame.set("height", `${e.width / ratio}px`);

    frame.set("transform", "translateX", `${e.drag.beforeTranslate[0]}px`);
    frame.set("transform", "translateY", `${e.drag.beforeTranslate[1]}px`);

    target.style.cssText += frame.toCSS();
  });

  moveable.dragStart(e);

  // 생성된 dc_drag-area에 on class 부여
  dragEl.classList.add('on');
  // dc_drag-area 클릭 시
  $('.dc_drag-area').on('mousedown touchstart', function (e) {
    // 이벤트 버블링 방지
    e.stopPropagation();
    // reset 호출
    reset();
  
    // 선택한 dc_drag-area에 on class 부여(tool 활성화)
    $(this).addClass('on');
    // 선택한 dc_drag-area를 dc_deco-zone의 맨 마지막에 삽입(최상위 객체로 전환)
    $(this).appendTo($('.dc_deco-zone'));
  
    // 현재 선택된 element를 thisDrag로 정의
    let thisDrag = $(this);
    // remove 버튼 클릭 시
    $(this).find('.dc_remove').off('mousedown touchstart').on('mousedown touchstart', function () {
      // 현재 선택된 element 제거
      thisDrag.remove();
    })
});
})

// Text----------------------------------------------------------------
// 텍스트 리셋
function textReset() {
  // 모든 text 관련 input 체크 해제
  $('.dc_text-color input[type="radio"]').prop('checked', false);
  $('.dc_text-size input[type="radio"]').prop('checked', false);

  // 저장되어 있던 이전 텍스트 입력값과 변경 텍스트 입력값 초기화
  prevText = null;
  changeText = null;
  // 텍스트 컬러와 사이즈 기본으로 초기화
  colorVal = 'black';
  sizeVal = '16px';

  // input-area 내용 초기화
  document.querySelector(".dc_input--container .input-area").value = '';
}

// text 생성
function createText(e) {
  // 이벤트 버블링 방지
  e.stopPropagation();

  // alert이 안 뜨도록 true로 변경
  isDeco = true;
  // reset 호출
  reset();

  // text를 입력/수정할 수 있는 dc_input--container 활성화(모바일 기능)
  $('.dc_input--container').addClass('active');

  // textReset 호출
  textReset();

  // dc_text-button active class 활성화
  $(this).addClass('active');

  // 각 drag-text의 부모가 될 div 생성
  const dragEl = document.createElement("div");
  // dc_drag-area-text라는 class명 부여
  dragEl.classList.add('dc_drag-area-text');
  // container(dc_deco-zone)의 자식 요소로 삽입
  container.appendChild(dragEl);

  // drag-text 요소가 될 div 생성
  const target = document.createElement("div");
  // dc_drag-text라는 class명 부여
  target.classList.add("dc_drag-text");
  // dc_drag-area-text의 자식 요소로 삽입
  dragEl.appendChild(target);

  // text 요소가 될 p 생성
  const targetText = document.createElement("p");
  // dc_text라는 class명 부여
  targetText.classList.add("dc_text");
  // 기본 텍스트 컬러로 id 부여
  targetText.id = colorVal;
  // 기본 텍스트 사이즈로 적용
  targetText.style.fontSize = sizeVal;
  // 기본 color id로 해당 text color 체크
  colorVal = 'input[type="radio"]#' + colorVal;
  $(colorVal).prop('checked', true);
  // 기본 font-size로 해당 font-size 체크
  sizeVal = 'input[type="radio"]#' + sizeVal;
  $(sizeVal).prop('checked', true);
  // dc_drag-text의 자식 요소로 삽입
  target.appendChild(targetText);

  // 삭제 버튼이 될 button 생성
  const textRemoveButton = document.createElement("button");
  // dc_remove라는 class명 부여
  textRemoveButton.classList.add("dc_remove");
  // drag-text의 자식 요소로 삽입
  target.appendChild(textRemoveButton);

  // 수정 버튼이 될 button 생성
  const textEditButton = document.createElement("button");
  // dc_edit라는 class명 부여
  textEditButton.classList.add("dc_edit");
  // target의 자식 요소로 삽입
  target.appendChild(textEditButton);

  // 옵션 버튼이 될 button 생성
  const textOptionButton = document.createElement("button");
  // dc_option이라는 class명 부여
  textOptionButton.classList.add("dc_option");
  // target의 자식 요소로 삽입
  target.appendChild(textOptionButton);

  const frame = new Scene.Frame({
    transform: {
      translateX: "0px",
      translateY: "0px",
      rotate: "0deg",
    },
  });

  const moveable = new Moveable(target, {
    target,
    draggable: true,
    rotatable: true,
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
  });

  moveable.dragStart(e);

  // 현재 생성된 dc_drag-area-text에 on class를 부여하여 구분
  dragEl.classList.add('on');

  // 너비와 높이를 대입해줄 .dc_drag-text를 thisTextArea에 대입
  thisTextArea = $('.dc_drag-area-text.on .dc_drag-text');
}

// 텍스트 입력 완료 시
function inputDone() {
  // 빈 칸이 아닌 경우에만
  if (changeText !== null) {
    // input-container 비활성화
    $('.dc_input--container').removeClass('active');

    // drag-text의 너비와 높이를 text의 너비와 높이로 대입
    thisTextArea.width(thisTextWidth);
    thisTextArea.height(thisTextHeight);
    // 빈 칸일 경우
  } else {
    // alert
    alert('텍스트를 입력해주세요!');
  }
}

// ====모바일 기능====
$('.dc_text-button').on('touchstart', function (e) {
  // 가이드가 해제되었을 때
  if (!isGuid) {
    // createText 호출
    createText(e)
  }

  // dc_drag-area-text 클릭 시
  $('.dc_drag-area-text').off('touchstart').on('touchstart', function (e) {
    // 이벤트 버블링 방지
    e.stopPropagation();
    // reset 호출
    reset();

    // 선택한 dc_drag-area-text에 on class 부여
    $(this).addClass('on');
    // 선택한 dc_drag-area-text를 dc_deco-zone의 맨 마지막에 삽입
    $(this).appendTo($('.dc_deco-zone'));

    // 선택된 dc_drag-text에 입력된 값을 받아와 prevText에 대입
    prevText = $(this).children('.dc_drag-text').children('.dc_text').text();
    // input-area에 현재 선택된 dc_text에 입력된 값 대입
    $('.dc_input--container .input-area').val(prevText);

    // 현재 선택된 element를 thisDragText로 정의
    let thisDragText = $(this);

    // remove 버튼 클릭 시
    $(this).find('.dc_remove').off('touchstart').on('touchstart', function () {
      // 현재 선택된 element 제거
      thisDragText.remove();

      // input-area 초기화
      document.querySelector(".input-area").value = '';
    })
    // edit 버튼 클릭 시
    $(this).find('.dc_edit').off('touchstart').on('touchstart', function (e) {
      // 이벤트 버블링 방지
      e.stopPropagation();

      // dc_input--container 활성화
      $('.dc_input--container').addClass('active')      
    })
    // option 버튼 클릭 시
    $(this).find('.dc_option').on('click touchstart', function (e) {
      // 이벤트 버블링 방지
      e.stopPropagation();
      // .dc_text-color-size-container 활성화
      $('.dc_text-color-size-container').addClass('active');
    })

    // 현재 선택한 텍스트의 color를 thisColorVal에 대입
    thisColorVal = $('.dc_drag-area-text.on .dc_drag-text .dc_text').attr('id');
    // 현재 선택한 텍스트의 font-size를 thisSizeVal에 대입
    thisSizeVal = $('.dc_drag-area-text.on .dc_drag-text .dc_text').css('font-size');

    // 받아온 color id로 해당 text color 체크
    thisColorVal = 'input[type="radio"]#' + thisColorVal;
    $(thisColorVal).prop('checked', true);
    // 받아온 font-size로 해당 font-size 체크
    thisSizeVal = 'input[type="radio"]#' + thisSizeVal;
    $(thisSizeVal).prop('checked', true);
  })
});

// ====PC, 모바일 공통 기능====
// input-area 닫기 버튼을 눌렀을 때
$('.dc_complete').on('touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();
  // inputDone 호출
  inputDone();
})

// text color 클릭 시
$('.dc_text-color input').off('click touchstart').on('click touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();

  // 해당 value값을 받아와 colorVal에 대입
  colorVal = $(this).val();
  // text에 적용
  $('.dc_drag-area-text.on .dc_drag-text .dc_text').css('color', `${colorVal}`);
  // 해당 color값을 text의 id로 적용
  $('.dc_drag-area-text.on .dc_drag-text .dc_text').attr('id', colorVal);
})
// text size 클릭 시
$('.dc_text-size input').off('click touchstart').on('click touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();

  // 해당 value값을 받아와 sizeVal에 대입
  sizeVal = $(this).val();
  // text에 적용
  $('.dc_drag-area-text.on .dc_drag-text .dc_text').css('font-size', `${sizeVal}`);
  
  // 현재 생성된 drag-area-text의 text El을 thisText에 대입
  thisText = $('.dc_drag-area-text.on .dc_drag-text .dc_text');
  // 입력된 text의 크기만큼 툴바의 크기가 정의되도록
  // text의 너비와 높이를 구한 뒤 thisTextWidth와 thisTextHeight에 대입
  thisTextWidth = thisText.width();
  thisTextHeight = thisText.height();

  thisTextArea.width(thisTextWidth);
  thisTextArea.height(thisTextHeight);
})
$('.input-area').on('click touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();
})
// input-area에 텍스트 입력 시
$('.input-area').on('keyup', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();

  // 입력된 값을 changeText에 대입
  changeText = $(this).val();

  // 엔터 시
  if (e.keyCode === 13) {
    // 개행 줄바꿈
    enterText = changeText.replaceAll("\n", "<br>");
    // drag-text의 내용을 input-area에 입력되어있던 값으로 변경
    $('.dc_drag-area-text.on .dc_drag-text .dc_text').html(enterText);
  }

  // drag-text의 내용을 input-area에 입력되어있던 값으로 변경
  $('.dc_drag-area-text.on .dc_drag-text .dc_text').html(changeText);

  // 현재 생성된 drag-area-text의 text El을 thisText에 대입
  thisText = $('.dc_drag-area-text.on .dc_drag-text .dc_text');

  // 입력된 text의 크기만큼 툴바의 크기가 정의되도록
  // text의 너비와 높이를 구한 뒤 thisTextWidth와 thisTextHeight에 대입
  thisTextWidth = thisText.width();
  thisTextHeight = thisText.height();
})

if (Mobile()) {
  // 모바일일 경우
} else {// 모바일 외
  // 버튼 텍스트 변경
  $('.dc_down-button').text('사진 저장하고 이벤트 응모하기');

  // 빈 곳 클릭 시
  $('.dc_deco-zone').on('click', function (e) {
    // 이벤트 버블링 방지
    e.stopPropagation();
    // reset 호출
    reset();
    // textReset 호출
    textReset();
  })

  // ====PC 기능====
  // input-area focus 시
  $('.input-area').on('focus', function (e) {
    // 이벤트 버블링 방지
    e.stopPropagation();

    // createText 호출(텍스트 생성)
    createText(e);

    // dc_drag-area-text 클릭 시
    $('.dc_drag-area-text').off('click dragstart').on('click dragstart', function (e) {
      // 이벤트 버블링 방지
      e.stopPropagation();
      // reset 호출
      reset();

      // 선택한 dc_drag-area-text에 on class 부여
      $(this).addClass('on');
      // 선택한 dc_drag-area-text를 dc_deco-zone의 맨 마지막에 삽입
      $(this).appendTo($('.dc_deco-zone'));

      // 선택된 dc_drag-text에 입력된 값을 받아와 prevText에 대입
      prevText = $(this).children('.dc_drag-text').children('.dc_text').text();
      // input-area에 현재 선택된 dc_text에 입력된 값 대입
      $('.dc_input--container .input-area').val(prevText);

      // 현재 선택된 element를 thisDragText로 정의
      let thisDragText = $(this);

      // remove 버튼 클릭 시
      $(this).find('.dc_remove').off('click').on('click', function () {
        // 현재 선택된 element 제거
        thisDragText.remove();
        // input-area 초기화
        document.querySelector(".input-area").value = '';
      })

      // 현재 선택한 텍스트의 color를 thisColorVal에 대입
      thisColorVal = $('.dc_drag-area-text.on .dc_drag-text .dc_text').attr('id');
      // 현재 선택한 텍스트의 font-size를 thisSizeVal에 대입
      thisSizeVal = $('.dc_drag-area-text.on .dc_drag-text .dc_text').css('font-size');

      // 받아온 color id로 해당 text color 체크
      thisColorVal = 'input[type="radio"]#' + thisColorVal;
      $(thisColorVal).prop('checked', true);
      // 받아온 font-size로 해당 font-size 체크
      thisSizeVal = 'input[type="radio"]#' + thisSizeVal;
      $(thisSizeVal).prop('checked', true);
    })                               
  })
}

function copyToClipboard(val) {
  var t = document.createElement("textarea");
  document.body.appendChild(t);
  t.value = val;
  t.select();
  t.setSelectionRange(0, 99999);
  document.execCommand('copy');
  t.setSelectionRange(0, 0);
  document.body.removeChild(t);
}

$('.dc_hashtag-copy').on('click touchstart', function (e) {
  copyToClipboard('#유플러스 #아이폰14 #MBT_i #유플펀');
  // alert
  alert("클립보드로 복사되었습니다.");
})