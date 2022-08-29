const form = document.querySelector("form");
const name = document.querySelector("#petName");
const breed = document.querySelector("#breed");
const birthday = document.querySelector("#birthday");
const image = document.querySelector("#image");
const weight = document.querySelector("#weight");
const display = document.querySelector(".error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  display.textContent = "";

  try {
    const res = await fetch("/auth/pet", {
      method: "POST",
      body: JSON.stringify({
        name: petName.value,
        breed: breed.value,
        birthday: birthday.value,
        image: image.value,
        weight: weight.value,
      }),

      headers: { "Content-Type": "application/json" },
    });
    console.log(petName);
    const data = await res.json();
    console.log(data);
    if (res.status === 400 || res.status === 401) {
      return (display.textContent = `${data.message}. ${
        data.error ? data.error : ""
      }`);
    }
    location.assign("/auth/dashboard");
  } catch (err) {
    console.log(err.message);
  }
});
