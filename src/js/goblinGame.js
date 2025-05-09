import goblin from "../pic/goblin.png";

export class GoblinGame {
  constructor() {
    this.field = document.querySelector(".game-field");
    this.goblin = document.createElement("img");
    this.cellField = 16;
  }

  createFieldGame() {
    for (let i = 0; i < this.cellField; i += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell-field");
      this.field.appendChild(cell);
    }
  }

  createGoblinMove() {
    this.goblin.classList.add("goblin");
    this.goblin.src = goblin;
    this.field.querySelector(".cell-field").appendChild(this.goblin);

    let prevIndex = 0;
    let nextIndex = 0;

    setInterval(() => {
      while (nextIndex === prevIndex) {
        nextIndex = Math.floor(Math.random() * (this.cellField - 1));
      }

      prevIndex = nextIndex;

      document
        .querySelectorAll(".cell-field")
        [nextIndex].appendChild(this.goblin);
    }, 500);
  }
}

export default function startGame() {
  const goblinGame = new GoblinGame(document.querySelector(".game-field"));
  window.goblinGame = goblinGame;
  goblinGame.createFieldGame();
  goblinGame.createGoblinMove();
}
