// find mouse coordinates
_getMousePos(){
    window.addEventListener('mousemove', function (eventObject) {
        console.log(`x: ${eventObject.x} and y: ${eventObject.y}`)
    })
}


//   clickProjectile() {

  //     // canvas.addEventListener('click', (event) => {
  //     //   let canvasPosition = canvas.getBoundingClientRect();
  //     //   let xPosition = Math.round(event.clientX - canvasPosition.left);
  //     //   let yPosition = Math.round(event.clientY - canvasPosition.top);
  //     //   const angle = Math.atan2(event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
  //     //   const speed = {
  //     //     x: Math.cos(angle),
  //     //     y: Math.sin(angle)
  //     //   }
  //     //   console.log(angle)


  //     //   this.projectiles.push(new Projectile(canvas.width / 2, canvas.height / 2, 10, 10, speed))

  //     //const projectile = new Projectile(canvas.width / 2, canvas.height / 2, 10, 10, { x: 1, y: 1, });
  //     // this.ctx.fillStyle = 'red'
  //     // this.ctx.fillRect(projectile.x, projectile.y, projectile.width, projectile.height)


  //   })
  // }

  // _getMousePos() {
  //   const state = {
  //     mouse: {
  //       x: 0,
  //       y: 0,
  //     },
  //     ship: {
  //       x: 450,
  //       y: 220,
  //       rotation: 0,
  //     }
  //   };
  //   window.addEventListener('mousemove', (event) => {
  //     state.mouse.x = event.clientX;
  //     state.mouse.y = event.clientY;

  //   });
  // let moveTank = {
  //   update:
  // }
  //}

  // _getMousePos() {

  //   canvas.addEventListener('mousemove', function (eventObject) {
  //     let canvasPosition = canvas.getBoundingClientRect();
  //     let xPosition = Math.round(eventObject.clientX - canvasPosition.left);
  //     let yPosition = Math.round(eventObject.clientY - canvasPosition.top);
  //     // console.log(`x: ${xPosition} y: ${yPosition}`)
  //   })
  // }

  // _animate() {
  //   this.projectiles.forEach((projectile) => {
  //     this.projectile.update()
  //   })
  // }