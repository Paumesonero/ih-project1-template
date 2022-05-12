class Player {
    constructor(x, y, width, height, bulletController) {
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = width;
        this.height = height;
        this.bulletSpeed = 6;


    }

    moveRight() {
        this.x = this.x + 45;
        if (this.x > 1000) {
            this.x = 10 - this.width
        }
    }

    moveLeft() {
        this.x = this.x - 45;
        if (this.x + this.width < 0) {
            this.x = 990
        }
    }

    shoot() {
        console.log('shoot')
        const bulletSpeed = 5;
        const bulletDelay = 7;
        const bulletX = this.x + this.width / 2;
        const bulletY = this.y;
        this.bulletController.shoot(bulletX, bulletY, bulletSpeed, bulletDelay);
    }
}