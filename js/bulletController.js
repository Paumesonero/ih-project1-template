class BulletController {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.speedInterval = undefined;

    }
    _appear() {

        this.speedInterval = setInterval(() => {
            if (this.y < -15) {
                clearInterval(this.speedInterval)
            } else {
                this.y = this.y - this.speed
            }
        }, 10)

    }

}