import hammerImg from "../img/hammer.png";

export function hitCursor() {
  const body = document.body;

  body.style.cursor = `url(${hammerImg}) 16 16, pointer`;

  setTimeout(() => {
    body.style.cursor = "auto";
  }, 200);
}
