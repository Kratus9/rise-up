const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen")

let gameObj = null;

// * STATE MANAGEMENT FUNCTIONS
function startGame () {
    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    gameObj = new Game();
    // console.log(gameObj)
    gameObj.gameLoop()
}

function restartGame () {
    gameOverScreenNode.style.display = "none";
    splashScreenNode.style.display = "flex";
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
gameBoxNode.addEventListener("click", () => {
    if (gameObj.isGameOn === true) {
        gameObj.player.jumpEffect()
    }
})
restartBtnNode.addEventListener("click", restartGame)