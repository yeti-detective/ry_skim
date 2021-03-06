const physics = (player, world) => {
  // gravity and ground
  if (player.sprite.destY < world.ground) {
    if (player.sprite.destY + (player.vVel + 3) >= world.ground) {
      player.vVel = 0;
      player.sprite.destY = world.ground;
    } else {
      player.vVel += 1;
    }
  } else if (player.sprite.destY > world.ground) {
    player.vVel += 1;
  }
  // right and left barriers
  if (player.sprite.destX <= world.left) {
    player.sprite.destX += 7;
  } else if (player.sprite.destX >= world.right) {
    player.sprite.destX -= 7;
  }
  player.affect();
};

export default physics;
