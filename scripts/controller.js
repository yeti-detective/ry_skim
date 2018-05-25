const controller = (player) => {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "ArrowRight":
      case "KeyD":
        player.sprite.facingLeft = false;
        player.hVel += 15;
        break;
      case "ArrowLeft":
      case "KeyA":
        player.sprite.facingLeft = true;
        player.hVel -= 15;
        break;
      case "Space":
      case "ArrowUp":
        player.vVel -= 20;
        break;
      default:
        null
    }
  })
}

export default controller;
