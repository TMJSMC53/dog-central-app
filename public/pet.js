// const form = document.querySelector("form");
// const name = document.querySelector("#petName");
// const breed = document.querySelector("#breed");
// const birthday = document.querySelector("#birthday");
// const image = document.querySelector("#image");
// const weight = document.querySelector("#weight");
// const display = document.querySelector(".error");

// form.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   display.textContent = "";

//   try {
//     console.log({
//       name: petName.value,
//       breed: breed.value,
//       birthday: birthday.value,
//       image: image.value,
//       weight: weight.value,
//     });
//     const res = await fetch("/auth/pet", {
//       method: "POST",
//       body: JSON.stringify({
//         name: petName.value,
//         breed: breed.value,
//         birthday: birthday.value,
//         image: image.value,
//         weight: weight.value,
//       }),

//       headers: { "Content-Type": "application/json" },
//     });
//     console.log(petName);
//     console.log(res.json());
//     console.log(res.body);
//     const data = await res.json();
//     console.log(data);
//     if (res.status === 400 || res.status === 401) {
//       return (display.textContent = `${data.message}. ${
//         data.error ? data.error : ""
//       }`);
//     }
//     location.assign("/auth/dashboard");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
