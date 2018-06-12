import Game from './game';

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
window.generateController = game.makeTouchController;

window.addEventListener('load', () => {
  const gameLoop = setInterval(() => {
    game.tick();
  }, 1000 / 60);
  window.gameLoop  = gameLoop;

  // in game music
  const music = document.getElementById('gameMusic');
  document.getElementById('playButton').addEventListener('click', () => {
    togglePlay(music);
  });
  const togglePlay = (music) => {
    if (music.duration > 0 && music.currentTime > 0) {
      music.pause();
      music.currentTime = 0;
    } else {
      music.currentTime = 0;
      music.play();
    }
  };
  // in game music
});
