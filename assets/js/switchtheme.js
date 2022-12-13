$(document).ready(function () {
  const toggleSwitch = $(".mode-container");
  const bodyEl = $("body");
  let toggled = false;

  toggleSwitch.click(function () {
    toggled = !toggled;
    $("#switch-icon").toggleClass("fa-regular fa-sun fa-regular fa-moon");
    bodyEl.attr("data-theme", toggled ? "" : "dark");
  });
});
