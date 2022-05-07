class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.spaceShip = new Player(500, 260, 40, 0, 2 * Math.PI);
  }

  _assignControls() {
    // Controles del teclado
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft':
          this.meatball.moveLeft();
          break;
        case 'ArrowRight':
          this.meatball.moveRight();
          break;
        default:
          break;
      }
    });
  }

  _drawSpaceShip() {
    this.ctx.beginPath()
    this.ctx.arc(this.spaceShip.x, this.spaceShip.y, this.spaceShip.radius, this.spaceShip.startinstartingAngle, this.spaceShip.finishingAngle)
    this.ctx.fillStyle = 'green'
    this.ctx.fill()
    // this.ctx.fillStyle = "orange"
    // this.ctx.fillRect(this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
  }
  _update() {
    this._drawSpaceShip();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls();
    this._update();
  }
}