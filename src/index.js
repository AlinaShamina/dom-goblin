import './styles.css';
const goblin = 'https://github.com/netology-code/ahj-homeworks/blob/AHJ-50/dom/pic/goblin.png?raw=true';


const container = document.getElementById('game-container');

const board = document.createElement('div');
board.classList.add('board');
container.append(board);

const cells = [];

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.append(cell);
  cells.push(cell);
}

const goblinImg = document.createElement('img');
goblinImg.classList.add('goblin');
goblinImg.src = goblin;

let currentIndex = -1;
let goblinInterval;

function getRandomIndex() {
  let index = Math.floor(Math.random() * cells.length);
  while (index === currentIndex) {
    index = Math.floor(Math.random() * cells.length);
  }
  return index;
}

function moveGoblin() {
  const newIndex = getRandomIndex();
  cells[newIndex].append(goblinImg);
  currentIndex = newIndex;
}

function startGame() {
  moveGoblin();
  goblinInterval = setInterval(moveGoblin, 1000);
}

function stopGame() {
  clearInterval(goblinInterval);
}

startGame();
