$('.sale').on('click', function() {
  $(this).addClass('active');
  $('.info').removeClass('active');
  $('.review').removeClass('active');
  $('.products').removeClass('active');
  $('.sale-area').addClass('on');
  $('.sale-area').removeClass('on');
  $('.info-area').removeClass('on');
  $('.review-area').removeClass('on');
  $('.products-area').removeClass('on');
})
$('.info').on('click', function() {
  $(this).addClass('active');
  $('.sale').removeClass('active');
  $('.review').removeClass('active');
  $('.products').removeClass('active');
  $('.info-area').addClass('on');
  $('.sale-area').addClass('on');
  $('.review-area').removeClass('on');
  $('.products-area').removeClass('on');
})
$('.review').on('click', function() {
  $(this).addClass('active');
  $('.sale').removeClass('active');
  $('.info').removeClass('active');
  $('.products').removeClass('active');
  $('.review-area').addClass('on');
  $('.sale-area').addClass('on');
  $('.info-area').removeClass('on');
  $('.products-area').removeClass('on');
})
$('.products').on('click', function() {
  $(this).addClass('active');
  $('.sale').removeClass('active');
  $('.info').removeClass('active');
  $('.review').removeClass('active');
  $('.products-area').addClass('on');
  $('.sale-area').addClass('on');
  $('.info-area').removeClass('on');
  $('.review-area').removeClass('on');
})
