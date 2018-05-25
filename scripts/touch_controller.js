const touchController = (player) => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const jump = document.getElementById('jump');

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
  })

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
  })
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
  })
  //
  // left.addEventListener('touchstart', (e) => {
  //   e.preventDefault();
  //   player.left();
  // })
  // left.addEventListener('touchend', (e) => {
  //   e.preventDefault();
  //   player.stop();
  // })
  // right.addEventListener('touchstart', (e) => {
  //   e.preventDefault();
  //   player.right();
  // })
  // right.addEventListener('touchend', (e) => {
  //   e.preventDefault();
  //   player.stop();
  // })
  // jump.addEventListener('touchstart', (e) => {
  //   e.preventDefault();
  //   player.jump();
  // })
  // left.addEventListener('mousedown', (e) => {
  //   e.preventDefault();
  //   player.left();
  // })
  // left.addEventListener('mouseup', (e) => {
  //   e.preventDefault();
  //   player.stop();
  // })
  // right.addEventListener('mousedown', (e) => {
  //   e.preventDefault();
  //   player.right();
  // })
  // right.addEventListener('mouseup', (e) => {
  //   e.preventDefault();
  //   player.stop();
  // })
  // jump.addEventListener('click', (e) => {
  //   e.preventDefault();
  //   player.jump();
  // })
}

export default touchController;
