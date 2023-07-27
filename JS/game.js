class Game {
  constructor(stage) {
    /*Creamos condicionales exclusivamente para las modificaciones de cada stage*/
    gameBoxNode.style.backgroundImage = `url('Fotos/Fondos/Stage ${stage}.jpeg')`;

    if (stage === 1 || stage === 2) {
      /*condicionamos para la musica en cada stage */
      musikStage1.play();
    } else if (stage === 3) {
      musikStage1.pause();
      musikStage2.play();
    } else if (stage === 4 || stage === 5) {
      musikStage2.pause();
      musikStage3.play();
    } else if (stage === 6 || stage === 7) {
      musikStage3.pause();
      musikStage4.play();
    }

    this.player = new Player(); /*creamos nuevo jugador*/
    this.platfArr =
      []; /*creamos array donde almacenamos las plataformas creadas posteriormente*/

    this.frames = 0; /*indicamos el contador de frames para ir actualizando la imagen en el gameloop*/
    this.isGameOn = true; /*indicamos que el juego esta en marcha*/
    this.nextLevel = true; /*indicamos si hemos superado la fase/nivel*/
  }

  gameOver = () => {
    /*función que detiene el juego y aparece la pantalla de Game Over*/
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverScreenNode.style.display = "flex";
    musikStage1.pause();
    musikStage2.pause();
    musikStage3.pause();
    musikStage4.pause();
    musikGameOver.play();
  };

  nextStage = () => {
    /*indicamos el momento en el que el jugador pasa por lo alto de la pantalla*/
    if (this.player.y === 0) {
      stage++;
      this.nextLevel = true;
      gameBoxNode.innerHTML = "";
      startGame();
    }
  };

  colPlayerFloor = () => {
    /*chequeamos cuando el jugador cae a bajo de la pantalla*/
    if (this.player.y + this.player.h === gameBoxNode.offsetHeight + 100) {
      this.gameOver();
    }
  };

  colPlatf = () => {
    /*indicamos que cuando el jugador esta en una plataforma, se detenga el movimiento auto.*/
    this.platfArr.forEach((eachObst) => {
      const piesPosY = this.player.y + this.player.h;
      const piesColPlatf =
        piesPosY >= eachObst.y && piesPosY <= eachObst.y + 10; // este 10 sustituye la (h) altura de plataforma
      const piesLargoPlatf =
        this.player.x + this.player.w > eachObst.x &&
        this.player.x < eachObst.x + eachObst.w;

      if (piesColPlatf && piesLargoPlatf) {
        eachObst.isMoving = false;
        this.player.gravitySpeed = 0;
      } else {
        eachObst.isMoving = true;
      }
    });
  };

  obstAppear = () => { /*creamos todas las stages distintas de cada nivel*/
    // crear condicionales para modificaciones de stages
    if (stage === 1 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 75, 1, 1);
        // i * (espaciado entre nubes) + (posicion de la primera nube respectivamente del techo), (ancho del stage), (speed), (fase)
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 160;
      // necesitamos extraer la última stage para ubicarla exactamente en el eje x
    }
    if (stage === 2 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 50, 1, 2);
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 175;
    }
    if (stage === 3 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 50, 1.5, 3);
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 175;
    }
    if (stage === 4 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 50, 1.75, 4);
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 185;
    }
    if (stage === 5 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 40, 2, 5);
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 185;
    }
    if (stage === 6 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 30, 2.5, 6);
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 185;
    }
    if (stage === 7 && this.nextLevel === true) {
      for (let i = 0; i < 9; i++) {
        let stage = new Platform(150, i * 65 + 50, 25, 3, 7);
        this.platfArr.push(stage);
        this.nextLevel = false;
      }
      this.platfArr[this.platfArr.length - 1].x = 160;
    }
  };

  gameLoop = () => { /*creamos el propio bucle para ejecutar el juego*/
    gameBoxNode.addEventListener("click", () => {
      if (gameObj.player.gravitySpeed === 0) { //Salta al clickar el ratón
        gameObj.player.jumpEffect();
        gameObj.player.positionUpdate();
        gameObj.player.gravityOn();
      }
    });
    this.frames++;
    this.player.gravityEffect();
    this.colPlayerFloor();
    this.colPlatf();
    this.platfArr.forEach((eachObst) => {
      eachObst.automaticMovement();
    });
    this.nextStage();
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
