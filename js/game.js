class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.spaceShip = new Player(450, 400, 90, 90);
    this.asteroidInterval = undefined;
    this.bulletInterval = undefined;
    this.speedFall = undefined;
    this.spedUpBullet = undefined;
    this.asteroids = [];
    this.bullets = [];
    this.firing = false;
    this.totalScore = 0;
    //sounds
    this.destroyAsteroidSnd = new sound('./sounds/distantexplosion.wav');
    this.spaceShipCollision = new sound('./sounds/spaceshipCollision.wav')
    //explosion sprite
    this.explosionInterval = undefined;
    this.explosion = undefined;
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

          console.log(this.bullets)
          this.startFiring();
          break;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'Space':
          this.firing = false;
          clearInterval(this.bulletInterval);
          break;
      }
    });
  }

  // Drawing
  _drawSpaceShip() {
    this.ctx.drawImage(spaceShipImg, this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
    //this.ctx.fillRect(this.spaceShip.x, this.spaceShip.y, this.spaceShip.width, this.spaceShip.height)
  }


  _drawAsteroid() {
    this.asteroids.forEach((el) => {
      this.ctx.drawImage(asteroidImg, el.x, el.y, el.width, el.height);
    });
  }

  _drawBullet() {
    if (this.bullets.length != 0) {
      this.bullets.forEach((el) => {
        this.ctx.drawImage(bulletImg, el.x, el.y, el.width, el.height)
      })
    }
  }

  _drawExplosion() {
    if (this.explosion) {
      this.asteroids.forEach((el) => {
        this.ctx.drawImage(this.explosion, el.x + (el.width / 2) - 100, el.y - 130, 150, 150);
      })
    }
  }



  // Making asteroids and bullets.


  _makeBullet() {
    const newBullet = new BulletController(this.spaceShip.x + this.spaceShip.width / 2, this.spaceShip.y, 20, 20, 3)
    this.bullets.push(newBullet)
    console.log(this.bullets)
  }

  _makeAsteroid() {
    const newAsteroid = new Asteroids(70, 70);
    this.asteroids.push(newAsteroid)
  }

  //Collisions.


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
        this.spaceShipCollision.play()

        this.gameOver()
      }
    })
  }



  _bulletsAsteroidsCollision() {
    this.asteroids.forEach(asteroid => {
      this.bullets.forEach(bullet => {
        if (bullet.x + bullet.width >= asteroid.x && bullet.x + bullet.width <= asteroid.x + asteroid.width && bullet.y <= asteroid.y + asteroid.height) {
          let bulletIndex = this.bullets.indexOf(bullet);
          this.bullets.splice(bulletIndex, 1)
          let asteroidIndex = this.asteroids.indexOf(asteroid);
          this.asteroids.splice(asteroidIndex, 1)
          this.destroyAsteroidSnd.play()
          //this._iterateExplosion();
          this.totalScore = this.totalScore + 5

        }
      })
    })
  }

  // clearing everything once game is finished
  gameOver() {
    clearInterval(this.speedFall);
    clearInterval(this.asteroidInterval);
    clearInterval(this.spedUpBullet);

    const gameOverPage = document.getElementById('lose-page')
    gameOverPage.style = 'display : flex';
    const hideCanvas = document.getElementById('canvas');
    hideCanvas.style = 'display: none;'
  }

  //Removing Asteroids and bullet when theyre not in canvas.
  _removeAsteroid() {
    this.asteroids.forEach((asteroid) => {
      if (asteroid.y > 650) {
        let index = this.asteroids.indexOf(asteroid);
        this.asteroids.splice(index, 1)
      }
      //console.log(this.asteroids)
    })
  }

  _removeBullet() {
    this.bullets.forEach((bullet) => {
      if (bullet.y < -10) {
        let index = this.bullets.indexOf(bullet);
        this.bullets.splice(index, 1)
        this.totalScore = this.totalScore - 1
      }
    })
  }

  // sharing total in screen.
  _showScore() {
    this.ctx.fillStyle = 'black';
    this.ctx.font = '15px Prompt';
    this.ctx.fillText(`Score: ${this.totalScore}`, 880, 30)
  }


  _clean() {
    this.ctx.clearRect(0, 0, 1000, 600)
  }

  //shooting

  startFiring() {
    this.firing = true;
    this.chargeBullets();
    let counterBullets = 0;
    this.spedUpBullet = setInterval(() => {
      if (counterBullets < this.bullets.length) {
        this.bullets[counterBullets]._appear();
        counterBullets++
      }
    }, 100)
  }

  chargeBullets() {
    console.log('charging!');
    this.bulletInterval = setInterval(() => {
      this._makeBullet();
    }, 50)
  }

  //explosion apply

  _iterateExplosion() {
    let counter = 0;
    this.explosionInterval = setInterval(() => {
      if (counter < explosionsArr.length) {
        this.explosion = explosionsArr[counter];
        counter++
      }
      if (counter == explosionsArr.length) {
        this.explosion = undefined;
        clearInterval(this.explosionInterval);
        counter = 0;
      }
    }, 40)
  }



  _update() {
    this._clean();
    this._removeAsteroid();
    this._removeBullet();
    this._drawBullet();
    this._drawSpaceShip();
    this._drawAsteroid();
    this._drawExplosion();
    this._detectCollision();
    this._bulletsAsteroidsCollision();
    this._showScore()
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
    this.asteroidInterval = setInterval(() => {
      this._makeAsteroid();
    }, 500);
    this._update();
  }
}