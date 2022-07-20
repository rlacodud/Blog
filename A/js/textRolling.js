let rollingTxtWrap = jQuery('.text .centerText .rolling');
let rollingTxts = jQuery('.text .centerText .rolling span');

function mainRollingTxt() {
  if (rollingTxtWrap.children().eq(0).hasClass('active')) {
    rollingTxts.removeClass('active');
    rollingTxts.removeClass('activeNext');
    rollingTxtWrap.children().eq(0).addClass('activeNext');
    rollingTxtWrap.children().eq(1).addClass('active');
  } else if (rollingTxtWrap.children().eq(1).hasClass('active')) {
    rollingTxts.removeClass('active');
    rollingTxts.removeClass('activeNext');
    rollingTxtWrap.children().eq(1).addClass('activeNext');
    rollingTxtWrap.children().eq(2).addClass('active');
    rollingTxtWrap.children().eq(0).addClass('activeReset');
  } else if (rollingTxtWrap.children().eq(2).hasClass('active')) {
    rollingTxts.removeClass('active');
    rollingTxts.removeClass('activeNext');
    rollingTxtWrap.children().eq(2).addClass('activeNext');
    rollingTxtWrap.children().eq(3).addClass('active');
    rollingTxtWrap.children().eq(1).addClass('activeReset');
  }  else if (rollingTxtWrap.children().eq(3).hasClass('active')) {
    rollingTxts.removeClass('active');
    rollingTxts.removeClass('activeNext');
    rollingTxts.removeClass('activeReset');
    rollingTxtWrap.children().eq(3).addClass('activeNext');
    rollingTxtWrap.children().eq(0).addClass('active');
  }
}
let txtRolling = window.setInterval(mainRollingTxt, 3000);

// ----

let backRollingTxtWrap1 = jQuery('.slide_one .backText .centerText .rolling');
let backRollingTxts1 = jQuery('.slide_one .backText .centerText .rolling span');

function backRollingTxt1() {
  if (backRollingTxtWrap1.children().eq(0).hasClass('active')) {
    backRollingTxts1.removeClass('active');
    backRollingTxts1.removeClass('activeNext');
    backRollingTxtWrap1.children().eq(0).addClass('activeNext');
    backRollingTxtWrap1.children().eq(1).addClass('active');
  } else if (backRollingTxtWrap1.children().eq(1).hasClass('active')) {
    backRollingTxts1.removeClass('active');
    backRollingTxts1.removeClass('activeNext');
    backRollingTxtWrap1.children().eq(1).addClass('activeNext');
    backRollingTxtWrap1.children().eq(2).addClass('active');
    backRollingTxtWrap1.children().eq(0).addClass('activeReset');
  } else if (backRollingTxtWrap1.children().eq(2).hasClass('active')) {
    backRollingTxts1.removeClass('active');
    backRollingTxts1.removeClass('activeNext');
    backRollingTxtWrap1.children().eq(2).addClass('activeNext');
    backRollingTxtWrap1.children().eq(3).addClass('active');
    backRollingTxtWrap1.children().eq(1).addClass('activeReset');
  }  else if (backRollingTxtWrap1.children().eq(3).hasClass('active')) {
    backRollingTxts1.removeClass('active');
    backRollingTxts1.removeClass('activeNext');
    backRollingTxts1.removeClass('activeReset');
    backRollingTxtWrap1.children().eq(3).addClass('activeNext');
    backRollingTxtWrap1.children().eq(0).addClass('active');
  }
}
let backTxtRolling1 = window.setInterval(backRollingTxt1, 3000);

// ----

let backRollingTxtWrap2 = jQuery('.slide_two .backText .centerText .rolling');
let RollingTxt2 = jQuery('.slide_two .backText .centerText .rolling span');

function backRollingTxt2() {
  if (backRollingTxtWrap2.children().eq(0).hasClass('active')) {
    RollingTxt2.removeClass('active');
    RollingTxt2.removeClass('activeNext');
    backRollingTxtWrap2.children().eq(0).addClass('activeNext');
    backRollingTxtWrap2.children().eq(1).addClass('active');
  } else if (backRollingTxtWrap2.children().eq(1).hasClass('active')) {
    RollingTxt2.removeClass('active');
    RollingTxt2.removeClass('activeNext');
    backRollingTxtWrap2.children().eq(1).addClass('activeNext');
    backRollingTxtWrap2.children().eq(2).addClass('active');
    backRollingTxtWrap2.children().eq(0).addClass('activeReset');
  } else if (backRollingTxtWrap2.children().eq(2).hasClass('active')) {
    RollingTxt2.removeClass('active');
    RollingTxt2.removeClass('activeNext');
    backRollingTxtWrap2.children().eq(2).addClass('activeNext');
    backRollingTxtWrap2.children().eq(3).addClass('active');
    backRollingTxtWrap2.children().eq(1).addClass('activeReset');
  }  else if (backRollingTxtWrap2.children().eq(3).hasClass('active')) {
    RollingTxt2.removeClass('active');
    RollingTxt2.removeClass('activeNext');
    RollingTxt2.removeClass('activeReset');
    backRollingTxtWrap2.children().eq(3).addClass('activeNext');
    backRollingTxtWrap2.children().eq(0).addClass('active');
  }
}
let backTxtRolling2 = window.setInterval(backRollingTxt2, 3000);

// ----

let backRollingTxtWrap3 = jQuery('.slide_three .backText .centerText .rolling');
let rollingTxt3 = jQuery('.slide_three .backText .centerText .rolling span');

function backRollingTxt3() {
  if (backRollingTxtWrap3.children().eq(0).hasClass('active')) {
    rollingTxt3.removeClass('active');
    rollingTxt3.removeClass('activeNext');
    backRollingTxtWrap3.children().eq(0).addClass('activeNext');
    backRollingTxtWrap3.children().eq(1).addClass('active');
  } else if (backRollingTxtWrap3.children().eq(1).hasClass('active')) {
    rollingTxt3.removeClass('active');
    rollingTxt3.removeClass('activeNext');
    backRollingTxtWrap3.children().eq(1).addClass('activeNext');
    backRollingTxtWrap3.children().eq(2).addClass('active');
    backRollingTxtWrap3.children().eq(0).addClass('activeReset');
  } else if (backRollingTxtWrap3.children().eq(2).hasClass('active')) {
    rollingTxt3.removeClass('active');
    rollingTxt3.removeClass('activeNext');
    backRollingTxtWrap3.children().eq(2).addClass('activeNext');
    backRollingTxtWrap3.children().eq(3).addClass('active');
    backRollingTxtWrap3.children().eq(1).addClass('activeReset');
  }  else if (backRollingTxtWrap3.children().eq(3).hasClass('active')) {
    rollingTxt3.removeClass('active');
    rollingTxt3.removeClass('activeNext');
    rollingTxt3.removeClass('activeReset');
    backRollingTxtWrap3.children().eq(3).addClass('activeNext');
    backRollingTxtWrap3.children().eq(0).addClass('active');
  }
}
let backTxtRolling3 = window.setInterval(backRollingTxt3, 3000);

// ----

let backRollingTxtWrap4 = jQuery('.slide_four .backText .centerText .rolling');
let rollingTxt4 = jQuery('.slide_four .backText .centerText .rolling span');

function backRollingTxt4() {
  if (backRollingTxtWrap4.children().eq(0).hasClass('active')) {
    rollingTxt4.removeClass('active');
    rollingTxt4.removeClass('activeNext');
    backRollingTxtWrap4.children().eq(0).addClass('activeNext');
    backRollingTxtWrap4.children().eq(1).addClass('active');
  } else if (backRollingTxtWrap4.children().eq(1).hasClass('active')) {
    rollingTxt4.removeClass('active');
    rollingTxt4.removeClass('activeNext');
    backRollingTxtWrap4.children().eq(1).addClass('activeNext');
    backRollingTxtWrap4.children().eq(2).addClass('active');
    backRollingTxtWrap4.children().eq(0).addClass('activeReset');
  } else if (backRollingTxtWrap4.children().eq(2).hasClass('active')) {
    rollingTxt4.removeClass('active');
    rollingTxt4.removeClass('activeNext');
    backRollingTxtWrap4.children().eq(2).addClass('activeNext');
    backRollingTxtWrap4.children().eq(3).addClass('active');
    backRollingTxtWrap4.children().eq(1).addClass('activeReset');
  }  else if (backRollingTxtWrap4.children().eq(3).hasClass('active')) {
    rollingTxt4.removeClass('active');
    rollingTxt4.removeClass('activeNext');
    rollingTxt4.removeClass('activeReset');
    backRollingTxtWrap4.children().eq(3).addClass('activeNext');
    backRollingTxtWrap4.children().eq(0).addClass('active');
  }
}

let backTxtRolling4 = window.setInterval(backRollingTxt4, 3000);