// Fighters
let fighters = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png']

// DOM 
const playerOneEl = document.querySelector('.player-one');
const playerTwoEl = document.querySelector('.player-two');
const playerOneBtnEl = document.querySelector('button.player-one');
const playerTwoBtnEl = document.querySelector('button.player-two');
const randomBtnEl = document.querySelector('.random-btn');

//Functions for taking src of images
const firstPlayer = () => {
  let playerOneSrc = Math.floor(Math.random() * fighters.length) + 1;
  playerOneEl.children[0].setAttribute("src", "img/" + playerOneSrc + ".png");
}

const secondPlayer = () => {
  let playerTwoSrc = Math.floor(Math.random() * fighters.length) + 1;
  playerTwoEl.children[0].setAttribute("src", "img/" + playerTwoSrc + ".png");
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