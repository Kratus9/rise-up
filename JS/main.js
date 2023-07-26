const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen")

let gameObj;

// * STATE MANAGEMENT FUNCTIONS
function startGame () {
    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    gameObj = new Game(1);
    gameObj.obstAppear();
    // console.log(gameObj)
    gameObj.gameLoop()
}

function restartGame () {
    gameOverScreenNode.style.display = "none";
    splashScreenNode.style.display = "flex";
    gameBoxNode.innerHTML = "";
    gameObj = new Game(1);
    gameObj.obstAppear();
    gameObj.gameLoop();
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
window.addEventListener("keydown", (event) => {
    if (gameObj.player.gravitySpeed === 0)
    if (event.key === " ") {  //Salta al apretar la SpaceBar
        gameObj.player.jumpEffect();
        gameObj.player.gravityOn();
    }
})
window.addEventListener("keydown", (event) => { //movimiento del PJ
    if (event.key === "ArrowRight" || event.key === "d") {  //moveRight al apretar => o la "d"
        if (gameObj.player.x < ((gameBoxNode.offsetWidth) - gameObj.player.w)) {
            gameObj.player.x += 20;
            gameObj.player.positionUpdate();
            gameObj.player.gravityOn();
        }
    }
    else if (event.key === "ArrowLeft" || event.key === "a") { //moveLeft al apretar <= o la "a"
        if (gameObj.player.x > 0) {
            gameObj.player.x -= 20
            gameObj.player.positionUpdate();
            gameObj.player.gravityOn();
        }
    }
})
restartBtnNode.addEventListener("click", restartGame)