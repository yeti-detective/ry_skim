const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth * 0.9;
// TODO: add window resize event listener to make canvas responsive

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
