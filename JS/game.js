class Game {
    constructor() {
      this.player = new Player();
      // this.tube = new Tube();
      this.platfArr = [];
  
      this.frames = 0;
      this.isGameOn = true;
    }
  
    gameOver = () => {
      this.isGameOn = false;
      gameScreenNode.style.display = "none"
      gameOverScreenNode.style.display = "flex"
    }
  
    colPlayerFloor = () => {
      if (this.player.y + this.player.h > gameBoxNode.offsetHeight) {
          this.gameOver();
      }
    }
  
    // colPlatf = () => {
    //   this.tubeArr.forEach((eachObst) => {
    //       if (this.bird.x < eachObst.x + eachObst.w &&
    //           this.bird.x + this.bird.w > eachObst.x &&
    //           this.bird.y < eachObst.y + eachObst.h &&
    //           this.bird.y + this.bird.h > eachObst.y
    //           ) {
    //           this.gameOver()
    //           }
    //   })
    // }
  
    obstAppear = () => {
      if (this.platfArr.length === 0 || this.frames % 120 === 0) {
          let randomPosY = Math.floor(Math.random() * -200)
  
          let newPlatfUp = new Platform(randomPosY, true)
          this.platfArr.push (newPlatfUp)
  
          let newPlatfDown = new Platform(randomPosY + 400, false)
          this.platfArr.push (newPlatfDown)
      }
    }
  
    // obstDisappear = () => {
    //   if (this.tubeArr[0].x < -50) {
    //       this.tubeArr[0].node.remove()
    //       this.tubeArr.shift()
    //   }
    // }
  
    gameLoop = () => {
      // console.log("start")
      this.frames++;
      this.player.gravityEffect();
      // this.tube.automaticMovement();
      this.obstAppear();
    //   this.obstDisappear();
      this.colPlayerFloor();
    //   this.colPlatf();
      this.platfArr.forEach((eachObst) => {
          eachObst.automaticMovement();
      })
      if (this.isGameOn === true) {
          requestAnimationFrame(this.gameLoop);
      }
    };
  }