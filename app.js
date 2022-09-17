let fighters = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png']

const btnEl = document.querySelector('.btn');
const playerOneEl = document.querySelector('.player-one');
const playerTwoEl = document.querySelector('.player-two');

btnEl.addEventListener('click', () => {
  let playerOne = Math.floor(Math.random() * fighters.length)
  console.log('clicked');
  playerOneEl.children[0].setAttribute("src", "img/" + playerOne + ".png")
});