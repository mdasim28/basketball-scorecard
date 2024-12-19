"use strict";

const homeScore = document.querySelectorAll(".home-score");
const guestScore = document.querySelectorAll(".guest-score");

let sumOfHomeScore = 0;

function updateHomeScore(increment) {
  sumOfHomeScore += increment;
  homeScore[0].textContent = sumOfHomeScore;
}

let sumOfGuestScore = 0;

function updateGuestScore(increment) {
  sumOfGuestScore += increment;
  guestScore[0].textContent = sumOfGuestScore;
}
