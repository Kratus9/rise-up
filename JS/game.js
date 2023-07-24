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
      if (
        this.player.x < eachObst.x + eachObst.w &&
        this.player.x + this.player.w > eachObst.x &&
        this.player.y < eachObst.y + eachObst.h &&
        this.player.y + this.player.h > eachObst.y
      ) {
        gameObj.Platform.isMoving = false //para que detenga la plataforma de colision, pero las detiene todas
      }
    });
  };

  obstAppear = () => {
    for (let i = 0; i < 5; i++) {
      let stage = new Platform(150, i * 125 + 75); // i * (espaciado entre nubes) + (posicion de la primera nube respectivamente del techo)
      this.platfArr.push(stage);
      // if ([i] === 0) {
      //   gameObj.Platform(150, 550)
      // }
    }
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
