const controller = (player) {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "ArrowRight":
      case "KeyD":
        player.hVel += 15;
        break;
      case "ArrowLeft":
      case "KeyA":
        player.hVel -= 15;
        break;
      case "Space":
      case "ArrowUp":
        player.vVel += 20;
        break;
      default:
        null
    }
  })
}
