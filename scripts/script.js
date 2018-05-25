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
// const background = new Background(ctx);
// const sanik = new Sanik(ctx);
// let count = 0;
// let sanikActions = [
//   sanik.chill,
//   // sanik.flip,
//   sanik.walk,
//   // sanik.flip
// ];

const game = new Game();
window.addEventListener('load', () => {
  // sanik.chill();
  setInterval(() => {
    game.tick();
    // background.update();
    // sanik.update();
    // background.unRender();
    // sanik.unRender();
    // background.render();
    // sanik.render();
    // ++count;
    // if (count % 60 === 0) {
    //   sanikActions[(count / 60) % sanikActions.length]();
    //   if (sanikActions[(count / 60) % sanikActions.length] === undefined) {
    //     console.log('whoopsie');
    //   }
    // }
  }, 1000 / 60);
});

// window.sanik = sanik;
