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
  constructor(ctx, options = sonicOptions) {
    super(ctx, options)
  }

  chill () {
    this.sourceY = 20;
    let chillCount = 0;
    const chillimations = [0, 35, 67, 100, 130]
    const sonicChill = setInterval(() => {
      this.unRender();
      this.sourceX = chillimations[++chillCount % chillimations.length];
      this.render();
    }, 500)
  }

}
