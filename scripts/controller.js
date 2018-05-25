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
        player.jump();
        break;
      default:
        null
    }
  })
}

export default controller;
