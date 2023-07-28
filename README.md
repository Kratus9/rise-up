# RISE UP
## [Play the Game!](https://kratus9.github.io/rise-up/)

![Game Logo](<Fotos/Favicon Rise Up.png>)

# Description

Rise Up es un juego en el cual tu objetivo es llegar a lo más alto posible. Deberás ir saltando de plataforma en plataforma hasta llegar al final de la pantalla a la última plataforma aparente y realizar un salto para pasar a la siguiente fase del juego. Cada fase que superes el nivel se irá incrementando, ya sea por la reducción del tamaño de las plataformas, o bien por el aumento de velocidad de dichas mismas. Durante el juego pasarás por un largo camino desde que empiezas en el suelo de la misma tierra hasta llegar a lo más profundo de la galaxia, pasando incluso por el mítico Olympo de los Dioses Griegos. El juego termina cuando el jugador no consiga realizar un salto correctamente y caiga al suelo sin poderlo evitar.

# Main Functionalities

- El jugador se mueve a izquierda o derecha encima de la plataforma al clickar <=/"a" o bien =>/"d".
- El juegador realiza un salto en vertical al pulsar la "SpaceBar". Podrá realizar el salto siempre y cuando los pies del jugador estén en contacto con el suelo.
- El jugador tiene un movimiento automatico estipulado de caída en representación al efecto de gravedad.
- Las plataformas se mueven de izquierda a derecha de forma automática, rebotando en el ancho máximo de la pantalla y se desplazarán más rápido, dependiendo de la fase en la que se encuentre el jugador.
- En cuanto el usuario consiga llegar a la última plataforma del Stage situada en lo más alto de la pantalla, si consigue realizar otro salto más correctamente, pasará a la siguiente Stage y se implementará la dificultad.

# Backlog Functionalities

- Me gustaría poder implementar un marcador que contara cada salto correctamente ejecutado y de esta manera, cada jugador pueda ver su puntuación.
- También querría crear un HI-SCORE, para que cada usuario pueda tener un registro sobre su máxima puntuación y así poder incentivar más a los usuarios.
- Otra funcionalidad que adaptaría a mi juego seria la rotación del personaje para que se encare cada vez que el usuario gire a derecha o izquierda.
- Por último, implementar más Stages para cada vez poder hacer el juego más longevo y divertido.

# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Classes
- JS Audio()
- JS Image()

# States

- Splash Screen / Start Screen
- Game Screen
- Game Over Screen

# Proyect Structure

- Main.js
    - Nodes
- Game.js
- Player.js
- Platform.js

## Main.js

- startGame ();
- goToLobby ();
- retryGame ();
- addEventListener("click", startGame);
- addEventListener("SpaceBar");
- addEventListener("ArrowRight");
- addEventListener("ArrowLeft");
- addEventListener("click", goToLobby);
- addEventListener("click", retryGame);

### Nodes

- startBtnNode;
- restartBtnNode;
- retryBtnNode;
- splashScreenNode;
- gameScreenNode;
- gameBoxNode;
- gameOverScreenNode;
- musikStage1*; *(Para cada una de las músicas en cada Stage);
- musikGameOver;

## Game.js

- Game () {
    - this.player;
    - this.platfArr;
    - this.frames;
    - this.isGameOn;
    - this.nextLevel;
    - (Condicionales para poner la música de cada Stage determinada);
}
- gameLoop()
- obstAppear()
- colPlatf()
- colPlayerFloor()
- nextStage()
- gameOver()

## Player.js 

- Player () {
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.gravitySpeed;
    - this.jumpSpeed;
    - this.node; (Creamos la imagen para el personaje)
}
- gravityOn()
- gravityEffect()
- jumpEffect()q
- positionUpdate()

## Platforms.js

- Platform () {
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.stage;
    - this.isMoving;
    - this.direction;
    -this.speed;
    - (Condicionales para establecer una imagen de platform a cada Stage determinada)
}
- automaticMovement()
- positionUpdate()

# Extra Links 

### Sketch
[Link](https://excalidraw.com/#room=fe116a98ec7f6a5b56df,T0np-bvAYVcmqxHnZNu8kg)

### Trello
[Link](https://trello.com/b/VU13rSIu/rise-up)

### Slides
[Link]()

## Deploy
[Link](https://kratus9.github.io/rise-up/)
