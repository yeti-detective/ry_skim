export default class Player {
  constructor(sprite) {
    this.sprite = sprite;

    this.hVel = 0;
    this.vVel = 0;
  }

  affect () {
    if (this.hVel === 0) {
      this.sprite.chill();
    } else {
      this.sprite.walk();
    }
    this.sprite.moveVert(this.vVel);
    this.sprite.moveHoriz(this.hVel);
  }

  left () {
    this.sprite.facingLeft = true;
    this.hVel -= 15;
  }

  right () {
    this.sprite.facingLeft = false;
    this.hVel += 15;
  }

  jump () {
    this.vVel -= 30;
  }


}
