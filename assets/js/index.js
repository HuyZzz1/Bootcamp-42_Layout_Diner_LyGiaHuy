$(document).ready(function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#toTop").fadeIn();
    } else {
      $("#toTop").fadeOut();
    }
  });
  $("#toTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });
});
