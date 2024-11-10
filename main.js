"use strict";
import "./style.css";

let player1;
let player2;
let currentScore1 = 0;
let currentScore2;
let score1;
let score2;

const rollDiceBtn = document.querySelector(".roll-btn");
const diceEl = document.querySelector(".dice");

const screen1 = document.querySelector(".screen-1");
const screen2 = document.querySelector(".screen-2");

const current1 = document.querySelector(".current-score-1");
const current2 = document.querySelector(".current-score-2");

let activePlayer = player1;

rollDiceBtn.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  diceEl.textContent = dice;

  if (dice === 1) {
    screen1.classList.toggle("active");
    screen2.classList.toggle("active");
  }
});
