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

const gameGenerator = function () {
  let score1 = 0;
  let score2 = 0;

  let currentScore1 = 0;
  let currentScore2 = 0;
  let activePlayer = "player1";

  const getScore1 = () => score1;
  const getScore2 = () => score2;

  const getCurrentScore1 = () => currentScore1;
  const getCurrentScore2 = () => currentScore2;

  const getActivePlayer = () => activePlayer;

  const switchActivePlayer = () => {
    // activePlayer === "player1" ? "player2" : "player1";
    if (activePlayer === "player1") {
      activePlayer = "player2";
      player1El.classList.toggle("active");
      player2El.classList.toggle("active");
    } else if (activePlayer === "player2") {
      activePlayer = "player1";
      player1El.classList.toggle("active");
      player2El.classList.toggle("active");
    }
  };

  const increaseCurrentScore1 = (num) => (currentScore1 += num);
  const increaseCurrentScore2 = (num) => (currentScore2 += num);

  const increaseScore1 = (num) => (score1 += num);
  const increaseScore2 = (num) => (score2 += num);

  const resetCurrentScore1 = () => (currentScore1 = 0);
  const resetCurrentScore2 = () => (currentScore2 = 0);

  const resetScore1 = () => (score1 = 0);
  const resetScore2 = () => (score2 = 0);

  const resetActivePlayer = () => (activePlayer = "player1");

  // prettier-ignore
  return { getScore1, getScore2, getCurrentScore1, getCurrentScore2, getActivePlayer, switchActivePlayer, 
    increaseCurrentScore1, increaseCurrentScore2, resetCurrentScore1, resetCurrentScore2, 
    increaseScore1, increaseScore2, resetScore1, resetScore2, resetActivePlayer}
};

const game = gameGenerator();

const rollFunction = function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.textContent = dice;

  if (game.getActivePlayer() === "player2") {
    console.log(game.increaseCurrentScore2(dice));
    currentScore2El.textContent = game.getCurrentScore2();
  } else if (game.getActivePlayer() === "player1") {
    console.log(game.increaseCurrentScore1(dice));
    currentScore1El.textContent = game.getCurrentScore1();
  }

  if (dice === 1) {
    if (game.getActivePlayer() === "player1") {
      game.resetCurrentScore1();
      currentScore1El.textContent = game.getCurrentScore1();
    } else if (game.getActivePlayer() === "player2") {
      game.resetCurrentScore2();
      currentScore2El.textContent = game.getCurrentScore2();
    }
    game.switchActivePlayer();
    console.log(game.getActivePlayer());
  }
};

rollBtnEl.addEventListener("click", rollFunction);

const holdFunction = function () {
  if (game.getActivePlayer() === "player1") {
    game.increaseScore1(game.getCurrentScore1());
    game.resetCurrentScore1();

    score1El.textContent = game.getScore1();
    currentScore1El.textContent = 0;
    game.switchActivePlayer();
  } else if (game.getActivePlayer() === "player2") {
    game.increaseScore2(game.getCurrentScore2());
    game.resetCurrentScore2();

    score2El.textContent = game.getScore2();
    currentScore2El.textContent = 0;
    game.switchActivePlayer();
  }

  if (game.getScore1() > 50 || game.getScore2() > 50) {
    rollBtnEl.removeEventListener("click", rollFunction);
    holdBtnEl.removeEventListener("click", holdFunction);
    diceEl.textContent = "";

    if (game.getScore1() > 50) {
      player1El.classList.add("active");
      player2El.classList.remove("active");
    } else if (game.getScore2() > 50) {
      player2El.classList.add("active");
      player1El.classList.remove("active");
    }
  }
};

holdBtnEl.addEventListener("click", holdFunction);

newGameEl.addEventListener("click", function () {
  game.resetScore1();
  game.resetScore2();
  score1El.textContent = game.getScore1();
  score2El.textContent = game.getScore2();

  game.resetCurrentScore1();
  game.resetCurrentScore2();
  currentScore1El.textContent = game.getCurrentScore1();
  currentScore2El.textContent = game.getCurrentScore2();

  diceEl.textContent = "";
  game.resetActivePlayer();

  player1El.classList.add("active");
  player2El.classList.remove("active");

  rollBtnEl.addEventListener("click", rollFunction);
  holdBtnEl.addEventListener("click", holdFunction);
});
