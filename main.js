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

// const switchPlayer = function () {
//   if (activePlayer === player1) {
//     activePlayer = player2;
//     player1El.classList.toggle("active");
//     player2El.classList.toggle("active");
//   } else if (activePlayer === player2) {
//     activePlayer = player1;
//     player1El.classList.toggle("active");
//     player2El.classList.toggle("active");
//   }
// };

const gameGenerator = function () {
  // let player1 = 0;
  // let player2 = 1;

  let score1 = 0;
  let score2 = 0;

  let currentScore1 = 0;
  let currentScore2 = 0;
  let activePlayer = "player1";

  // const getPlayer1 = () => player1;
  // const getPlayer2 = () => player2;

  const getScore1 = () => score1;
  const getScore2 = () => score2;

  const getCurrentScore1 = () => currentScore1;
  const getCurrentScore2 = () => currentScore2;

  const getActivePlayer = () => activePlayer;

  const switchActivePlayer = () =>
    activePlayer === "player1" ? "player2" : "player1";

  const increaseCurrentScore1 = (num) => (score1 += num);
  const increaseCurrentScore2 = (num) => (score2 += num);

  const resetCurrentScore1 = () => (score1 = 0);
  const resetCurrentScore2 = () => (score2 = 0);

  // prettier-ignore
  return { getScore1, getScore2, getCurrentScore1, getCurrentScore2, getActivePlayer, switchActivePlayer, 
    increaseCurrentScore1, increaseCurrentScore2, resetCurrentScore1, resetCurrentScore2}
};

const game = gameGenerator();

// const switchPlayer = function () {
//   activePlayer = activePlayer === player1 ? player2 : player1;
//   // updateUI(activePlayer)
// };

const rollFunction = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  diceEl.textContent = dice;

  if (game.getActivePlayer() === "player2") {
    game.increaseCurrentScore2(dice);
  } else if (game.getActivePlayer() === "player1") {
    game.increaseCurrentScore1(dice);
  }

  if (dice === 1) {
    if (game.getActivePlayer() === "player1") {
      game.resetCurrentScore1();
      currentScore1El.textContent = game.getCurrentScore1();
    } else if (game.getActivePlayer() === "player2") {
      game.resetCurrentScore2();
      currentScore2El.textContent = game.getCurrentScore2();
    }
  }
};

rollBtnEl.addEventListener("click", rollFunction);
/*
const holdFunction = function () {
  if (activePlayer === player1) {
    score1 = score1 + currentScore1;
    currentScore1 = 0;

    score1El.textContent = score1;
    currentScore1El.textContent = 0;
    switchPlayer();
  } else if (activePlayer === player2) {
    score2 = score2 + currentScore2;
    currentScore2 = 0;

    score2El.textContent = score2;
    currentScore2El.textContent = 0;
    switchPlayer();
  }

  if (score1 > 50 || score2 > 50) {
    rollBtnEl.removeEventListener("click", rollFunction);
    holdBtnEl.removeEventListener("click", holdFunction);
    diceEl.textContent = "";

    if (score1 > 50) {
      player1El.classList.add("active");
      player2El.classList.remove("active");
    } else if (score2 > 50) {
      player2El.classList.add("active");
      player1El.classList.remove("active");
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

  player1El.classList.add("active");
  player2El.classList.remove("active");

  rollBtnEl.addEventListener("click", rollFunction);
  holdBtnEl.addEventListener("click", holdFunction);
});
*/
