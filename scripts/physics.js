const physics = (player, world) => {

  if (player.sprite.destY < world.ground) {
    player.vVel += 3;
  } else if (player.sprite.destY > world.ground) {
    player.vVel = 0;
    player.sprite.destY = world.ground;
  }
  player.affect();
};

export default physics;
