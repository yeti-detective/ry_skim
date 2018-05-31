// starting platform: y: 202, x: 0 => 260

export default class World {
  constructor (sprite, background) {
    this.sprite = sprite;
    this.background = background;
    this.ground = 168;
    this.rBound = 2209;
    this.left = 0;
    this.right = 2209 - background.sourceX;

    this.reset = this.reset.bind(this);
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
    } else if (
      this.sprite.destX < (dispWidth * 0.2) &&
      this.background.sourceX > 0
    ) {
      this.background.sourceX -= 7;
      this.sprite.destX += 7;
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
  }

  checkForPlatform () {
    const sanikPos = this.getSanikPos();
    if (sanikPos <= 255) {
      this.ground = 167;
    } else if (
      (sanikPos >= 270 && sanikPos <= 353) ||
      (sanikPos >= 512 && sanikPos <= 560)
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
      (sanikPos >= 561 && sanikPos <= 640)
    ) {
      this.ground = 85;
    } else if (
      (sanikPos >= 642 && sanikPos <= 753)
    ) {
      this.ground = 20;
    } else if (
      (sanikPos > 962 && sanikPos <= 1026 &&
      this.sprite.destY + this.sprite.destHeight < 75)
    ) {
      this.ground = 35
    } else if (
      (sanikPos >= 801 && sanikPos <= 862) ||
      (sanikPos >= 945 && sanikPos <= 1023 &&
      this.sprite.destY + this.sprite.destHeight > 75) ||
      (sanikPos >= 1044 && sanikPos <= 1120) ||
      (sanikPos >= 1808 && sanikPos <= 1857)
    ) {
      this.ground = 165;
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
      this.ground = 73;
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

  checkForBarrier () {
    const sanikLeft = this.getSanikPos();
    const sanikRight = this.getSanikPos() + this.sprite.destWidth;
    if (sanikLeft = 0) {
      this.left = 0;
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

  checkForDie () {
    if (this.sprite.destY > 250) {
      window.clearInterval(gameLoop);
      const container = document.getElementById('container');
      container.innerHTML = '<h2>Oh no! You died!</h2>'
      this.gameOverButton();
    }
  }

  reset () {
    window.location.href = window.location.href;
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
    this.checkForFall();
    this.checkForPlatform();
    this.checkForWin();
    this.checkForDie();
  }
}
