function openForm() {
  document.getElementById("myForm").style.display = "block";
}

document.querySelector(".open-button").addEventListener("click", openForm);

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
document.querySelector(".cancel").addEventListener("click", closeForm);

function updateForm(i) {
  document.querySelectorAll(".updateForm")[i].style.display = "block";
}

let buttons = document.querySelectorAll(".updateFormButton");
console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    updateForm(+button.dataset.index);
  });
});

function closeUpdateForm(i) {
  document.querySelectorAll(".updateForm")[i].style.display = "none";
}

let closeUpdateFormBtns = document.querySelectorAll(".closeUpdateForm");

closeUpdateFormBtns.forEach((button) => {
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
document
  .querySelector(".closeNoteFormBtn")
  .addEventListener("click", closeNoteForm);
