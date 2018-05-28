const physics = (player, world) => {
  if (player.sprite.destY < world.ground) {
    if (player.sprite.destY + (player.vVel + 3) >= world.ground) {
      debugger
      player.vVel = 0;
      player.sprite.destY = world.ground;
    } else {
      player.vVel += 3;
    }
  }
  player.affect();
};

export default physics;
