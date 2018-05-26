const physics = (player, world) => {
  if (player.sprite.destY < 202) {
    player.vVel += 3;
  } else if (player.sprite.destY > 202) {
    player.vVel = 0;
    player.sprite.destY = 202;
  }
  player.affect();
};

export default physics;
