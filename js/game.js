class Game {
  constructor(context) {
    this.ctx = context;
    this.spaceShip = new Player(300, 400, 40, 40);
  }

  // _assignControls() {
  //   // Controles del teclado
  //   document.addEventListener('keydown', (event) => {
  //     switch (event.code) {
  //       case 'ArrowLeft':
  //         this.meatball.moveLeft();
  //         break;
  //       case 'ArrowRight':
  //         this.meatball.moveRight();
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }

  _drawSpaceShip() {
    this.ctx.fillRect(this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
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