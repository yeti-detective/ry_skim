import Sprite from './sprite';

const ghostImg = new Image();
ghostImg.src = './assets/inky_pinky_blinky_clyde.png';

export const blinkySettings = {
  image: ghostImg,
  name: "blinky",
  sourceX: 2,
  sourceY: 2,
  sourceWidth: 14,
  sourceHeight: 14,
  destX: 725,
  destY: 33,
  destWidth: 20,
  destHeight: 20
};

export const pinkySettings = Object.assign(
  {},
  blinkySettings,
  {
    name: 'pinky',
    sourceY: 18,
    destX: 1296,
    destY: 68
  }
);
export const inkySettings = Object.assign(
  {},
  blinkySettings,
  {
    name: 'inky',
    sourceY: 34,
    destX: 1765,
    destY: 84
  }
);
export const clydeSettings = Object.assign(
  {},
  blinkySettings,
  {
    name: 'clyde',
    sourceY: 50,
    destX: 1961,
    destY: 116
  }
);

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
