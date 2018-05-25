import Sanik from './sanik';
import Background from './background';
import physics from './physics';
import Player from './player';
import controller from './controller';
import touchController from './touch_controller';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sanik = new Sanik(ctx);
const player = new Player(sanik);

const background = new Background(ctx);

export default class Game {
  constructor() {
    this.player = player;
    this.background = background;
    this.physics = physics;

    controller(this.player);
    touchController(this.player);
  }

  tick () {
    this.player.sprite.update();
    this.background.update();
    this.physics(this.player);
    this.render();
  }

  render() {
    this.player.sprite.unRender();
    this.background.unRender();
    this.background.destWidth = ctx.canvas.width;
    this.background.sourceWidth = ctx.canvas.width;
    this.background.render();
    this.player.sprite.render();
  }
}
