export default class Modal {
  constructor() {
    this.modal = document.getElementById("modal");
    this.text = document.getElementById("final-text");
    this.restartBtn = document.getElementById("restart-btn");
  }

  show(message) {
    this.text.textContent = message;
    this.modal.classList.remove("hidden");
  }

  hide() {
    this.modal.classList.add("hidden");
  }
}
