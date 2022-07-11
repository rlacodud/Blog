console.log("연결");

var varWrap = document.querySelector(".var-wrap");
console.log(varWrap);

var article = document.querySelectorAll("article");

console.log(article);
var varnumber = 0;
var varDuration = 300;

var var03 = ((varWrap.offsetWidth / article.length) * (article.length - 1)) * -1;

function onscrollw(e) {
    if (e.wheelDelta < 0 && varnumber > var03) {
    console.log("마우스아래");
    varnumber -= varDuration;
    if (varnumber <= var03) {
        varnumber = var03;
    }
    } else if(e.wheelDelta > 0 && varnumber < 0) {
        console.log("마우스위");
        varnumber += varDuration;
    }
    varWrap.style.transition = "transform 0.6s linear";
    varWrap.style.transform = "translateX(" + varnumber + "px)";
}

window.addEventListener("mousewheel", onscrollw);