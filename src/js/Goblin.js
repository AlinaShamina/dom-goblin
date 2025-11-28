import goblinImg from "../img/goblin.png";

export default class Goblin {
  constructor() {
    this.element = document.createElement("img");
    this.element.src = goblinImg;
    this.element.alt = "goblin";
    this.element.classList.add("goblin");
  }
}
