var controller = new ScrollMagic.Controller();

// text animation ------------------------------------------------------------------------------------------------------------------------------------------------------

var textLine =['.text1','.text1','.text1','.text1','.text2','.text2','.text2','.text2','.text3','.text3','.text3','.text4','.text4','.text4','.text4'];
var texts =['text1_1', 'text1_2', 'text1_3', 'text1_4', 'text2_1', 'text2_2', 'text2_3', 'text2_4', 'text3_1', 'text3_2', 'text3_3', 'text4_1', 'text4_2', 'text4_3', 'text4_4'];
var ps = ['.p1', '.p2', '.p3', '.p4', '.p1', '.p2', '.p3', '.p4', '.p1', '.p2', '.p3', '.p1', '.p2', '.p3', '.p4'];
var delayTime = 1;

for(var i=0; i<$('.text p').length; i++){
  texts[i] = new TimelineMax();
  texts[i].to($('.section2 .textBox ' + textLine[i] +' '+ ps[i]), 1, {opacity: 1, delay: delayTime, animationName: 'upAni'})
var scene = new ScrollMagic.Scene({
  triggerElement: '.section2',
  triggerHook: 0.8
})
  .reverse(false)
  .setTween(texts[i])
  .addTo(controller);  
  delayTime = delayTime + 0.025;
}



// image animation ------------------------------------------------------------------------------------------------------------------------------------------------------

var images = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8']
var imageClass = ['.image1', '.image2', '.image3', '.image4', '.image5', '.image6', '.image7', '.image8']
var imgDelayTime = 2;

for(var i=0; i<$('.image').length;i++){
  console.log(images[i])
  images[i] = new TimelineMax();
  images[i].to($('.section3 .imageBox '+ imageClass[i] +' img'), 1, {opacity: 0, delay: imgDelayTime, animationName: 'imgUpAni'})
  var scene = new ScrollMagic.Scene({
    triggerElement: '.section3',
    triggerHook: 0.8
  })
    .reverse(false)
    .setTween(images[i])
    .addTo(controller);
    imgDelayTime = imgDelayTime + 0.05;
}