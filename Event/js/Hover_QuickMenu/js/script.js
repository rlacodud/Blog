$(".float-menu #quote").on('click', function() {
  $('.dropup-content').toggleClass("on");
  $(this).toggleClass('on');
});
$(".dropup-content .quick").on('mouseover', function() {
  $(this).addClass('on');
  $(this).find('.icon').addClass('on');
});
$(".dropup-content .quick").on('mouseout', function() {
  $(this).removeClass('on');
  $(this).find('.icon').removeClass('on');
});