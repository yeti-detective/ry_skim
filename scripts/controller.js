const controller = (player) => {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "ArrowRight":
      case "KeyD":
        player.right();
        break;
      case "ArrowLeft":
      case "KeyA":
        player.left();
        break;
      case "Space":
      case "ArrowUp":
      case "KeyW":
        player.jump();
        break;
      default:
        null
    }
  })
  document.addEventListener('keyup', (e) => {
    switch (e.code) {
      case "ArrowRight":
      case "KeyD":
      case "ArrowLeft":
      case "KeyA":
        player.stop();
        break;
      default:
        null
    }
  })
}

export default controller;
