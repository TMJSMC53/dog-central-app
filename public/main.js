const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const modalClose = document.querySelector(".modal");
const loginModal = document.querySelector("#login-modal");
const closeModalBtn = document.querySelector(".close-modal");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// CLose the modal button on the login/signup pages
function closeModal() {
  modalClose.classList.add("close");
  loginModal.style.display = "none";
}

closeModalBtn.addEventListener("click", closeModal);
