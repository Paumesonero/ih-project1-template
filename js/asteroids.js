class Asteroids {
    constructor(width, height) {
        this.x = Math.floor(Math.random() * (950 - 4) + 5);
        this.y = Math.floor(Math.random() * (-250 + 60 + 1) - 60);
        this.width = width;
        this.height = height;
        this.fallInterval = undefined;

    }

    _fallingAsteroid() {
        this.fallInterval = setInterval(() => {
            if (this.y > 670) {
                clearInterval(this.fallInterval);
            } else {
                this.y = this.y + 1;
            }
        }, 1000)
    }
}