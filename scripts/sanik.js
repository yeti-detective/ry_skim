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

    this.animArray = [];
    this.animCount = 0;
    
    setInterval(() => {
      this.animate()
    }, 300)
  }

  animate() {
    this.unRender();
    this.sourceX = this.animArray[++this.animCount % this.animArray.length]
    this.render();
  }

  chill () {
    this.sourceY = 20;
    let chillCount = 0;
    this.animArray = [0, 35, 67, 100, 130]
  }

}
