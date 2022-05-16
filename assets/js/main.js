"use strict";
let numbers = document.querySelectorAll(".ratingStart__numbers-item");
const ratingStart__submit = document.getElementById("submit");
const ratingStart = document.getElementById("ratingStart");
const ratingEnd = document.getElementById("ratingEnd");
const ratingEnd__number = document.getElementById("ratingEnd__number");

let selected = "";
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].classList.remove("selected-number");
    }
    numbers[i].classList.add("selected-number");
    selected = i;
  });
}

ratingStart__submit.addEventListener("click", function () {
  ratingStart.classList.add("hidden");
  ratingEnd.classList.remove("hidden");
  ratingEnd__number.textContent = selected + 1;
});
