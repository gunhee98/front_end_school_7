const timerBtn = document.querySelectorAll(".timer-input button");

timerBtn.forEach((e) => {
  e.addEventListener("click", (e) => {
    e.target.textContent = parseInt(e.target.textContent) + 10;
    console.dir(e.target);
  });
});
