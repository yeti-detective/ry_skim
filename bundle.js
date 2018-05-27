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
  destHeight: 360
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
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./scripts/background.js");
/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./physics */ "./scripts/physics.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player */ "./scripts/player.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ "./scripts/controller.js");
/* harmony import */ var _touch_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./touch_controller */ "./scripts/touch_controller.js");
/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./world */ "./scripts/world.js");








const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const sanik = new _sanik__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
const player = new _player__WEBPACK_IMPORTED_MODULE_3__["default"](sanik);

const background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);

const world = new _world__WEBPACK_IMPORTED_MODULE_6__["default"](sanik, background);

class Game {
  constructor() {
    this.player = player;
    this.background = background;
    this.physics = _physics__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.world = world;

    Object(_controller__WEBPACK_IMPORTED_MODULE_4__["default"])(this.player);
    Object(_touch_controller__WEBPACK_IMPORTED_MODULE_5__["default"])(this.player);
  }

  tick () {
    this.player.sprite.update();
    this.background.update();
    this.physics(this.player, this.world);
    this.world.scrollBackground();
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
  if (player.sprite.destY < world.ground) {
    player.vVel += 3;
  } else if (player.sprite.destY > world.ground) {
    player.vVel = 0;
    player.sprite.destY = world.ground;
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
    this.vVel -= 30;
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
sanikImg.src = "./assets/sonic.png";

const sonicOptions = {
  image: sanikImg,
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 30,
  sourceHeight: 40,
  destX: 85,
  destY: 202,
  destWidth: 30,
  destHeight: 40
};

class Sanik extends _sprite__WEBPACK_IMPORTED_MODULE_0__["default"] {
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


/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ "./scripts/game.js");
// import Sprite from './sprite'
// import Background from './background';
// import Sanik from './sanik';


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const canvasSize = () => {
  ctx.canvas.width = window.innerWidth * 0.9;
};

canvasSize();

window.addEventListener('resize', () => {
  canvasSize();
});

const game = new _game_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

window.addEventListener('load', () => {
  setInterval(() => {
    game.tick();
  }, 1000 / 60);

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
// starting platform: y: 202, x: 0 => 260

class World {
  constructor (sprite, background) {
    this.sprite = sprite;
    this.background = background;
    this.ground = 202;
    this.rBound = 2209;
    this.relX = sprite.destX;
  }

  scrollBackground () {
    const dispWidth = this.background.context.canvas.width;
    if (this.sprite.destX > (dispWidth * 0.8) &&
        this.background.sourceX + dispWidth < 2630) {
      this.background.sourceX += 7;
      this.sprite.destX -= 7;
    } else if (
      this.sprite.destX < (dispWidth * 0.2) &&
      this.background.sourceX > 0
    ) {
      this.background.sourceX -= 7;
      this.sprite.destX += 7;
    }
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map