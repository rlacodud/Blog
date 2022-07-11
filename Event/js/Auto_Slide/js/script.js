function slider() {
  let slides = document.querySelectorAll(".slide"),
    slider = document.querySelector(".slider"),
    last = slider.lastElementChild,
    first = slider.firstElementChild,
    btn = document.querySelectorAll(".btn");

  slider.insertBefore(last, first);

  btn.forEach(btn => {
    btn.addEventListener("click", movement);
  });
  setInterval(function()
  {
      movement({target:{id:"next"}});
  }, 3000);
  function movement(e) {
    slider = document.querySelector(".slider");
    last = slider.lastElementChild;
    first = slider.firstElementChild;

    const activeSlide = document.querySelector(".active");

    if (e.target.id === "next") {
      slider.insertBefore(first, last.nextSibling);

      activeSlide.classList.remove("active");
      activeSlide.nextElementSibling.classList.add("active");
    } else {
      slider.insertBefore(last, first);
      activeSlide.classList.remove("active");
      activeSlide.previousElementSibling.classList.add("active");
    }
  }
}
slider();