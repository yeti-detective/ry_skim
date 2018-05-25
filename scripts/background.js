import Sprite from './sprite';

const mushroomKingdom = new Image();
mushroomKingdom.src = './assets/mushroom_kingdom.png';

const bgDefaults = {
  image: mushroomKingdom,
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 900,
  sourceHeight: 225,
  destX: 0,
  destY: 0,
  destWidth: 900,
  destHeight: 200
};

export default class Background extends Sprite {
  constructor(context, options) {
    const settings = Object.assign({}, bgDefaults, options);
    super(context, settings);
  }

  animate() {
    this.unRender();
    this.render();
  }

}
