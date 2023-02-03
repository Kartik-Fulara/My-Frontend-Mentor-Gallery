const onaoffline = document.querySelectorAll(".online-offline");
const modeBtn = document.getElementById("change-mode");

const bonusLogos = document.querySelectorAll('.bonus');
const basicLogos = document.querySelectorAll('.basic');

const bonusChooseContainers = document.querySelectorAll(".bonus-mode");
const basicChooseContainers = document.querySelectorAll(".basic-mode");

const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.querySelectorAll(".close-btn");
const rules = document.getElementById("rules");

const switchBtn = document.querySelectorAll(".switch-button-label");

const triangle = document.getElementById("triangle");
const pentagon = document.getElementById("pentagon");

const choicesBtns = document.querySelectorAll(".choose-container");

const result = document.getElementById("result");

const resultText = document.getElementById("result-text");

const totalScore = document.getElementById("score");

let winner = "";

let mode = "basic";
let isOnline = false; // false = offline, true = online
let score = 0;

let userChoice = "";
let houseChoice = "";
let winnerChoice = "";
