// Fighters
let fighters = ['akuma', 'balrog', 'bison', 'blanka', 'cammy', 'chun-li', 'dhalsim', 'guile', 'honda', 'ibuki', 'ken', 'ryu', 'sagat', 'vega', 'zangief']

// DOM 
const playerOneEl = document.querySelector('.player-one');
const playerTwoEl = document.querySelector('.player-two');
const playerOneName = document.querySelector('.player-one .card-title');
const playerTwoName = document.querySelector('.player-two .card-title');
const playerOneBtnEl = document.querySelector('button.player-one');
const playerTwoBtnEl = document.querySelector('button.player-two');
const randomBtnEl = document.querySelector('.random-btn');

//Functions for taking src of images
const firstPlayer = () => {
  let playerOne = Math.floor(Math.random() * fighters.length);
  playerOneEl.children[0].setAttribute("src", "img/" + fighters[playerOne] + ".png");
  playerOneName.textContent = fighters[playerOne];
}

const secondPlayer = () => {
  let playerTwo = Math.floor(Math.random() * fighters.length);
  playerTwoEl.children[0].setAttribute("src", "img/" + fighters[playerTwo] + ".png");
  playerTwoName.textContent = fighters[playerTwo];
}

// Choose buttons
playerOneBtnEl.addEventListener('click', () => {
  firstPlayer();
})

playerTwoBtnEl.addEventListener('click', () => {
  secondPlayer();
})

randomBtnEl.addEventListener('click', () => {
  firstPlayer();
  secondPlayer();
});