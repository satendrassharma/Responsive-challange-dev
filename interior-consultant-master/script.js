const hamburger = document.querySelector(".nav__hamburger");
const links = document.querySelector(".nav__links");
const NavClose = document.querySelector(".nav__close");

hamburger.addEventListener("click", () => {
  links.classList.toggle("nav__links--show");
});

NavClose.addEventListener("click", () => {
  links.classList.toggle("nav__links--show");
});
