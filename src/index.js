import './styles.css';
import goblin from './img/goblin.png';

const container = document.getElementById('game-container');

const board = document.createElement('div');
board.classList.add('board');
container.appendChild(board);

const cells = [];

for (let i = 0; i < 16; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
  cells.push(cell);
}

const goblinImg = document.createElement('img');
goblinImg.classList.add('goblin');
goblinImg.src = goblin;

let currentIndex = -1;

function getRandomIndex() {
  let index = Math.floor(Math.random() * cells.length);
  while (index === currentIndex) {
    index = Math.floor(Math.random() * cells.length);
  }
  return index;
}

function moveGoblin() {
  const newIndex = getRandomIndex();
  cells[newIndex].appendChild(goblinImg);
  currentIndex = newIndex;
}

moveGoblin();
setInterval(moveGoblin, 1000);
