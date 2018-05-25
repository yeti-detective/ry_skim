const touchController = (player) => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const jump = document.getElementById('jump');

  left.addEventListener('touchstart', (e) => {
    e.preventDefault();
    player.left();
  })
  left.addEventListener('touchend', (e) => {
    e.preventDefault();
    player.stop();
  })
  right.addEventListener('touchstart', (e) => {
    e.preventDefault();
    player.right();
  })
  right.addEventListener('touchend', (e) => {
    e.preventDefault();
    player.stop();
  })
  jump.addEventListener('touchstart', (e) => {
    e.preventDefault();
    player.jump();
  })
}

export default touchController;
