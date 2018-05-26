const touchController = (player) => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const jump = document.getElementById('jumpButton');

  const controller = document.getElementById('controller');

  controller.addEventListener('mousedown', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
        player.left();
        break;
      case right:
        player.right();
        break;
      case jump:
        player.jump();
        break;
      default:
        null;
    }
  })
  controller.addEventListener('mouseup', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
      case right:
        player.stop();
        break;
      default:
        null;
    }
  });

  controller.addEventListener('touchstart', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
        player.left();
        break;
      case right:
        player.right();
        break;
      case jump:
        player.jump();
        break;
      default:
        null;
    }
  });
  controller.addEventListener('touchend', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
      case right:
        player.stop();
        break;
      default:
        null;
    }
  });
};

export default touchController;
