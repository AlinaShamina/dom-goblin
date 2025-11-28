export default class Score {
  constructor() {
    this.hits = 0;
    this.misses = 0;

    this.hitsEl = document.getElementById("hits");
    this.missesEl = document.getElementById("misses");
  }

  addHit() {
    this.hits += 1;
    this.update();
  }

  addMiss() {
    this.misses += 1;
    this.update();
  }

  update() {
    this.hitsEl.textContent = this.hits;
    this.missesEl.textContent = this.misses;
  }

  reset() {
    this.hits = 0;
    this.misses = 0;
    this.update();
  }
}
