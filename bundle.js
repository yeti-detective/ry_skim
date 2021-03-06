/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/background.js":
/*!*******************************!*\
  !*** ./scripts/background.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./scripts/sprite.js");


const mushroomKingdom = new Image();
mushroomKingdom.src = './assets/mushroom_kingdom.png';

const bgDefaults = {
  image: mushroomKingdom,
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 900,
  sourceHeight: 300,
  destX: 0,
  destY: 0,
  destWidth: 900,
  destHeight: 307
};

class Background extends _sprite__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(context, options) {
    const settings = Object.assign({}, bgDefaults, options);
    super(context, settings);
  }

}


/***/ }),

/***/ "./scripts/controller.js":
/*!*******************************!*\
  !*** ./scripts/controller.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const controller = (player) => {
  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case "ArrowRight":
      case "KeyD":
        player.right();
        break;
      case "ArrowLeft":
      case "KeyA":
        player.left();
        break;
      case "Space":
      case "ArrowUp":
      case "KeyW":
        player.jump();
        break;
      default:
        null
    }
  })
  document.addEventListener('keyup', (e) => {
    switch (e.code) {
      case "ArrowRight":
      case "KeyD":
      case "ArrowLeft":
      case "KeyA":
        player.stop();
        break;
      default:
        null
    }
  })
}

/* harmony default export */ __webpack_exports__["default"] = (controller);


/***/ }),

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _sanik__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sanik */ "./scripts/sanik.js");
/* harmony import */ var _ghost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ghost */ "./scripts/ghost.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./scripts/background.js");
/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physics */ "./scripts/physics.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./player */ "./scripts/player.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller */ "./scripts/controller.js");
/* harmony import */ var _touch_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./touch_controller */ "./scripts/touch_controller.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./world */ "./scripts/world.js");
/* harmony import */ var _generate_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generate_controller */ "./scripts/generate_controller.js");











const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sanik = new _sanik__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
const player = new _player__WEBPACK_IMPORTED_MODULE_4__["default"](sanik);


const inky = new _ghost__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _ghost__WEBPACK_IMPORTED_MODULE_1__["inkySettings"]);
const blinky = new _ghost__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _ghost__WEBPACK_IMPORTED_MODULE_1__["blinkySettings"]);
const pinky = new _ghost__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _ghost__WEBPACK_IMPORTED_MODULE_1__["pinkySettings"]);
const clyde = new _ghost__WEBPACK_IMPORTED_MODULE_1__["default"](ctx, _ghost__WEBPACK_IMPORTED_MODULE_1__["clydeSettings"]);

const background = new _background__WEBPACK_IMPORTED_MODULE_2__["default"](ctx);

const world = new _world__WEBPACK_IMPORTED_MODULE_7__["default"](sanik, background, [inky, blinky, pinky, clyde]);

class Game {
  constructor() {
    this.player = player;
    this.background = background;
    this.physics = _physics__WEBPACK_IMPORTED_MODULE_3__["default"];
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
    this.makeTouchController = this.makeTouchController.bind(this);
    Object(_controller__WEBPACK_IMPORTED_MODULE_5__["default"])(this.player);
  }

  tick () {
    this.spriteArr.forEach((sprite) => {
      sprite.update();
    })
    this.physics(this.player, this.world);
    this.world.processWorld();
    this.render();
  }

  makeTouchController () {
    Object(_generate_controller__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(_touch_controller__WEBPACK_IMPORTED_MODULE_6__["default"])(this.player);
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
    // ctx.font = "15px Arial";
    // ctx.fillText(`${this.player.sprite.destX + this.world.background.sourceX},` +
    //   ` ${this.player.sprite.destY}`, 15, 15);
    // ctx.fillText(`${this.world.ground}`, 15, 35);
  }
}


/***/ }),

/***/ "./scripts/generate_controller.js":
/*!****************************************!*\
  !*** ./scripts/generate_controller.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const generateController = () => {
  const left = document.createElement('div');
  const jump = document.createElement('div');
  const right = document.createElement('div');

  left.id = 'left';
  jump.id = 'jump';
  right.id = 'right';

  jump.innerHTML = '<h2 id="jumpButton">J</h2>';

  const controller = document.getElementById('controller');
  controller.innerHTML = '';
  [left, jump, right].forEach((child) => {
    controller.appendChild(child);
  })
}

/* harmony default export */ __webpack_exports__["default"] = (generateController);


/***/ }),

/***/ "./scripts/ghost.js":
/*!**************************!*\
  !*** ./scripts/ghost.js ***!
  \**************************/
/*! exports provided: blinkySettings, pinkySettings, inkySettings, clydeSettings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blinkySettings", function() { return blinkySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pinkySettings", function() { return pinkySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inkySettings", function() { return inkySettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clydeSettings", function() { return clydeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ghost; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./scripts/sprite.js");


const ghostImg = new Image();
ghostImg.src = './assets/inky_pinky_blinky_clyde.png';

const blinkySettings = {
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

const pinkySettings = Object.assign(
  {},
  blinkySettings,
  {
    name: 'pinky',
    sourceY: 18,
    destX: 1296,
    destY: 68
  }
);
const inkySettings = Object.assign(
  {},
  blinkySettings,
  {
    name: 'inky',
    sourceY: 34,
    destX: 1765,
    destY: 84
  }
);
const clydeSettings = Object.assign(
  {},
  blinkySettings,
  {
    name: 'clyde',
    sourceY: 50,
    destX: 1961,
    destY: 116
  }
);

class Ghost extends _sprite__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),

/***/ "./scripts/physics.js":
/*!****************************!*\
  !*** ./scripts/physics.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const physics = (player, world) => {
  // gravity and ground
  if (player.sprite.destY < world.ground) {
    if (player.sprite.destY + (player.vVel + 3) >= world.ground) {
      player.vVel = 0;
      player.sprite.destY = world.ground;
    } else {
      player.vVel += 1;
    }
  } else if (player.sprite.destY > world.ground) {
    player.vVel += 1;
  }
  // right and left barriers
  if (player.sprite.destX <= world.left) {
    player.sprite.destX += 7;
  } else if (player.sprite.destX >= world.right) {
    player.sprite.destX -= 7;
  }
  player.affect();
};

/* harmony default export */ __webpack_exports__["default"] = (physics);


/***/ }),

/***/ "./scripts/player.js":
/*!***************************!*\
  !*** ./scripts/player.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
class Player {
  constructor(sprite) {
    this.sprite = sprite;

    this.hVel = 0;
    this.vVel = 0;
  }

  affect () {
    if (this.vVel === 0) {
      if (this.hVel === 0) {
        this.sprite.chill();
      } else {
        this.sprite.walk();
      }
    } else if (this.vVel > 0) {
      this.sprite.jump();
    } else if (this.vVel < 0) {
      this.sprite.fall();
    }
    this.sprite.moveVert(this.vVel);
    this.sprite.moveHoriz(this.hVel);
  }

  left () {
    this.sprite.facingLeft = true;
    this.hVel = -7;
  }

  right () {
    this.sprite.facingLeft = false;
    this.hVel = 7;
  }

  jump () {
    if (this.sprite.destY > 0) {
      this.vVel -= 15;
    }
  }

  stop () {
    this.hVel = 0;
  }

}


/***/ }),

/***/ "./scripts/sanik.js":
/*!**************************!*\
  !*** ./scripts/sanik.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sanik; });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./scripts/sprite.js");


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

class Sanik extends _sprite__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(ctx, options) {
    const settings = Object.assign({}, sonicOptions, options);
    super(ctx, settings);
    this.facingLeft = false;
    this.animArray = [{x: 0, y:0, w: 0}];
    this.dead = false;

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
    this.speed = 7;
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


/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./scripts/game.js");


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const canvasSize = () => {
  ctx.canvas.width = window.innerWidth * 0.9;
};

canvasSize();

window.addEventListener('resize', () => {
  canvasSize();
});

const game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]();
window.generateController = game.makeTouchController;

window.addEventListener('load', () => {
  const gameLoop = setInterval(() => {
    game.tick();
  }, 1000 / 60);
  window.gameLoop  = gameLoop;

  // in game music
  const music = document.getElementById('gameMusic');
  document.getElementById('playButton').addEventListener('click', () => {
    togglePlay(music);
  });
  const togglePlay = (music) => {
    if (music.duration > 0 && music.currentTime > 0) {
      music.pause();
      music.currentTime = 0;
    } else {
      music.currentTime = 0;
      music.play();
    }
  };
  // in game music
});


/***/ }),

/***/ "./scripts/sprite.js":
/*!***************************!*\
  !*** ./scripts/sprite.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
class Sprite {
  constructor(context, options) {
    // properties
    this.context = context;
    this.img = options.image;
    this.sourceX = options.sourceX;
    this.sourceY = options.sourceY;
    this.sourceWidth = options.sourceWidth;
    this.sourceHeight = options.sourceHeight;
    this.destX = options.destX;
    this.destY = options.destY;
    this.destWidth = options.destWidth;
    this.destHeight = options.destHeight;
    this.animCount = 0;
    this.flipped = false;

    // methods
    this.moveVert = this.moveVert.bind(this);
    this.moveHoriz = this.moveHoriz.bind(this);
    this.unRender = this.unRender.bind(this);
    this.flip = this.flip.bind(this);
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
  }

  animate () {
    // meant to be overwritten by child classes
  }

  moveVert(px) {
    this.unRender();
    this.destY += px;
    this.render();
  }

  moveHoriz(px) {
    this.unRender();
    this.destX += px;
    this.render();
  }

  flip() {
    this.flipped = !this.flipped;
  }

  unRender() {
    this.context.clearRect(
      this.destX,
      this.destY,
      this.destWidth,
      this.destHeight
    );
  }

  update () {
    this.animCount++;
    this.animate();
  }

  render () {
    this.context.drawImage(
      this.img,
      this.sourceX,
      this.sourceY,
      this.sourceWidth,
      this.sourceHeight,
      this.destX,
      this.destY,
      this.destWidth,
      this.destHeight
    );
  }
}


/***/ }),

/***/ "./scripts/touch_controller.js":
/*!*************************************!*\
  !*** ./scripts/touch_controller.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const touchController = (player) => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const jump = document.getElementById('jumpButton');

  const controller = document.getElementById('controller');

  controller.addEventListener('mousedown', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
        player.left();
        break;
      case right:
        player.right();
        break;
      case jump:
        player.jump();
        break;
      default:
        null;
    }
  })
  controller.addEventListener('mouseup', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
      case right:
        player.stop();
        break;
      default:
        null;
    }
  });

  controller.addEventListener('touchstart', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
        player.left();
        break;
      case right:
        player.right();
        break;
      case jump:
        player.jump();
        break;
      default:
        null;
    }
  });
  controller.addEventListener('touchend', (e) => {
    e.preventDefault();
    switch (e.target) {
      case left:
      case right:
        player.stop();
        break;
      default:
        null;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (touchController);


/***/ }),

/***/ "./scripts/world.js":
/*!**************************!*\
  !*** ./scripts/world.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return World; });
class World {
  constructor (sprite, background, ghosts) {
    this.sprite = sprite;
    this.background = background;
    this.ghosts = ghosts;
    this.ground = 168;
    this.rBound = 2209;
    this.left = 0;
    this.right = 2209 - background.sourceX;
    this.ghostDir = 1;
    this.ghostSlider = 0

    this.reset = this.reset.bind(this);
    this.scrollGhosts = this.scrollGhosts.bind(this);
  }

  getSanikPos () {
    return this.sprite.destX + this.background.sourceX;
  }

  scrollBackground () {
    const dispWidth = this.background.context.canvas.width;
    if (this.sprite.destX > (dispWidth * 0.8) &&
        this.background.sourceX + dispWidth < 2630) {
      this.background.sourceX += 7;
      this.sprite.destX -= 7;
      this.scrollGhosts(-1);
    } else if (
      this.sprite.destX < (dispWidth * 0.2) &&
      this.background.sourceX > 0
    ) {
      this.background.sourceX -= 7;
      this.sprite.destX += 7;
      this.scrollGhosts(1);
    }
  }

  checkForBarrier () {
    const sanikLeft = this.getSanikPos();
    const sanikRight = this.getSanikPos() + this.sprite.destWidth;
    const sanikFeet = this.sprite.destY + this.sprite.destHeight;
    if (sanikLeft <= 2306) {
      this.left = 0;
    } else {
      this.left = 2306;
    }
    if (sanikRight <= 2306) {
      if (sanikFeet > 138) {
        this.right = 2210 - this.background.sourceX;
      } else if (sanikFeet > 105) {
        this.right = 2241 - this.background.sourceX;
      } else if (sanikFeet > 72) {
        this.right = 2274 - this.background.sourceX;
      } else {
        this.right = 2632 - this.background.sourceX;
      }
    }
  }

  checkForDie () {
    if (this.sprite.dead) {
      window.clearInterval(gameLoop);
      const container = document.getElementById('container');
      container.innerHTML = '<h2>Oh no! You died!</h2>'
      this.gameOverButton();
    }
  }

  checkForFall () {
    const sanikPos = this.getSanikPos();
    if (
      (sanikPos > 255 && sanikPos < 270) ||
      (sanikPos > 353 && sanikPos < 368) ||
      (sanikPos > 753 && sanikPos < 792) ||
      (sanikPos > 864 && sanikPos < 941) ||
      (sanikPos > 1024 && sanikPos < 1036) ||
      (sanikPos > 1168 && sanikPos < 1218) ||
      (sanikPos > 1312 && sanikPos < 1380) ||
      (sanikPos > 1417 && sanikPos < 1515) ||
      (sanikPos > 1543 && sanikPos < 1565) ||
      (sanikPos > 1633 && sanikPos < 1660) ||
      (sanikPos > 1793 && sanikPos < 1804) ||
      (sanikPos > 1921 && sanikPos < 1950) ||
      (sanikPos > 2017 && sanikPos < 2060) ) {
      this.ground = 300;
    }
    if (this.sprite.destY > 250) {
      this.sprite.dead = true;
    }
  }

  checkForGhostTouches () {
    const sanikLeft = this.sprite.destX;
    const sanikRight = sanikLeft + this.sprite.destWidth;
    const sanikTop = this.sprite.destY;
    const sanikBottom = sanikTop + this.sprite.destHeight;
    this.ghosts.forEach((ghost) => {
      const ghostLeft = ghost.destX;
      const ghostRight = ghostLeft + ghost.destWidth;
      const ghostTop = ghost.destY;
      const ghostBottom = ghostTop + ghost.destHeight;
      if (
        (
          (ghostLeft < sanikRight && ghostLeft > sanikLeft) ||
          (ghostRight > sanikLeft && ghostRight < sanikRight)
        ) && (
          (ghostTop < sanikBottom && ghostTop > sanikTop) ||
          (ghostBottom > sanikTop && ghostBottom < sanikBottom)
        )
      ) {
        this.sprite.dead = true;
      }
    })
  }


  checkForPlatform () {
    const sanikPos = this.getSanikPos();
    if (sanikPos <= 255) {
      this.ground = 167;
    } else if (
      (sanikPos >= 270 && sanikPos <= 353) ||
      (sanikPos >= 492 && sanikPos <= 560)
    ) {
      this.ground = 152;
    } else if (
      (sanikPos >= 397 && sanikPos <= 495) &&
      (this.sprite.destY + this.sprite.destHeight < 75)
    ) {
        this.ground = 35;
    } else if (
      (sanikPos >= 386 && sanikPos <= 512 &&
      this.sprite.destY + this.sprite.destHeight > 75) ||
      (sanikPos >= 1120 && sanikPos <= 1168) ||
      (sanikPos >= 1857 && sanikPos <= 1918) ||
      (sanikPos >= 1953 && sanikPos <= 2016)
    ) {
      this.ground = 101;
    } else if (
      (sanikPos >= 561 && sanikPos <= 624)
    ) {
      this.ground = 85;
    } else if (
      (sanikPos >= 624 && sanikPos <= 753)
    ) {
      this.ground = 20;
    } else if (
      (sanikPos > 962 && sanikPos <= 1026 &&
      this.sprite.destY + this.sprite.destHeight < 75)
    ) {
      this.ground = 35;
    } else if (
      (sanikPos >= 935 && sanikPos <= 963 &&
      this.sprite.destY + this.sprite.destHeight < 156)
    ) {
      this.ground = 115;
    } else if (
      (sanikPos >= 801 && sanikPos <= 862) ||
      (sanikPos >= 925 && sanikPos <= 1023 &&
      this.sprite.destY + this.sprite.destHeight > 75) ||
      (sanikPos >= 1044 && sanikPos <= 1120) ||
      (sanikPos >= 1808 && sanikPos <= 1857)
    ) {
      this.ground = 167;
    } else if (
      (sanikPos >= 1216 && sanikPos <= 1312)
    ) {
      this.ground = 53;
    } else if (
      (sanikPos >= 1338 && sanikPos <= 1366)
    ) {
      this.ground = 81;
    } else if (
      (sanikPos >= 1388 && sanikPos <= 1416)
    ) {
      this.ground = 70;
    } else if (
      (sanikPos >= 1514 && sanikPos <= 1544)
    ) {
      this.ground = 145;
    } else if (
      (sanikPos >= 1568 && sanikPos <= 1634)
    ) {
      this.ground = 131;
    } else if (
      (sanikPos >= 1664 && sanikPos <= 1794)
    ) {
      this.ground = 72;
    } else if (
      (sanikPos >= 1809 && sanikPos <= 1857)
    ) {
      this.ground = 161;
    } else if (
      (sanikPos >= 2066 && sanikPos <= 2630)
    ) {
      this.ground = 167;
    }
  }

  checkForWin () {
    const sanikPos = this.getSanikPos();
    if (sanikPos >= 2546 && this.sprite.destY <= this.ground) {
      window.clearInterval(gameLoop);
      const container = document.getElementById('container');
      container.innerHTML = '<h2>Congratulations! You won!</h2>'
      this.gameOverButton();
    }
  }

  moveGhost () {
    if (this.sprite.animCount % 15 === 0) {
      if (this.ghostSlider % 100 === 0) {
        this.ghostDir *= -1;
      }
      this.ghosts.forEach((ghost) => {
        ghost.destX += 3 * this.ghostDir;
      })
      this.ghostSlider += 5 * this.ghostDir;
    }
  }

  reset (e) {
    e.preventDefault();
    window.location.href = window.location.href;
  }

  scrollGhosts (dir) {
    this.ghosts.forEach((ghost) => {
      ghost.destX += 7 * dir;
    })
  }

  gameOverButton() {
    const btn = document.createElement('button');
    const form = document.createElement('form');
    btn.innerText = 'Start Over';
    btn.style = 'width: 25%; height: 150px; border-radius: 10px;';
    form.onsubmit = this.reset;
    form.append(btn);
    container.append(form);
    btn.focus();
  }

  processWorld () {
    this.scrollBackground();
    this.moveGhost();
    this.checkForFall();
    this.checkForPlatform();
    this.checkForGhostTouches();
    this.checkForWin();
    this.checkForDie();
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map