const scrollHack = document.querySelector(".scrollhack");
const section = document.querySelectorAll(".section");
const container = document.querySelector(".container__zoom");

//scrollHack.style.height=( section[0].clientHeight*section.length+'px');
scrollHack.style.height=(section.length*1000)+'px';

window.addEventListener('scroll', function(e){
  let scroll = window.scrollY;
  
  
  
  container.style.transform = 'translateZ('+scroll+'px)';
  
  
  console.log(container);
});