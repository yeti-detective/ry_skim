import Sprite from './sprite';

const sanikImg = new Image();
sanikImg.src = './assets/sonic.png';

const sonicOptions = {
  image: sanikImg,
  sourceX: 0,
  sourceY: 20,
  sourceWidth: 30,
  sourceHeight: 40,
  destX: 85,
  destY: 140,
  destWidth: 30,
  destHeight: 40
};

export default class Sanik extends Sprite {
  constructor(ctx, options) {
    const settings = Object.assign({}, sonicOptions, options);
    super(ctx, settings);
    this.facingLeft = false;
    this.animArray = [{x: 0, y:0, w: 0}];

    this.animate = this.animate.bind(this);
    this.chill = this.chill.bind(this);
    this.walk = this.walk.bind(this);

  }

  animate() {
    if (this.flipped) {
      this.facingLeft = !this.facingLeft;
      this.flipped = false;
    }
    if (this.facingLeft) {
      this.animArray = this.leftAnimArr;
    }
    if (this.animCount % this.speed === 0) {
      const animIndex = (this.animCount / this.speed) % this.animArray.length;
      this.sourceWidth = this.animArray[animIndex].w;
      this.destWidth = this.animArray[animIndex].w;
      this.sourceX = this.animArray[animIndex].x;
      this.sourceY = this.animArray[animIndex].y;
    }
  }

  flipImage(arr) {
    return arr.map((pos) => {
      return {
        x: 984 - (pos.x + pos.w),
        w: pos.w,
        y: pos.y
      };
    });
  }

  chill () {
    this.animArray = [
      {x: 0, y: 20, w: 30},
      {x: 35, y: 20, w: 30},
      {x: 67, y: 20, w: 30},
      {x: 100, y: 20, w: 30},
      {x: 130, y: 20, w: 30}
    ];
    this.leftAnimArr = this.flipImage(this.animArray);
    this.speed = 20;
  }

  walk () {
    const walkArr = [
      {x: 0, y: 62, w: 30},
      {x: 35, y: 62, w: 34},
      {x: 73, y: 62, w: 30},
      {x: 108, y: 62, w: 30},
      {x: 138, y: 62, w: 31},
      {x: 180, y: 62, w: 35}
    ];
    this.animArray = walkArr.concat(walkArr.reverse());
    this.leftAnimArr = this.flipImage(this.animArray);
    this.speed = 5;
  }

  die () {
    alert('Sanik has Died!');
  }

  jump () {
    this.animArray = [
      {x: 8, y: 255, w: 32},
      {x: 42, y: 255, w: 33},
      {x: 387, y: 13, w: 30}
    ];
    this.leftAnimArr = this.flipImage(this.animArray);
    this.speed = 20;
  }

  fall () {
    this.animArray = [
      {x: 205, y: 150, w: 36},
      {x: 242, y: 150, w: 38}
    ];
    this.leftAnimArr = this.flipImage(this.animArray);
    this.speed = 20;
  }

  // spin () {
  //   this.sourceY = 20;
  //   const spinArr = [
  //     {x: 204, w: 31},
  //     {x: }
  //   ]
  // }

}
