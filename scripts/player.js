export class Player {
  constructor(sprite) {
    this.char = sprite;

    this.hVel = 0;
    this.vVel = 0;
  }

  animate () {
    sprite.moveVert(this.vVel);
    sprite.moveHoriz(this.hVel);
  }
}
