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

const sanik = new Image();
sanik.src = "./assets/sonic.png";

const sprite = options => {
  const that = {};

  that.context = options.context;
  that.width = options.width;
  that.height = options.height;
  that.image = options.image;

  return that;
};
