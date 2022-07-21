console.log("연결");

var varWrap = document.querySelector(".var-wrap");
console.log(varWrap);

var article = document.querySelectorAll("article");

var move = 0;
var varDuration = 500;

var var03 = ((varWrap.offsetWidth / article.length) * (article.length - 1)) * -1;

function onscrollw(e) {
    if (e.wheelDelta < 0 && move > var03) {
    // console.log("마우스아래");
    move -= varDuration;
    if (move <= var03) {
        move = var03;
    }
    } else if(e.wheelDelta > 0 && move <= 0) {
        // console.log("마우스위");
        move += varDuration;
        if(move >= 0) {
            move = 0;
        }
    }
    varWrap.style.transition = "transform 0.5s linear";
    varWrap.style.transform = "translateX(" + move + "px)";
}

window.addEventListener("mousewheel", onscrollw);