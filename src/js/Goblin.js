export default class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.src = require("../img/goblin.png");
    this.element.classList.add("goblin");
  }
}
