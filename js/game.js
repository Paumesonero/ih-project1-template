class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.spaceShip = new Player(450, 220, 130, 130);
    // this.bullet = new Projectile(450, 220, 20, 20, null)
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
    this.ctx.drawImage(spaceShipImg, this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
  }

  // _drawProjectile() {
  //   this.ctx.fillRect(this.bullet.x, this.bullet.y, this.bullet.width, this.bullet.height)
  //}
  clickProjectile() {

    canvas.addEventListener('click', (event) => {
      let canvasPosition = canvas.getBoundingClientRect();
      let xPosition = Math.round(event.clientX - canvasPosition.left);
      let yPosition = Math.round(event.clientY - canvasPosition.top);
      const projectile = new Projectile(canvas.width / 2, canvas.height / 2, 10, 10, null);
      this.ctx.fillStyle = 'red'
      this.ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height)


    })
  }

  // _getMousePos() {

  //   canvas.addEventListener('mousemove', function (eventObject) {
  //     let canvasPosition = canvas.getBoundingClientRect();
  //     let xPosition = Math.round(eventObject.clientX - canvasPosition.left);
  //     let yPosition = Math.round(eventObject.clientY - canvasPosition.top);
  //     // console.log(`x: ${xPosition} y: ${yPosition}`)
  //   })
  // }

  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600)
  }

  _update() {
    this._clean()
    this._drawSpaceShip();
    this.clickProjectile();
    this._drawProjectile()
    //this._getMousePos();
    window.requestAnimationFrame(() => this._update());
  }

  start() {
    // this._assignControls();

    this._update();
  }
}