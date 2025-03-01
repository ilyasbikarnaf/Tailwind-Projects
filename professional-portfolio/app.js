const nav = document.querySelector(".nav");
const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("close");
  nav.classList.toggle("open");
});