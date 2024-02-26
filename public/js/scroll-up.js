//=======SCROLL BUTTON=======
document
  .querySelector(".fp__scroll_btn")
  .addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

window.addEventListener("scroll", function () {
  var scrolling = window.scrollY;

  var scrollButton = document.querySelector(".fp__scroll_btn");
  if (scrollButton) {
    if (scrolling > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  }
});
