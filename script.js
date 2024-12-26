let navDialog = document.getElementById("nav-dialog");
function handleMenu() {
  navDialog.classList.toggle("hidden");
}

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const menuIcon = document.getElementById("menu-icon");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
  menuIcon.classList.toggle("fa-bars");
  menuIcon.classList.toggle("fa-xmark");
});

const navBar = document.getElementById("red-nabar");
