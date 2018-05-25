const physics = (player, world) => {
  if (player.sprite.destY < 202) {
    player.vVel -= 5;
  }
  if (player.hVel > 0) {
    player.hVel -= 10;
  } else if (player.hVel < 0) {
    player.hVel -= 10;
  }
  player.affect();
}

export default physics;
