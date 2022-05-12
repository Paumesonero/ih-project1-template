class BulletController {
    constructor(x, y, width, height, speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        // Propiedades de la bullet (x,y,width,height,speed)
    }
    _appear() {
        // qué pasa cuando soy disparado y - speed
        this.y = this.y - this.speed
        console.log('its me mario')
        // Si desaparezco del canvas, clearInterval
    }

}