$('.down').on('click', function() {
  $(this).parent('.text-info').addClass('off');
  $('.info').addClass('active');
  $('.review').removeClass('active');
  $('.tab-menu-container').addClass('on');
  $('.info-container').addClass('on');
  $('.number.on').removeClass('on');
})
$('.info').on('click', function() {
  $(this).addClass('active');
  $('.review').removeClass('active');
  $('.review-image.on').removeClass('on');
  $('.info-container').addClass('on');
  $('.number.on').removeClass('on');
})
$('.review').on('click', function() {
  $(this).addClass('active');
  $('.info').removeClass('active');
  $('.review-image').addClass('on');
  $('.info-container.on').removeClass('on');
  $('.number').addClass('on');
})
$('.tab-menu-container .right .up').on('click', function() {
  $('.contents-container .text-info.off').removeClass('off');
  $('.tab-menu-container.on').removeClass('on');
  $('.info-container.on').removeClass('on');
  $('.review-image.on').removeClass('on');
})