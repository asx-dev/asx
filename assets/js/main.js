// Navigation
const openMenuButton = document.getElementById("open-button");
const closeMenuButton = document.getElementById("close-button");
const menu = document.querySelector(".mobile__menu");

openMenuButton.addEventListener("click", () => {
  menu.classList.add("open");
});

closeMenuButton.addEventListener("click", () => {
  menu.classList.remove("open");
});

// Up arrow
const upButton = document.querySelector(".up__arrow");

window.addEventListener("scroll", () => {
  window.scrollY > 50
    ? upButton.classList.add("show")
    : upButton.classList.remove("show");
});
