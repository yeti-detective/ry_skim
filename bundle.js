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
/*! no static exports found */
/***/ (function(module, exports) {


let mushKingdom;

const Background = () => {

}








//
// const mushroomKingdom = new Image();
// mushroomKingdom.src = './assets/mushroom_kingdom.png';
//
// const bgDefaults = {
//   image: mushroomKingdom,
//   sourceX: 0,
//   sourceY: 0,
//   sourceWidth: 900,
//   sourceHeight: 225,
//   destX: 0,
//   destY: 0,
//   destWidth: 900,
//   destHeight: 200
// };
//
// export default class Background extends Sprite {
//   constructor(context, options) {
//     const settings = Object.assign({}, bgDefaults, options);
//     super(context, settings);
//   }
//
//
// }


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
  destX: 0,
  destY: 0,
  destWidth: 30,
  destHeight: 40
};

class Sanik extends _sprite__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
      this.unRender();
      this.sourceWidth = this.animArray[(this.animCount / this.speed) % this.animArray.length].w;
      this.destWidth = this.sourceWidth;
      this.sourceX = this.animArray[(this.animCount / this.speed) % this.animArray.length].x;
      this.render();
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


/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background */ "./scripts/background.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_background__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sanik */ "./scripts/sanik.js");
// import Sprite from './sprite'



const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const canvasSize = () => {
  ctx.canvas.width = window.innerWidth * 0.9;
  ctx.canvas.height = window.innerHeight * 0.8;
};

canvasSize();

window.addEventListener('resize', () => {
  canvasSize();
});
// const background = new Background(ctx);
const sanik = new _sanik__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
let count = 0;
let sanikActions = [
  sanik.chill,
  // sanik.flip,
  sanik.walk,
  // sanik.flip
];
window.addEventListener('load', () => {
  sanik.chill();
  setInterval(() => {
    sanik.update();
    // background.render();
    ++count;
    if (count % 60 === 0) {
      sanikActions[(count / 60) % sanikActions.length]();
      if (sanikActions[(count / 60) % sanikActions.length] === undefined) {
        console.log('whoopsie');
      }
    }
  }, 1000 / 60);
});

window.sanik = sanik;


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
    this.unRender();
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map