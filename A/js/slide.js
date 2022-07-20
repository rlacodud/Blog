function slideReset() {
  $('.slide_one').removeClass('activeSlide');
  $('.slide_two').removeClass('activeSlide');
  $('.slide_three').removeClass('activeSlide');
  $('.slide_four').removeClass('activeSlide');
}

function slider() {
  $('#oneSlide').on('click', function() {
    slideReset();
    $('.slide_one').addClass('activeSlide');
    progressbar()
  })
  $('#twoSlide').on('click', function() {
    slideReset();
    $('.slide_two').addClass('activeSlide');
    progressbar()
  })
  $('#threeSlide').on('click', function() {
    slideReset();
    $('.slide_three').addClass('activeSlide');
    progressbar()
  })
  $('#fourSlide').on('click', function() {
    slideReset();
    $('.slide_four').addClass('activeSlide');
    progressbar()
  })

let slides = document.querySelectorAll(".slide"),
    slider = document.querySelector(".slider"),
    last = slider.lastElementChild,
    first = slider.firstElementChild

  slider.insertBefore(last, first);
  setInterval(function () { movement({ target: { id: "next" } }); }, 5000);
  setInterval(function () { progressbar({ target: { id: "next" } }); }, 5000);

  function movement(e) {
    slider = document.querySelector(".slider");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".activeSlide");

    if (e.target.id === "next") {
      slider.insertBefore(first, last.nextSibling);
      activeSlide.classList.remove("activeSlide");
      activeSlide.nextElementSibling.classList.add("activeSlide");
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("activeSlide");
      activeSlide.previousElementSibling.classList.add("activeSlide");
    }
  }

  function listReset() {
    $('.bottom-list li:nth-child(1)').removeClass("activeList");  
    $('.bottom-list li:nth-child(2)').removeClass("activeList");  
    $('.bottom-list li:nth-child(3)').removeClass("activeList");  
    $('.bottom-list li:nth-child(4)').removeClass("activeList");  
  }

  function progressbar () {
    if($('.slide_one').hasClass('activeSlide')) {
      listReset();
      $('.bottom-list li:nth-child(1)').addClass("activeList");  
    } else if($('.slide_two').hasClass('activeSlide')) {
      listReset();
      $('.bottom-list li:nth-child(2)').addClass("activeList");  
    } else if($('.slide_three').hasClass('activeSlide')) {
      listReset();
      $('.bottom-list li:nth-child(3)').addClass("activeList");  
    } else if($('.slide_four').hasClass('activeSlide')) {
      listReset();
      $('.bottom-list li:nth-child(4)').addClass("activeList");  
    }
  }
  progressbar();
}

slider();