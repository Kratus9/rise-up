class Game {
  constructor() {
    this.player = new Player();
    this.platfArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
  };

  colPlayerFloor = () => {
    if (this.player.y + this.player.h > gameBoxNode.offsetHeight) {
      this.gameOver();
    }
  };

  colPlatf = () => {
    this.platfArr.forEach((eachObst) => {
      const piesPosY = this.player.y + this.player.h;
      const piesColPlatf = piesPosY >= eachObst.y && piesPosY <= eachObst.y + eachObst.h;
      const piesLargoPlatf = this.player.x + this.player.w > eachObst.x && this.player.x < eachObst.x + eachObst.w;
      if (piesColPlatf && piesLargoPlatf
        // this.player.x < eachObst.x + eachObst.w &&
        // this.player.x + this.player.w > eachObst.x &&
        // this.player.y + this.player.h >= eachObst.y &&
        // this.player.y + this.player.h <= eachObst.y + eachObst.h
      ) {
          eachObst.isMoving = false //para que detenga la plataforma de colision, pero las detiene todas
          this.player.gravitySpeed = 0
      }
      else {
        eachObst.isMoving = true
      }
    });
  };

  obstAppear = () => {
    for (let i = 0; i < 9; i++) {
      let stage = new Platform(150, i * 65 + 50) // i * (espaciado entre nubes) + (posicion de la primera nube respectivamente del techo)
      this.platfArr.push(stage);
    }
    this.platfArr[this.platfArr.length - 1].x = 160
    // necesitamos extraer la última stage para ubicarla exactamente
  };

  gameLoop = () => {
    this.frames++;
    this.player.gravityEffect();
    this.colPlayerFloor();
    this.colPlatf();
    this.platfArr.forEach((eachObst) => {
      eachObst.automaticMovement();
    });
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
