class Asteroids {
    constructor() {
        this.x = Math.floor(Math.random() * 950);
        this.y = Math.floor(Math.random() * (-80 + 50 + 1) - 50);
        this.width = Math.floor(Math.random() * (100 - 20) + 20);
        this.height = Math.floor(Math.random() * (100 - 20) + 20);
    }
}