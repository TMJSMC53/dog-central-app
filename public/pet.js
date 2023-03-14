function openForm() {
  document.getElementById("myForm").style.display = "block";
}

document.querySelector(".open-button").addEventListener("click", openForm);

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
document.querySelector(".cancel").addEventListener("click", closeForm);

function updateForm() {
  document.querySelectorAll(".updateForm")[i].style.display = "block";
}

document.querySelectorAll(".updateForm").forEach((button) => {
  button.addEventListener("click", () => {
    updateForm(+button.dataset.index);
  });
});

function closeUpdateForm(i) {
  document.querySelectorAll(".updateForm")[i].style.display = "none";
}

document.querySelectorAll(".closeUpdateForm").forEach((button) => {
  button.addEventListener("click", () => {
    closeUpdateForm(+button.dataset.index);
  });
});

function openNoteForm() {
  document.getElementById("addNote").style.display = "block";
}

document.querySelector(".note-button").addEventListener("click", openNoteForm);

function closeNoteForm() {
  document.getElementById("addNote").style.display = "none";
}
document.querySelector(".cancel").addEventListener("click", closeNoteForm);
