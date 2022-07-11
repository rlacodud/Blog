function scrollTextMove() {
  var convertPx = {
    vw: function (px) {
      px = parseFloat(px);
      var ww = $(window).width();
  
      return ww * px / 1920;
    }
  }
  var height = $("body").height();
  var contentsContainerHeight = jQuery('#section1 .contentsContainer').height();
  let translateY = Math.ceil(($(window).scrollTop() / height * 1) * 100)/5.33;
  console.log(translateY);
  if ($(window).scrollTop() > 0 && $(window).scrollTop() < contentsContainerHeight) {
      $('#section1 .contentsContainer .textContainer .textContents .text').css({'transform': 'translateY(' + -translateY + '%)'})
    }
}

$(window).scroll(function () {
  scrollTextMove();
})