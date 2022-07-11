var galleryEl = document.querySelector("#gallery"),
    viewEl = galleryEl.querySelector(".view"),
    viewContainerEl = viewEl.querySelector(".view-container"),
    viewItemEls = viewContainerEl.querySelectorAll(".view-item"),
    viewItemImgEls = viewContainerEl.querySelectorAll(".view-item > img"),
    listEl = galleryEl.querySelector(".list"),
    listItemEls = listEl.querySelectorAll("li"),
    btnListItemEls = listEl.querySelectorAll("li > a"),

    paddleNavEl = galleryEl.querySelector(".paddle-nav"),
    btnPaddleNavEls = paddleNavEl.querySelectorAll("button.arrow"),
    btnPaddleNavPrevEl = paddleNavEl.querySelector("button.arrow.prev"),
    btnPaddleNavNextEl = paddleNavEl.querySelector("button.arrow.next"),

    _isAni = false,
    _galleryW = null,
    _galleryH = null,
    _imgOW = 1600,
    _imgOH = 1000,
    _cuId = 0,
    _exId = null,
    _max = null,
    _duration = 400,
    _addDuration = 200;

btnListItemEls = Array.prototype.slice.call(btnListItemEls);
function onResize() {
    _galleryW = window.innerWidth;
    _galleryH = window.innerHeight;
    galleryResize();
}
function onTransitionEnd(e) {
    _isAni = false;
    viewContainerEl.style.removeProperty("transition");
}
function onClickListItem(e) {
    e.preventDefault();
    if(_isAni) return;
    var el = e.currentTarget, parentEl = el.parentElement, index = btnListItemEls.indexOf(el);
    if(!parentEl.classList.contains("selected")) {
        _cuId = index;
        gallerySlide();
    }
}
function onClickPaddleNav(e) {
    e.preventDefault();
    if(_isAni) return;
    var el = e.currentTarget;
    if(el.classList.contains("prev")) {
        _cuId--;
        if(_cuId < 0) _cuId = 0;
    }else if(el.classList.contains("next")) {
        _cuId++;
        if(_cuId > _max - 1) _cuId = _max - 1;
    }
    if(_exId !== _cuId) gallerySlide();
}
function getImageInfo(index) {
    var image = new Image();
    image.src = viewItemImgEls[index].getAttribute("src");
    image.onload = function() {
        viewItemImgEls[index].setAttribute("data-width", image.naturalWidth);
        viewItemImgEls[index].setAttribute("data-height", image.naturalHeight);
    }
}
function setPaddleActive() {
    if(_cuId === 0) {
        btnPaddleNavPrevEl.classList.add("disabled");
        btnPaddleNavNextEl.classList.remove("disabled");
    }else if(_cuId === _max - 1) {
        btnPaddleNavPrevEl.classList.remove("disabled");
        btnPaddleNavNextEl.classList.add("disabled");
    }else{
        btnPaddleNavPrevEl.classList.remove("disabled");
        btnPaddleNavNextEl.classList.remove("disabled");
    }
}
function setListActive() {
    listItemEls[_exId].classList.remove("selected");
    listItemEls[_cuId].classList.add("selected");
}
function gallerySlide(static) {
    var left = _galleryW * _cuId * -1,
        duration = _duration + _addDuration * Math.abs(_cuId - _exId),
        bool = (static) ? static : false;
    viewContainerEl.style.transform = "translate3d(" + left + "px, 0, 0)";
    if(!bool) {
        _isAni = true;
        setPaddleActive();
        setListActive();
        viewContainerEl.style.transition = "transform " + duration + "ms cubic-bezier(0.455, 0.03, 0.515, 0.955)";
        _exId = _cuId;
    }else{
        viewContainerEl.style.removeProperty("transition");
        _isAni = false;
    }
}
function galleryResize() {
    viewEl.style.width = _galleryW + "px";
    viewEl.style.height = _galleryH + "px";
    viewContainerEl.style.width = _galleryW * _max + "px";
    for(var i = 0; i < _max; i++) {
        viewItemEls[i].style.width = _galleryW + "px";
        var imgW, imgH, imgT, imgL;
        imgW = _galleryW;
        imgH = Math.round(_imgOH * imgW / _imgOW);
        if(imgH <= _galleryH) {
            imgH = _galleryH;
            imgW = Math.round(_imgOW * imgH / _imgOH);
        }
        imgT = Math.round(_galleryH / 2 - imgH / 2);
        imgL = Math.round(_galleryW / 2 - imgW / 2);
        viewItemImgEls[i].style.width = imgW + "px";
        viewItemImgEls[i].style.height = imgH + "px";
        viewItemImgEls[i].style.top = imgT + "px";
        viewItemImgEls[i].style.left = imgL + "px";
    }
    gallerySlide(true);
}
function addEvent() {
    window.addEventListener("resize", onResize);
    viewContainerEl.addEventListener("webkitTransitionEnd", onTransitionEnd);
    viewContainerEl.addEventListener("transitionend", onTransitionEnd);
    for(var i = 0; i < _max; i++) {
        getImageInfo(i);
        btnListItemEls[i].addEventListener("click", onClickListItem);
    }
    for(var j = 0; j < btnPaddleNavEls.length; j++) {
        btnPaddleNavEls[j].addEventListener("click", onClickPaddleNav);
    }
}
function init() {
    _max = viewItemEls.length;
    _exId = _cuId;
    setPaddleActive();
    addEvent();
    window.dispatchEvent(new Event('resize'));
}
init();