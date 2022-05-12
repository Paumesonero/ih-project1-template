class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.spaceShip = new Player(450, 400, 130, 130);
    // this.bullet = new BulletController(canvas);
    this.asteroidInterval = undefined;
    //this.bulletInterval = undefined;
    this.speedFall = undefined;
    this.asteroids = [];
    this.bullets = [];
    // this.state = 'still'; // 'shooting'
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
        case 'Space':
          // this.bullet.shoot(); // Si lo guardo en Game
          this.spaceShip.bullet._appear() // Si guardo la bala en Player
          this.bullets.push(this.spaceShip.bullet)
          console.log(this.bullets)

          break;
        // default:
        //   break;
      }
    });
  }

  //   _assignControls() {
  //   document.addEventListener('keyup', (event) => {
  //     switch (event.code) {
  //       case 'Space':
  //         this.state = 'still'
  //         break;
  //       // default:
  //       //   break;
  //     }
  //   });
  // }

  _drawSpaceShip() {
    this.ctx.drawImage(spaceShipImg, this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
  }


  _drawAsteroid() {
    this.asteroids.forEach((el) => {
      this.ctx.drawImage(asteroidImg, el.x, el.y, el.width, el.height);
    });
  }

  _drawBullet() {
    this.bullets.forEach((el) => {
      this.ctx.drawImage(bulletImg, el.x, el.y, el.width, el.height)
    })

  }

  // _makeBullet() {
  //   const newBullet = new BulletController(this.spaceShip.x, this.spaceShip.y, 10, 10, 5)
  //   this.bullets.push(newBullet)
  //   console.log(this.bullets)
  // }

  _makeAsteroid() {
    const newAsteroid = new Asteroids(70, 70);
    this.asteroids.push(newAsteroid)
  }

  _detectCollision() {
    this.asteroids.forEach(asteroid => {
      if (
        (this.spaceShip.x >= asteroid.x && this.spaceShip.x <= asteroid.x + asteroid.width ||
          this.spaceShip.x + this.spaceShip.width >= asteroid.x && this.spaceShip.x + this.spaceShip.width <= asteroid.x + asteroid.width
        ) &&
        (this.spaceShip.y >= asteroid.y && this.spaceShip.y <= asteroid.y + asteroid.height ||
          this.spaceShip.y + this.spaceShip.height >= asteroid.y && this.spaceShip.y + this.spaceShip.height <= asteroid.y + asteroid.height)
      ) {
        console.log('oh oh, we have a problem-oh')
        this.gameOver()
      }
    })
  }


  gameOver() {
    clearInterval(this.speedFall);
    clearInterval(this.asteroidInterval);

    const gameOverPage = document.getElementById('lose-page')
    gameOverPage.style = 'display : flex';
    const hideCanvas = document.getElementById('canvas');
    hideCanvas.style = 'display: none;'
  }

  _removeAsteroid() {
    this.asteroids.forEach((asteroid) => {
      if (asteroid.y > 650) {
        let index = this.asteroids.indexOf(asteroid);
        this.asteroids.splice(index, 1)
      }
      //console.log(this.asteroids)
    })
  }


  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600)
  }

  _update() {
    this._clean();
    this._removeAsteroid();
    this._drawBullet();
    this._drawSpaceShip();
    this._drawAsteroid();

    this._detectCollision();
    let counter = 0;
    this.speedFall = setInterval(() => {
      if (counter < this.asteroids.length) {
        this.asteroids[counter]._fallingAsteroid();
        counter++
      }
    }, 500);

    window.requestAnimationFrame(() => this._update());
  }

  start() {
    this._assignControls()
    // this.bulletInterval = setInterval(() => {
    //   this._makeBullet();
    // }, 300)
    this.asteroidInterval = setInterval(() => {
      this._makeAsteroid();
    }, 500);
    this._update();
  }
}