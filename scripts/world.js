// starting platform: y: 202, x: 0 => 260

export default class World {
  constructor (sprite, background) {
    this.sprite = sprite;
    this.background = background;
    this.ground = 168;
    this.rBound = 2209;

    this.reset = this.reset.bind(this);
  }

  getSanikPos () {
    return this.sprite.destX + this.background.sourceX;
    // for dev
    container = document.getElementById('container');
    container.append(this.sprite.destX + this.background.sourceX);

    // for dev
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
    } else {
      this.ground = 168;
    }
  }

  checkForPlatform () {
    const sanikPos = this.getSanikPos();
    if (
      (sanikPos >= 270 && sanikPos <= 353) ||
      (sanikPos >= 512 && sanikPos <= 560)
    ) {
      debugger
      this.ground = 184;
    }
  }

  checkForWin () {
    const sanikPos = this.getSanikPos();
    if (sanikPos >= 2546 && this.sprite.destY <= this.ground) {
      const container = document.getElementById('container');
      container.innerHTML = '<h2>Congratulations! You won!</h2>'
      gameOverButton();
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
    // btn.style = 'submit';
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
    this.checkForWin();
    this.checkForDie();
  }
}
