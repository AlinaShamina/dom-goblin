export default class Board {
  constructor(container, size = 16) {
    this.container = container;
    this.size = size;
    this.cells = [];
  }

  init() {
    for (let i = 0; i < this.size; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      this.cells.push(cell);
      this.container.append(cell);
    }
  }
}
