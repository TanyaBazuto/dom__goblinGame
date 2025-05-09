/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/

;// ./src/pic/goblin.png
const goblin_namespaceObject = __webpack_require__.p + "2dbd01ce16c0fa83cb67.png";
;// ./src/js/goblinGame.js

class GoblinGame {
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
    this.goblin.src = goblin_namespaceObject;
    this.field.querySelector(".cell-field").appendChild(this.goblin);
    let prevIndex = 0;
    let nextIndex = 0;
    setInterval(() => {
      while (nextIndex === prevIndex) {
        nextIndex = Math.floor(Math.random() * (this.cellField - 1));
      }
      prevIndex = nextIndex;
      document.querySelectorAll(".cell-field")[nextIndex].appendChild(this.goblin);
    }, 500);
  }
}
function startGame() {
  const goblinGame = new GoblinGame(document.querySelector(".game-field"));
  window.goblinGame = goblinGame;
  goblinGame.createFieldGame();
  goblinGame.createGoblinMove();
}
;// ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  startGame();
});
;// ./src/index.js


/******/ })()
;