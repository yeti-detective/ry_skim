import Sprite from './sprite';

const ghostImg = new Image();
ghostImg.src = './assets/inky_pinky_blinky_clyde.png';

export const blinky = {
  image: ghostImg,
  sourceX: 2,
  sourceY: 2,
  sourceWidth: 14,
  sourceHeight: 14,
  destX: 5,
  destY: 5,
  destWidth: 20,
  destHeight: 20
};

export const pinky = Object.assign({}, blinky, {sourceY: 18});
export const inky = Object.assign({}, blinky, {sourceY: 34});
export const clyde = Object.assign({}, blinky, {sourceY: 50});

export default class Ghost extends Sprite {
  constructor(ctx, options) {
    super(ctx, options);
    this.animArray = [2, 17, 34, 50, 66, 82, 97, 113];

    this.animate = this.animate.bind(this);
  }

  animate () {
    if (this.animCount % 20 === 0) {
      const animIndex = (this.animCount / 20) % this.animArray.length;
      this.sourceY = animArray[animIndex];
    }
  }
}
