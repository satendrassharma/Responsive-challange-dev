const navbar = document.querySelector(".navbar");

navbar.addEventListener("click", e => {
  console.dir(e.target);

  if (e.target.classList.contains("hamburger")) {
    navbar.classList.add("navbar--mobile");
  } else if (
    e.target.classList.contains("close") ||
    e.target.classList.contains("link") ||
    e.target.tagName === "A"
  ) {
    navbar.classList.remove("navbar--mobile");
  }
});
