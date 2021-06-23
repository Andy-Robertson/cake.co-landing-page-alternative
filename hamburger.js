const hamburger = document.getElementById("navbar-hamburger-menu");
const fullMenu = document.getElementById("navbar-full-menu");

hamburger.addEventListener("click", () => {
  fullMenu.classList.toggle("show");
});
