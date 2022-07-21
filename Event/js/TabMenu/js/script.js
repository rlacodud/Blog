console.log('연결 확인');
var tabMenuEl = document.querySelector('#tab-menu');
var btnTabMenuEls = tabMenuEl.querySelectorAll('ul > li > a');
var tabContentEls = document.querySelectorAll('.tab-content');
var cuId = 0;
var exId = cuId;

btnTabMenuEls = Array.prototype.slice.call(btnTabMenuEls);

function onClickBtnTabMenuEls(idx, e) {
    e.preventDefault();
    if (exId !== idx) {
        btnTabMenuEls[exId].classList.remove('selected');
        tabContentEls[exId].classList.remove('selected');
        cuId = idx;
        btnTabMenuEls[cuId].classList.add('selected');
        tabContentEls[cuId].classList.add('selected');
        exId = cuId;
    }
    backgroundPeopleChange();
}

// var jopContent = document.querySelector('#job');
function backgroundPeopleChange() {
  if ($('#job').hasClass('selected')) {
    console.log('확인');
    $('.backgroundPeople').removeClass('on');
  } if(!$('#job').hasClass('selected')) {
    $('.backgroundPeople').addClass('on');
  }
}

function addEvent() {
    for(var i = 0; i < btnTabMenuEls.length; i++) {
        btnTabMenuEls[i].addEventListener('click', onClickBtnTabMenuEls.bind(null, i));
    }
}

function init() {
    addEvent();
}
init()