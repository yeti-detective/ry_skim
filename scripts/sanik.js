import Sprite from './sprite';

const sanikImg = new Image();
sanikImg.src = "./assets/sonic.png"

const sonicOptions = {
  image: sanikImg,
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 30,
  sourceHeight: 40,
  destX: 0,
  destY: 0,
  destWidth: 30,
  destHeight: 40
}

export default class Sanik extends Sprite {
  constructor(ctx, options) {
    const settings = Object.assign({}, sonicOptions, options);
    super(ctx, settings)

    this.animArray = [{x: 0, w: 0}];
    this.animCount = 0;
    this.animSpeed = 1000;

    this.animInterval = setInterval(() => {
      this.animate()
    }, this.animSpeed);

    this.animate = this.animate.bind(this);
    this.chill = this.chill.bind(this);
    this.walk = this.walk.bind(this);

  }

  animate() {
    window.clearInterval(this.animInterval);
    this.unRender();
    this.sourceWidth = this.animArray[this.animCount % this.animArray.length].w;
    this.destWidth = this.sourceWidth;
    this.sourceX = this.animArray[++this.animCount % this.animArray.length].x;
    this.render();
    this.animInterval = setInterval(() => {
      this.animate()
    }, this.animSpeed);

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
    this.animSpeed = 300;
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
    this.animSpeed = 200;
    this.animate();
  }

}
