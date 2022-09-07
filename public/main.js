const overlay = document.getElementById("overlay");
const sidebar = document.getElementById("sidebar");

const menuOpen = document.querySelector(".menu__open");
const menuClose = document.querySelector(".menu__close");

// open/close hamburger menu
menuOpen.addEventListener("click", () => {
  sidebar.classList.remove("hidden");
  sidebar.classList.add("show");
  overlay.classList.remove("hidden");
  menuOpen.classList.add("hidden");
});

menuClose.addEventListener("click", () => {
  sidebar.classList.add("hidden");
  overlay.classList.add("hidden");
  menuOpen.classList.remove("hidden");
});
