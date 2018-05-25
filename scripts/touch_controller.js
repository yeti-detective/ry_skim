const touchController = (player) => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const jump = document.getElementById('jump');

  left.addEventListener('click', (e) => {
    e.preventDefault();
    player.left();
  })
  right.addEventListener('click', (e) => {
    e.preventDefault();
    player.right();
  })
  jump.addEventListener('click', (e) => {
    e.preventDefault();
    player.jump();
  })
}

export default touchController;
