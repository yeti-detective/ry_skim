// import Sprite from './sprite'
// import Background from './background';
// import Sanik from './sanik';
import Game from './game.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const canvasSize = () => {
  ctx.canvas.width = window.innerWidth * 0.9;
};

canvasSize();

window.addEventListener('resize', () => {
  canvasSize();
});

const game = new Game();

window.addEventListener('load', () => {
  setInterval(() => {
    game.tick();
  }, 1000 / 60);
});
