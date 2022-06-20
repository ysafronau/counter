const decreaseBtn = document.querySelector(".btn-decrease");
const resetBtn = document.querySelector(".btn-reset");
const increaseBtn = document.querySelector(".btn-increase");
const countText = document.querySelector(".count");

let count = 0;

function addColor(count) {
  if (count > 0) countText.style.color = "green";
  if (count < 0) countText.style.color = "red";
  if (count === 0) countText.style.color = "black";
  displayCount(count);
}

function displayCount(count) {
  countText.textContent = count;
}

decreaseBtn.addEventListener("click", () => {
  count--;
  addColor(count);
});

increaseBtn.addEventListener("click", () => {
  count++;
  addColor(count);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  addColor(count);
});
