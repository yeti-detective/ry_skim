import Sprite from './sprite';

const ghostImg = new Image();
ghostImg.src = './assets/inky_pinky_blinky_clyde.png';

export const blinkySettings = {
  image: ghostImg,
  sourceX: 2,
  sourceY: 2,
  sourceWidth: 14,
  sourceHeight: 14,
  destX: 725,
  destY: 30,
  destWidth: 20,
  destHeight: 20
};

export const pinkySettings = Object.assign({}, blinkySettings, {sourceY: 18, destY: 25});
export const inkySettings = Object.assign({}, blinkySettings, {sourceY: 34, destY: 45});
export const clydeSettings = Object.assign({}, blinkySettings, {sourceY: 50, destY: 65});

export default class Ghost extends Sprite {
  constructor(ctx, options) {
    super(ctx, options);
    this.animArray = [2, 17, 34, 50, 66, 82, 97, 113];

    this.animate = this.animate.bind(this);
  }

  animate () {
    if (this.animCount % 20 === 0) {
      const animIndex = (this.animCount / 20) % this.animArray.length;
      this.sourceX = this.animArray[animIndex];
    }
  }
}
