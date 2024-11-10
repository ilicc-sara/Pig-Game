"use strict";
import "./style.css";

let player1;
let player2;
let currentScore1;
let currentScore2;
let score1;
let score2;

const dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

const rollDiceBtn = document.querySelector(".roll-btn");
