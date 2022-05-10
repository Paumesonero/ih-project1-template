class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.spaceShip = new Player(450, 400, 130, 130);
    this.asteroidInterval = undefined;
    this.speedFall = undefined;
    this.asteroids = [];
  }




  _assignControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.spaceShip.moveLeft();
          break;
        case 'ArrowRight':
          this.spaceShip.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _drawSpaceShip() {
    this.ctx.drawImage(spaceShipImg, this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
  }
  _drawAsteroid() {
    this.asteroids.forEach((el) => {
      this.ctx.fillRect(el.x, el.y, el.width, el.height);
    });
  }
  _makeAsteroid() {
    const newAsteroid = new Asteroids(70, 70);
    this.asteroids.push(newAsteroid)
  }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600)
  }

  _update() {
    this._clean();
    this._drawSpaceShip();
    this._drawAsteroid();
    let counter = 0;
    this.speedFall = setInterval(() => {
      if (counter < this.asteroids.length) {
        this.asteroids[counter]._fallingAsteroid();
        counter++
      }
    }, 1000);
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls()
    this.asteroidInterval = setInterval(() => {
      this._makeAsteroid();
    }, 500);
    this._update();
  }
}