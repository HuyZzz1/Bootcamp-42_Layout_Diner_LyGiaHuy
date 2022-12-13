$(document).ready(function () {
  const triggerBtn = $("#trigger-overlay");
  const overlay = $(".overlay");
  const closeBtn = $(".overlay-close");

  triggerBtn.click(function () {
    overlay.toggleClass("open");
  });
  closeBtn.click(function () {
    overlay.toggleClass("open");
  });
});
