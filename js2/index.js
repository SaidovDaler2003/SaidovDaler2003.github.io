const words = [
  "Banana",
  "Apple",
  "Cucember",
  "Pineapple",
  "Pen",
  "Computer",
  "Person",
  "Yellow",
  "Green",
  "Daler",
  "Sun",
  "Mouse",
  "Tshirts",
  "Carpet",
  "School"
];

const user = {
  score: 0,
};
let currentWord = words[0];
let currentTime = 10;
const playEl = document.getElementById("play-screen");
const resultsEl = document.getElementById("results-screen");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const wordEl = document.getElementById("word");
const resultsScoreEl = document.getElementById("results-score");
const reloadEl = document.getElementById("reload");

function initResults() {
  setInnerHtml(resultsScoreEl, user.score);
}

function initPlay() {
  setInnerHtml(scoreEl, user.score);
  setInnerHtml(timeEl, currentTime);
  setInnerHtml(wordEl, currentWord);
}

const timer = setInterval(() => {
  currentTime--;
  setInnerHtml(timeEl, currentTime);
  if (currentTime === 0) {
    playEl.style.display = "none";
    resultsEl.style.display = "flex";
    initResults();
  }
}, 1000);

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setInnerHtml(node, value) {
  node.innerHTML = value;
}

function setInputValue(node, value) {
  node.value = value;
}

function changeWord() {
  currentWord = words[random(0, words.length - 1)];
  setInnerHtml(wordEl, currentWord);
}

inputEl.oninput = (e) => {
  if (e.target.value.trim() === currentWord) {
    user.score++;
    setInnerHtml(scoreEl, user.score);
    setInputValue(e.target, "");
    changeWord();
  }
};

reloadEl.onclick = () => {
  user.score = 0;
  currentTime = 10;
  changeWord();
  playEl.style.display = "block";
  resultsEl.style.display = "none";
  initPlay();
};

initPlay();
