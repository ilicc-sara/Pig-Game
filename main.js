"use strict";
import "./style.css";
const diceEl = document.querySelector(".dice");
const rollBtnEl = document.querySelector(".roll-btn");

const holdBtnEl = document.querySelector(".hold-btn");

const newGameEl = document.querySelector(".new-game-btn");

const score1El = document.querySelector(".score-1");
const score2El = document.querySelector(".score-2");

const currentScore1El = document.querySelector(".current-score-1");
const currentScore2El = document.querySelector(".current-score-2");

const player1El = document.querySelector(".player-1");
const player2El = document.querySelector(".player-2");

let player1 = 0;
let player2 = 1;

let score1 = 0;
let score2 = 0;

let currentScore1 = 0;
let currentScore2 = 0;

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

const rollFunction = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.textContent = dice;

  if (activePlayer === player2) {
    console.log(activePlayer);
    currentScore2 = currentScore2 + dice;
    currentScore2El.textContent = currentScore2;
  } else if (activePlayer === player1) {
    console.log(activePlayer);
    currentScore1 = currentScore1 + dice;
    currentScore1El.textContent = currentScore1;
  }

  if (dice === 1) {
    if (activePlayer === player1) {
      currentScore1 = 0;
      currentScore1El.textContent = currentScore1;
    } else if (activePlayer === player2) {
      currentScore2 = 0;
      currentScore2El.textContent = currentScore2;
    }
    switchPlayer();
  }
};

rollBtnEl.addEventListener("click", rollFunction);

const holdFunction = function () {
  if (activePlayer === player1) {
    score1 = score1 + currentScore1;
    currentScore1 = 0;

    score1El.textContent = score1;
    currentScore1El.textContent = 0;
    switchPlayer();
  } else if (activePlayer === player2) {
    score2 = score2 + currentScore2;
    currentScore1 = 0;

    score2El.textContent = score2;
    currentScore2El.textContent = 0;
    switchPlayer();
  }

  if (score1 > 50 || score2 > 50) {
    rollBtnEl.removeEventListener("click", rollFunction);
    holdBtnEl.removeEventListener("click", holdFunction);
    diceEl.textContent = "";

    if (score1 > 50 && score2 < 50) {
      if (!player1El.classList.contains("active")) {
        player1El.classList.add("active");
        player2El.classList.remove("active");
      }
    } else if (score2 > 50 && score1 < 50) {
      if (!player2El.classList.contains("active")) {
        player2El.classList.add("active");
        player1El.classList.remove("active");
      }
    }
  }
};

holdBtnEl.addEventListener("click", holdFunction);

newGameEl.addEventListener("click", function () {
  score1 = 0;
  score2 = 0;
  score1El.textContent = score1;
  score2El.textContent = score2;

  currentScore1 = 0;
  currentScore2 = 0;
  currentScore1El.textContent = currentScore1;
  currentScore2El.textContent = currentScore2;

  diceEl.textContent = "";
  activePlayer = player1;
  if (!player1El.classList.contains("active")) {
    player1El.classList.add("active");
    player2El.classList.remove("active");
  }

  rollBtnEl.addEventListener("click", rollFunction);
  holdBtnEl.addEventListener("click", holdFunction);
});
