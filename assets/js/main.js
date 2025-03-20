// Navigation
const openMenuButton = document.getElementById("open-button");
const closeMenuButton = document.getElementById("close-button");
const menu = document.querySelector(".mobile__menu");
const navLinks = document.querySelectorAll(".mobile__nav-list .nav__link");

openMenuButton.addEventListener("click", () => {
  menu.classList.add("open");
});

closeMenuButton.addEventListener("click", () => {
  menu.classList.remove("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
  });
});

// Up arrow
const upButton = document.querySelector(".up__arrow");

window.addEventListener("scroll", () => {
  window.scrollY > 50
    ? upButton.classList.add("show")
    : upButton.classList.remove("show");
});

// Skill Icons Responsive
const skillsIcons = document.querySelector(".skills__icons");

const iconsMobileDesign =
  "https://skillicons.dev/icons?i=html,css,javascript,vite,react,redux,tailwind,bootstrap,nodejs,express,mongodb,postman,git,github,vscode,netlify,appwrite&perline=5";
const iconsDesktopDesign =
  "https://skillicons.dev/icons?i=html,css,javascript,vite,react,redux,tailwind,bootstrap,nodejs,express,mongodb,postman,git,github,vscode,netlify,appwrite&perline=13";

function updateIcons() {
  const width = window.innerWidth;
  width < 600
    ? (skillsIcons.src = iconsMobileDesign)
    : (skillsIcons.src = iconsDesktopDesign);
}

updateIcons();

window.addEventListener("resize", updateIcons);
