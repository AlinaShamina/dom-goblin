import Goblin from "./Goblin";

export default class Game {
  constructor(container) {
    this.container = container;
    this.cells = [];
    this.goblin = new Goblin();
    this.index = null;
    this.missed = 0;
    this.score = 0;
    this.interval = null;
  }

  init() {
    this.drawField();
    this.start();
  }

  drawField() {
    for (let i = 0; i < 16; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.cells.push(cell);
      this.container.append(cell);

      cell.addEventListener("click", () => {
        if (i === this.index) {
          this.score++;
          this.goblin.element.remove();
        }
      });
    }
  }

  start() {
  setTimeout(() => {
    this.interval = setInterval(() => this.moveGoblin(), 1000);
  }, 500);
}


  moveGoblin() {
    if (this.index !== null) {
      this.missed++;
      if (this.missed >= 5) {
        clearInterval(this.interval);
        alert("Игра окончена!");
        return;
      }
    }

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * 16);
    } while (newIndex === this.index);

    this.index = newIndex;

    this.cells[newIndex].append(this.goblin.element);
  }
}
