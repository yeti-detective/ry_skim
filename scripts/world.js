// starting platform: y: 202, x: 0 => 260

export default class World {
  constructor (sprite, background) {
    this.sprite = sprite;
    this.background = background;
    this.ground = 202;
    this.rBound = 2209;
    this.relX = sprite.destX;
  }

  scrollBackground () {
    const dispWidth = this.background.context.canvas.width;
    if (this.sprite.destX > (dispWidth * 0.8) &&
        this.background.sourceX + dispWidth < 2630) {
      this.background.sourceX += 7;
      this.sprite.destX -= 7;
    } else if (
      this.sprite.destX < (dispWidth * 0.2) &&
      this.background.sourceX > 0
    ) {
      this.background.sourceX -= 7;
      this.sprite.destX += 7;
    }
  }
}
