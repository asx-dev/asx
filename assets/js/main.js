// Nav Menu Logic
const openMenuButton = document.getElementById("open-button");
const closeMenuButton = document.getElementById("close-button");
const menu = document.querySelector(".nav");

openMenuButton.addEventListener("click", () => {
  menu.classList.add("open");
});

closeMenuButton.addEventListener("click", () => {
  menu.classList.remove("open");
});
