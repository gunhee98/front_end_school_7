const loginForm = document.querySelector(".login-form");
const textId = document.querySelector(".text-id");
const inputId = document.querySelector("#id");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputId.value === "") {
    console.log("hello");
    textId.classList.add("show");
  }
});
if (inputId.value !== "") {
  textId.classList.remove("show");
}
