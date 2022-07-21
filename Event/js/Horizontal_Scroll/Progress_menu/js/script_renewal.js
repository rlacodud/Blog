// range slide
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});

$('.down-contents .filter-content').on('click', function () {
  $('.down-contents .filter').removeClass('on');
  $('.filter-container').removeClass('on');
})
$('#input-right').on('click', function () {
  $(this).parent('.multi-range-slider').parent('.middle').prev('.title-container').children('.right').children('#option').addClass('on');
})

// menu active
var modelList = document.querySelectorAll('.single .model-opt');
modelList = Array.prototype.slice.call(modelList);
var displayModelList = document.querySelectorAll('#display .model-opt');
displayModelList = Array.prototype.slice.call(displayModelList);
var firstDataName, firstData;

$('.model-opt').on('click', function () {
  // 다중 선택 메뉴
  if ($(this).parent('.model-list').hasClass('display')) {
    // 선택한 옵션 반영
    $(this).toggleClass('active');
    // 그 이후부터는 클릭된 버튼의 개수를 외 이후에 반영
    // 클릭된 버튼들을 담을 배열 생성
    var selectedMenu = [];
    // 반복문을 이용해 active된 버튼을 구분
    for (var i = 0; i < displayModelList.length; i++) {
      if (displayModelList[i].classList.contains('active')) {
        selectedMenu.push(displayModelList[i]);
      }
    }

    var displayOptionLength = selectedMenu.length;
    // 1일 때에만 재정의됨.
    if (displayOptionLength == 1) {
      firstData = selectedMenu[0];
      firstDataName = selectedMenu[0].getAttribute("data-name");
    } else if (displayOptionLength <= 0) {
      firstDataName = '';
    }
    if (displayOptionLength >= 2) {
      if (!firstData.classList.contains('active')) {
        firstDataName = selectedMenu[0].getAttribute("data-name");
      }
    }
    
    if (displayOptionLength == 1) {
      var displayOption = `${firstDataName}`;
    } else if (displayOptionLength >= 2) {
      var displayOption = `${firstDataName} 외 ${displayOptionLength - 1}개`;
    } else {
      var displayOption = '';
      firstDataName = ''
    }
    $(this).parent('.model-list').prev('.title-container').children('.right').children('#option').html(displayOption)
  }
  // 단일 선택 메뉴
  else if (!$(this).parent('.model-list').hasClass('display')) {
    // 선택한 옵션 반영
    var dataAttribute = $(this).data('name');
    $(this).parent('.model-list').prev('.title-container').children('.right').children('#option').html(dataAttribute)
    for (var i = 0; i < modelList.length; i++) {
      if (modelList[i].classList.contains('active')) {
        modelList[i].classList.remove('active');
      }
    }
    $(this).addClass('active');
  }
})

// filter
$('.down-contents .filter').on('click', function () {
  $(this).addClass('on');
  $('.filter-container').addClass('on');
  $(this).children('.icon').toggleClass('on');
})
// menu on | off
$('.title-container').on('click', function () {
  $(this).next('.model-list').toggleClass('off');
  $(this).find('.up').toggleClass('on');
  $(this).next('.search').toggleClass('off');
  $(this).next('.middle').toggleClass('off');
  $(this).next('.middle').next('.text').toggleClass('off');
})