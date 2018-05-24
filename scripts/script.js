// import Sprite from './sprite'

import Sanik from './sanik';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const canvasSize = () => {
  ctx.canvas.width = window.innerWidth * 0.9;
  ctx.canvas.height = window.innerHeight * 0.8;
}

canvasSize();

window.addEventListener('resize', () => {
  canvasSize();
})

// const sanikImg = new Image();
// sanikImg.src = "./assets/sonic.png";
//
// const sanik = new Sprite(ctx, {
//   image: sanikImg,
//   sourceX: 0,
//   sourceY: 0,
//   sourceWidth: 474,
//   sourceHeight: 361,
//   destX: 0,
//   destY: 0,
//   destWidth: 474,
//   destHeight: 361
// })

const sanik = new Sanik(ctx)
let count = 0;
let sanikActions = [
  sanik.chill,
  sanik.walk,
  sanik.flip
]
window.addEventListener('load', () => {
  setInterval(() => {
    sanikActions[++count % sanikActions.length]();
  }, 1000)
})

window.sanik = sanik;
