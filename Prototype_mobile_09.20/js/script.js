// 전역 변수 선언
// drag_area, .drag-area-text의 부모인 section1
const container = document.querySelector('#section1');
// 현재 drag-text에 입력되어있는 값을 담을 변수
let prevText = null;
// textarea에 입력된 값을 담을 변수
let changeText = null;

// 가이드 유무를 판단하는 boolean 변수
let isGuid = false;
// 배경 이미지 적용 여부를 판단하는 boolean 변수
let isImage = false;
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

// 선택한 텍스트 컬러를 담을 변수
let colorVal = 'black';
// 텍스트에 설정된 컬러값을 담을 변수
let thisColorVal = 'black';
// 선택한 텍스트 사이즈를 담을 변수
let sizeVal = null;
// 텍스트에 설정된 사이즈값을 담을 변수
let thisSizeVal = null;

// 스티커, 텍스트 추가를 가능하게 하는 함수
function activeButton() {
  // isImage를 true로 변경
  isImage = true;
  // isImage가 true일 경우, 스티커와 텍스트, 다운로드 버튼 활성화
  if (isImage) {
    $('#icon .button-icon').addClass('active');
    $('#text .button-icon').addClass('active');
    $('.download').addClass('active');
  }
}

// 공통 class reset
function reset() {
  // tool display none 
  $('.drag-area').removeClass('on');
  $('.drag-area-text').removeClass('on');
  $('.remove').removeClass('on');
  $('.edit').removeClass('on');
  $('.option').removeClass('on');
  // container on class 초기화
  $('.text-deco-container').removeClass('on');
  $('.back-image-tool-container').removeClass('on');
  $('.icon-tool-container').removeClass('on');
  // 모든 tool-button active class 초기화
  $('.tool-button').removeClass('active');
}

// 공통 close 기능
$('.close').on('click touchstart', function () {
  // container on class 초기화
  $('.back-image-tool-container').removeClass('on');
  $('.icon-tool-container').removeClass('on')
  $('.text-deco-container').removeClass('on')
})

// 빈 곳 클릭 시 tool display none 처리
$('#section1').on('click touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();
  // reset 호출
  reset();
})

function inputDone() {
  // reset 호출
  reset();
  // input-container 비활성화
  $('.input-container').removeClass('on');

  // drag-text의 너비와 높이를 text의 너비와 높이로 대입
  thisTextArea.width(thisTextWidth);
  thisTextArea.height(thisTextHeight);
}

// Background Image------------------------------------------------------------------------------------
$('#background-image').on('click touchstart', function () {
  if(isGuid){
    // reset 호출
    reset();
    // background-image tool button active class 활성화
    $(this).addClass('active');
    // back-image-tool-container 활성화
    $('.back-image-tool-container').addClass('on');
  }
})

// back-image 클릭 시
$('.back-image').off('click touchstart').on('click touchstart', function () {
  reset();
    // back-color-tool-container 비활성화
    $('.back-color-tool-container').removeClass('on');

    let bgVal = $(this).val();
    $('#section1').css('background-color', 'none');
    $('#section1').css('background-image', `url(https://rlacodud.github.io/Blog/Prototype_mobile_09.20/images/${bgVal}.jpg)`);
    activeButton();
})

// Background Upload------------------------------------------------------------------------------------
$('#background-upload').on('click touchstart', function () {
  if(isGuid){
    // reset 호출
    reset();
    // background-image tool button active class 활성화
    $(this).addClass('active');
    $('#file').prop('disabled', false)
  }
})


// 이미지 파일이 업로드되었을 때
  $('#file').on('change', function () {
    // 업로드된 파일을 찾고
    const selectedFile = document.getElementById('file').files[0];
    // 해당 이미지 파일의 url을 임의로 생성
    let url = URL.createObjectURL(selectedFile);
    // section1의 background-color 변경
    $('#section1').css('background-color', 'white');
    // 해당 url을 section1의 background-image로 젹용
    $('#section1').css('background-image', `url(${url})`);
    // activeButton 호출
    activeButton();
  })

// Icon------------------------------------------------------------------------------------
$('#icon').on('click touchstart', function () {
  // isImage가 true일 때 실행
  if (isImage) {
    // reset 호출
    reset();
    // icon tool button active class 활성화
    $(this).addClass('active');
    // icon-tool-container 활성화
    $('.icon-tool-container').addClass('on');
  }
})

// 각 icon 클릭 시 실행
$('.icon-button').on('mousedown touchstart', function (e) {
  // isImage가 true일 때 실행
  if (isImage) {
    // isDeco를 true로 변경
    isDeco = true;
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

    // 삭제 버튼이 될 div 생성
    const removeButtonContainer = document.createElement("div");
    // remove-container라는 class명 부여
    removeButtonContainer.classList.add("remove");
    // removeButtonContainer의 자식 요소로 삽입
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
      // 기본 정비율로 resize되도록 width값에 맞춰 height도 변경
    }).on("resize", e => {
      frame.set("width", `${e.width}px`);
      frame.set("height", `${e.width}px`);
  
      frame.set("transform", "translateX", `${e.drag.beforeTranslate[0]}px`);
      frame.set("transform", "translateY", `${e.drag.beforeTranslate[1]}px`);
  
      target.style.cssText += frame.toCSS();
    });
  
    moveable.dragStart(e);

    // 중복 방지를 위해 off 후 on 실행
    $('.drag-area').on('click touchstart', function (e) {
      // 이벤트 버블링 방지
      e.stopPropagation();

      // reset 호출
      reset();
      // 선택한 drag-area에 on class 부여(tool 활성화)
      $(this).addClass('on');
      // 선택한 drag-area를 section1의 맨 마지막에 삽입(최상위 객체로 전환)
      $(this).appendTo($('#section1'));

      // remove 활성화
      $(this).children('.drag').children('.remove').addClass('on');

      // 현재 선택된 element를 thisDrag로 정의
      let thisDrag = $(this);
      // remove 버튼 클릭 시
      $(this).children('.drag').children('.remove').off('click touchstart').on('click touchstart', function () {
        // 현재 선택된 element 제거
        thisDrag.remove();
      })
    })
  }
});

// Text----------------------------------------------------------------
// Text 생성 버튼 클릭 시
$('#text').on('click touchstart', function (e) {
  // 배경색이나 배경 이미지가 적용된 경우에만 기능이 작동되도록
  if (isImage) {
    // 이벤트 버블링 방지
    e.stopPropagation();

    // alert이 안 뜨도록 true로 변경
    isDeco = true;
    // reset 호출
    reset();

    // text 새로 생성할 때마다 input-area 내용 초기화
    document.querySelector(".input-area").value = '';
    // 모든 input 체크 해제
    $('input[type="radio"]').prop('checked', false);

    // text tool button active class 활성화
    $(this).addClass('active');

    // 각 drag-text의 부모가 될 div 생성
    const dragEl = document.createElement("div");
    // container(section1)의 자식 요소로 삽입
    container.appendChild(dragEl);
    // drag-area-text라는 class명 부여
    dragEl.classList.add('drag-area-text');

    // drag-text 요소가 될 div 생성
    const target = document.createElement("div");
    // drag-text라는 class명 부여
    target.classList.add("drag-text");
    // drag-area-text의 자식 요소로 삽입
    dragEl.appendChild(target);

    // text 요소가 될 p 생성
    const targetText = document.createElement("p");
    // text라는 class명 부여
    targetText.classList.add("text");
    // drag-text의 자식 요소로 삽입
    target.appendChild(targetText);

    // 삭제 버튼이 될 button 생성
    const textRemoveButton = document.createElement("button");
    // remove라는 class명 부여
    textRemoveButton.classList.add("remove");
    // drag-text의 자식 요소로 삽입
    target.appendChild(textRemoveButton);

    // 수정 버튼이 될 button 생성
    const textEditButton = document.createElement("button");
    // edit라는 class명 부여
    textEditButton.classList.add("edit");
    // target의 자식 요소로 삽입
    target.appendChild(textEditButton);

    // 옵션 버튼이 될 button 생성
    const textOptionButton = document.createElement("button");
    // option이라는 class명 부여
    textOptionButton.classList.add("option");
    // target의 자식 요소로 삽입
    target.appendChild(textOptionButton);

    const frame = new Scene.Frame({
      transform: {
        translateX: "0px",
        translateY: "0px",
        rotate: "0deg",
      },
    });
  
    const moveable = new Moveable(dragEl, {
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

    // 현재 생성된 drag-area-text에 on class를 부여하여 구분
    dragEl.classList.add('on');

    // 너비와 높이를 대입해줄 .drag-area-text를 thisTextArea에 대입
    thisTextArea = $('.drag-area-text.on .drag-text');

    // text를 입력/수정할 수 있는 input-container 활성화
    $('.input-container').addClass('on');
  }

  // drag-area-text 클릭 시
  $('.drag-area-text').off('click touchstart').on('click touchstart', function (e) {
    // 이벤트 버블링 방지
    e.stopPropagation();

    // reset 호출
    reset();

    // 선택한 drag-area-text에 on class 부여
    $(this).addClass('on');
    // 선택한 drag-area-text를 section1의 맨 마지막에 삽입
    $(this).appendTo($('#section1'));

    // 선택된 drag-text에 입력된 값을 받아와 prevText에 대입
    prevText = $(this).children('.drag-text').children('.text').text();

    // remove 활성화
    $(this).children('.drag-text').children('.remove').addClass('on');
    // edit 활성화
    $(this).children('.drag-text').children('.edit').addClass('on');
    // option 활성화
    $(this).children('.drag-text').children('.option').addClass('on');

    // 현재 선택된 element를 thisDragText로 정의
    let thisDragText = $(this);

    // remove 버튼 클릭 시
    $(this).children('.drag-text').children('.remove').off('click touchstart').on('click touchstart', function () {
      // 현재 선택된 element 제거
      thisDragText.remove();
      // input-area 초기화
      document.querySelector(".input-area").value = '';
    })
    // edit 버튼 클릭 시
    $(this).children('.drag-text').children('.edit').off('click touchstart').on('click touchstart', function () {
      // input-area에 현재 선택된 drag-text에 입력된 값 대입
      $('.input-area').val(prevText);
      // input-container 활성화
      $('.input-container').addClass('on');
    })

    // 현재 선택한 텍스트의 color id를 thisColorVal에 대입
    thisColorVal = $('.drag-area-text.on .drag-text').attr('id');
    // 현재 선택한 텍스트의 font-size를 thisSizeVal에 대입
    thisSizeVal = $('.drag-area-text.on .drag-text').css('font-size');

    // 받아온 color id로 해당 text color 체크
    thisColorVal = 'input[type="radio"]#' + thisColorVal;
    $(thisColorVal).prop('checked', true);
    // 받아온 font-size로 해당 font-size 체크
    thisSizeVal = 'input[type="radio"]#' + thisSizeVal;
    $(thisSizeVal).prop('checked', true);

    $(this).children('.drag-text').children('.option').off('click touchstart').on('click touchstart', function (e) {
      e.stopPropagation();
      // .text-deco-container 활성화
      $('.text-deco-container').addClass('on');
    })
  })
});

// text color 클릭 시
$('.text-color').off('click touchstart').on('click touchstart', function () {
  // 해당 value값을 받아와 colorVal에 대입
  colorVal = $(this).val();
  // text에 적용
  $('.drag-area-text.on .drag-text').css('color', `${colorVal}`);

  // 해당 color값을 text의 id로 적용
  $('.drag-area-text.on .drag-text').attr('id', colorVal);
})

// text size 클릭 시
$('.text-size').off('click touchstart').on('click touchstart', function () {
  // 해당 value값을 받아와 sizeVal에 대입
  sizeVal = $(this).val();
  // text에 적용
  $('.drag-area-text.on .drag-text').css('font-size', `${sizeVal}`);

  // 현재 생성된 drag-area-text의 text El을 thisText에 대입
  thisText = $('.drag-area-text.on .drag-text .text');

  // 입력된 text의 크기만큼 툴바의 크기가 정의되도록
  // text의 너비와 높이를 구한 뒤 thisTextWidth와 thisTextHeight에 대입
  thisTextWidth = thisText.width();
  thisTextHeight = thisText.height();

  inputDone();
})

$('.input-area').on('click touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();
})
// input-area에 텍스트 입력 시
$('.input-area').on('keyup', function (e) {
  // 입력된 값을 changeText에 대입
  changeText = $(this).val();

  if (e.keyCode === 13) {
    changeText = changeText.replace(/(?:\r\n|\r|\n)/g, '<br />');
  }

  // drag-text의 내용을 input-area에 입력되어있던 값으로 변경
  $('.drag-area-text.on .drag-text .text').html(changeText);

  // 현재 생성된 drag-area-text의 text El을 thisText에 대입
  thisText = $('.drag-area-text.on .drag-text .text');

  // 입력된 text의 크기만큼 툴바의 크기가 정의되도록
  // text의 너비와 높이를 구한 뒤 thisTextWidth와 thisTextHeight에 대입
  thisTextWidth = thisText.width();
  thisTextHeight = thisText.height();
})

// input-area 닫기 버튼을 눌렀을 때
$('.input-container .close').on('click touchstart', function () {
  // inputDone 호출
  inputDone();
})

// input-container 빈 곳을 눌렀을 때
$('.input-container').on('click touchstart', function (e) {
  // 이벤트 버블링 방지
  e.stopPropagation();

  // inputDone 호출
  inputDone();
})

$('.bottom-button').on('click touchstart', function() {
  $('.guid-container').addClass('off');
  isGuid = true;
  $('.bottom-button').addClass('down');
  $('.bottom-button').text('사진 저장하고 이벤트 응모하기');

  if (isImage) {
    if (!isDeco) {
      alert('배경화면 꾸며주세요!')
    }
    if (isDeco) {
      reset();
      domtoimage.toBlob(document.querySelector('#section1'))
        .then(function (blob) {
          window.saveAs(blob, 'image__.png');
        });
    }
  }
})

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

$('#copy-hashtag').on('click touchstart', function (e) {
  copyToClipboard('#유플러스 #아이폰14 #MBT_i #유플펀');
  // alert
  alert("클립보드로 복사되었습니다.");
})