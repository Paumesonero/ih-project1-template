class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.spaceShip = new Player(500, 270, 40, 0, 2 * Math.PI);
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
    this.ctx.beginPath()
    this.ctx.arc(this.spaceShip.x, this.spaceShip.y, this.spaceShip.radius, this.spaceShip.startinstartingAngle, this.spaceShip.finishingAngle)
    this.ctx.fillStyle = 'orange'
    this.ctx.fill()
  }

  _getMousePos() {

    canvas.addEventListener('mousemove', function (eventObject) {
      let canvasPosition = canvas.getBoundingClientRect();
      let xPosition = Math.round(eventObject.clientX - canvasPosition.left);
      let yPosition = Math.round(eventObject.clientY - canvasPosition.top);
      console.log(`x: ${xPosition} y: ${yPosition}`)
    })
  }


  _update() {
    this._drawSpaceShip();
    this._getMousePos();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    // this._assignControls();
    this._update();
  }
}