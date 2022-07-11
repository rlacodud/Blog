var circle = document.querySelector(".circle");
console.log("연결");

function circleT(e){
    e.preventDefault();
    circle.classList.toggle("on");
}

circle.addEventListener("click", circleT);