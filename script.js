document.addEventListener("click", function (event) {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  // Check if the clicked element is NOT inside the navbar
  if (
    !navbarCollapse.contains(event.target) &&
    !navbarToggler.contains(event.target)
  ) {
    // Close the navbar if it's open
    if (navbarCollapse.classList.contains("show")) {
      navbarToggler.click();
    }
  }
});
