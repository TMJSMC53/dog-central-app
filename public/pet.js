function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function updateForm(i) {
  document.querySelectorAll(".updateForm")[i].style.display = "block";
}

function closeUpdateForm(i) {
  document.querySelectorAll(".updateForm")[i].style.display = "none";
}

function openNoteForm() {
  document.getElementById("addNote").style.display = "block";
}
function closeNoteForm() {
  document.getElementById("addNote").style.display = "none";
}
