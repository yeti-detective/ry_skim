import Sprite from './sprite';

const sanikImg = new Image();
sanikImg.src = "./assets/sonic.png";

const sonicOptions = {
  image: sanikImg,
  sourceX: 0,
  sourceY: 0,
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
    this.animArray = [{x: 0, w: 0}];

    this.animate = this.animate.bind(this);
    this.chill = this.chill.bind(this);
    this.walk = this.walk.bind(this);

  }

  animate() {
    if (this.animCount % this.speed === 0) {
      if (this.flipped) {
        this.facingLeft = !this.facingLeft
        this.flipped = false;
      }
      if (this.facingLeft) {
        this.animArray = this.leftAnimArr;
      }
      // this.unRender();
      this.sourceWidth = this.animArray[(this.animCount / this.speed) % this.animArray.length].w;
      this.destWidth = this.sourceWidth;
      this.sourceX = this.animArray[(this.animCount / this.speed) % this.animArray.length].x;
      // this.render();
    }
  }

  flipImage(arr) {
    return arr.map((pos) => {
      return {
        x: 984 - (pos.x + pos.w),
        w: pos.w
      };
    });
  }

  chill () {
    this.sourceY = 20;
    this.animArray = [
      {x: 0, w: 30},
      {x: 35, w: 30},
      {x: 67, w: 30},
      {x: 100, w: 30},
      {x: 130, w: 30}
    ];
    this.leftAnimArr = this.flipImage(this.animArray)
    this.speed = 20;
    this.animate();
  }

  walk () {
    this.sourceY = 62;
    const walkArr = [
      {x: 0, w: 30},
      {x: 35, w: 34},
      {x: 73, w: 30},
      {x: 108, w: 30},
      {x: 138, w: 31},
      {x: 180, w: 35}
    ];
    this.animArray = walkArr.concat(walkArr.reverse());
    this.leftAnimArr = this.flipImage(this.animArray)
    this.speed = 10;
    this.animate();
  }

  // spin () {
  //   this.sourceY = 20;
  //   const spinArr = [
  //     {x: 204, w: 31},
  //     {x: }
  //   ]
  // }

}
