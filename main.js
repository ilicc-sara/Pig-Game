"use strict";
import "./style.css";

let player1;
let player2;
let currentScore1 = 0;
let currentScore2 = 0;
let score1 = 0;
let score2 = 0;

const rollDiceBtn = document.querySelector(".roll-btn");
const diceEl = document.querySelector(".dice");

const holdBtn = document.querySelector(".hold-btn");

const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const current1 = document.querySelector(".current-score-1");
const current2 = document.querySelector(".current-score-2");

const score1El = document.querySelector(".score1");
const score2El = document.querySelector(".score2");

let activePlayer = player1;

rollDiceBtn.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.textContent = dice;

  if (activePlayer === player1) {
    currentScore1 = currentScore1 + dice;
    current1.textContent = currentScore1;
  }

  if (activePlayer === player2) {
    currentScore2 = currentScore2 + dice;
    current2.textContent = currentScore2;
  }

  if (dice === 1 && activePlayer === player1) {
    currentScore1 = 0;
    current1.textContent = currentScore1;
    activePlayer = player2;
    screen2.classList.add("active");
    screen1.classList.remove("active");
  }

  if (dice === 1 && activePlayer === player2) {
    currentScore2 = 0;
    current2.textContent = currentScore2;
    activePlayer = player1;
    screen1.classList.add("active");
    screen2.classList.remove("active");
  }
});

holdBtn.addEventListener("click", function () {
  if (activePlayer === player1) {
    score1 = score1 + currentScore1;
    currentScore1 = 0;

    score1El.textContent = score1;
    current1.textContent = currentScore1;
  }

  if (activePlayer === player2) {
    score2 = score2 + currentScore2;
    currentScore1 = 0;

    score2El.textContent = score2;
    current2.textContent = currentScore2;
  }
});

// if (dice === 1) {
//   screen1.classList.toggle("active");
//   screen2.classList.toggle("active");
// }
