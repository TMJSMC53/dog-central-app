const form = document.querySelector("form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const display = document.querySelector(".error");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  display.textContent = "";
  try {
    const res = await fetch("/auth/register", {
      method: "POST",
      body: JSON.stringify({
        firstName: firstName.value,
        lastName: lastName.value,
        username: username.value,
        password: password.value,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 400 || res.status === 401) {
      return (display.textContent = `${data.message}. ${
        data.error ? data.error : ""
      }`);
    }
    // data.role === "admin"
    //   ? location.assign("/admin")
    //   : location.assign("/basic");
  } catch (err) {
    console.log(err.message);
  }
});
