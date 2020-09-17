const navbar = document.querySelector(".navbar");

navbar.addEventListener("click", e => {
  console.log(e.target.classList);
  if (e.target.classList.contains("hamburger")) {
    navbar.classList.add("navbar--mobile");
  } else if (e.target.classList.contains("close")) {
    navbar.classList.remove("navbar--mobile");
  }
});
