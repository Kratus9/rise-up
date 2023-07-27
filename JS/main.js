const startBtnNode = document.querySelector("#start-btn");
const restartBtnNode = document.querySelector("#restart-btn");
const retryBtnNode = document.querySelector("#retry-btn");
const splashScreenNode = document.querySelector("#splash-screen");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const gameOverScreenNode = document.querySelector("#gameover-screen")

let musikStage1 = new Audio ("Musik/Intro Epica.mp3")
let musikStage2 = new Audio ("Musik/Primeras Stages.mp3")
let musikStage3 = new Audio ("Musik/Olympo.mp3")
let musikStage4 = new Audio ("Musik/Space Stage.mp3")
let musikGameOver = new Audio ("Musik/game-thrones-verguenza.mp3")

musikStage1.volume = 0.1
musikStage1.loop
musikStage2.volume = 0.1
musikStage2.loop
musikStage3.volume = 0.1
musikStage3.loop
musikStage4.volume = 0.1
musikStage4.loop
musikGameOver.volume = 0.2
musikGameOver.loop

let gameObj;
let stage = 1

// * STATE MANAGEMENT FUNCTIONS
function startGame () {
    splashScreenNode.style.display = "none";
    gameScreenNode.style.display = "flex";
    gameObj = new Game(stage);
    gameObj.obstAppear();
    gameObj.gameLoop()
}
function goToLobby () {
    gameOverScreenNode.style.display = "none";
    splashScreenNode.style.display = "flex";
    gameBoxNode.innerHTML = "";
    stage = 1
}

function retryGame () {
    gameOverScreenNode.style.display = "none";
    splashScreenNode.style.display = "flex";
    gameBoxNode.innerHTML = "";
    stage = 1
    startGame()
}

// * ADD EVENT LISTENERS
startBtnNode.addEventListener("click", startGame)
window.addEventListener("keydown", (event) => {
    if (gameObj.player.gravitySpeed === 0) {
        if (event.key === " ") {  //Salta al apretar la SpaceBar
            gameObj.player.jumpEffect();
            gameObj.player.positionUpdate();
            gameObj.player.gravityOn();
        }
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
restartBtnNode.addEventListener("click", goToLobby)
retryBtnNode.addEventListener("click", retryGame)