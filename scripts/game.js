import Sanik from './sanik';
import Ghost, {
  inkySettings,
  pinkySettings,
  blinkySettings,
  clydeSettings
} from './ghost';
import Background from './background';
import physics from './physics';
import Player from './player';
import controller from './controller';
import touchController from './touch_controller';
import World from './world';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sanik = new Sanik(ctx);
const player = new Player(sanik);


const inky = new Ghost(ctx, inkySettings);
const blinky = new Ghost(ctx, blinkySettings);
const pinky = new Ghost(ctx, pinkySettings);
const clyde = new Ghost(ctx, clydeSettings);

const background = new Background(ctx);

const world = new World(sanik, background);

export default class Game {
  constructor() {
    this.player = player;
    this.background = background;
    this.physics = physics;
    this.world = world;
    this.inky = inky;
    this.blinky = blinky;
    this.pinky = pinky;
    this.clyde = clyde;

    this.spriteArr = [
      this.player.sprite,
      this.inky,
      this.blinky,
      this.pinky,
      this.clyde,
      this.background,
    ]

    this.spriteRenderOrder = this.spriteArr.reverse();

    controller(this.player);
    touchController(this.player);
  }

  tick () {
    this.spriteArr.forEach((sprite) => {
      sprite.update();
    })
    this.physics(this.player, this.world);
    this.world.processWorld();
    this.render();
  }

  render() {
    this.spriteArr.forEach((sprite) => {
      sprite.unRender();
    })
    this.background.destWidth = ctx.canvas.width;
    this.background.sourceWidth = ctx.canvas.width;
    this.spriteRenderOrder.forEach((sprite) => {
      sprite.render();
    })
    ctx.font = "15px Arial";
    ctx.fillText(`${this.player.sprite.destX + this.world.background.sourceX}, ${this.player.sprite.destY}`, 15, 15);
    ctx.fillText(`${this.world.ground}`, 15, 35);
  }
}
