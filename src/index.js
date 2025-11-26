import "./style.css";
import Game from "./js/Game";

const container = document.getElementById("game");
const game = new Game(container);
game.init();
