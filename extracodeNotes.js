// find mouse coordinates
_getMousePos(){
    window.addEventListener('mousemove', function (eventObject) {
        console.log(`x: ${eventObject.x} and y: ${eventObject.y}`)
    })
}