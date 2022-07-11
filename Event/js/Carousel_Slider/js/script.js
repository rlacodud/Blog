var sliderWrapper = document.querySelector('.slider_wrapper'),
    sliderUl = sliderWrapper.querySelector('.slides'),
    slides = sliderUl.querySelectorAll('li'),
    currentIdx = 0,
    slideCount = slides.length,
    slideWidth = 300,
    slideMargin = 30,
    prevBtn = document.querySelector('#prev'),
    nextBtn = document.querySelector('#next');

//슬라이드 배치 0 left0,1 330, 2 660    
// for(i=0;i<slideCount;i++){
//     slides[i].style.left = 330*i + 'px';
// }
sliderUl.style.width = (slideWidth*slideCount) + slideMargin*(slideCount-1) + 'px';

//슬라이드 이동함수
function moveSlide(idx){
    sliderUl.style.left = -idx * (slideWidth + slideMargin)+'px';
    currentIdx = idx;
}
//moveSlide(1);
//버튼으로 이동하기
nextBtn.addEventListener('click',function(){
    if(currentIdx == slideCount - 5){
        moveSlide(0);
    }else{
        moveSlide(currentIdx + 1);
    }
});
prevBtn.addEventListener('click',function(){
    if(currentIdx == 0){
        moveSlide(slideCount - 5);
    }else{
        moveSlide(currentIdx - 1);
    }
});