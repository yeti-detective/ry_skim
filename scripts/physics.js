const physics = (player, world) => {
  if (player.sprite.destY < 202) {
    player.vVel += 1;
  } else if (player.sprite.destY > 202) {
    player.vVel = 0;
    player.sprite.destY = 202;
  }
  if (player.hVel > 0) {
    player.hVel -= 1;
  } else if (player.hVel < 0) {
    player.hVel += 1;
  }
  player.affect();
}

export default physics;
