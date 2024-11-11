"use strict";
import "./style.css";

let player1 = 0;
let player2 = 1;

let score1 = 0;
let score2 = 0;

let currentScore1;
let currentScore2;

const diceEl = document.querySelector(".dice");
const rollBtnEl = document.querySelector(".roll-btn");

const score1El = document.querySelector(".current-score-0");
const score2El = document.querySelector(".current-score-1");

const player1El = document.querySelector(".player-0");
const player2El = document.querySelector(".player-1");

let activePlayer = player1;

const switchPlayer = function () {
  if (activePlayer === player1) {
    activePlayer = player2;
    player1El.classList.toggle("active");
    player2El.classList.toggle("active");
  } else if (activePlayer === player2) {
    activePlayer = player1;
    player1El.classList.toggle("active");
    player2El.classList.toggle("active");
  }
};

rollBtnEl.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.textContent = dice;

  if (activePlayer === player2) {
    console.log(activePlayer);
    score2 = score2 + dice;
    score2El.textContent = score2;
  }

  if (activePlayer === player1) {
    console.log(activePlayer);
    score1 = score1 + dice;
    score1El.textContent = score1;
  }

  if (dice === 1) {
    if (activePlayer === player1) {
      score1 = 0;
      score1El.textContent = score1;
    } else if (activePlayer === player2) {
      score2 = 0;
      score2El.textContent = score2;
    }
    switchPlayer();
  }
});
