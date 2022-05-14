class BulletController {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.speedInterval = undefined;
        // Propiedades de la bullet (x,y,width,height,speed)
    }
    _appear() {
        // qué pasa cuando soy disparado y - speed
        this.speedInterval = setInterval(() => {
            if (this.y < -15) {
                clearInterval(this.speedInterval)
            } else {
                this.y = this.y - this.speed
            }
        }, 10)
        // this.y = this.y - this.speed
        // console.log('its me mario')
        // Si desaparezco del canvas, clearInterval
    }

}