// import Sprite from './sprite'

import Sanik from './sanik';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const canvasSize = () => {
  ctx.canvas.width = window.innerWidth * 0.9;
  ctx.canvas.height = window.innerHeight * 0.8;
};

canvasSize();

window.addEventListener('resize', () => {
  canvasSize();
});

const sanik = new Sanik(ctx);
let count = 0;
let sanikActions = [
  sanik.chill,
  sanik.flip,
  sanik.walk,
  sanik.flip
];
window.addEventListener('load', () => {
  sanik.chill();
  setInterval(() => {
    sanik.update();
    ++count;
    if (count % 60 === 0) {
      sanikActions[(count / 60) % sanikActions.length]();
    }
  }, 1000 / 60);
});

window.sanik = sanik;
