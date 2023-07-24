class Player {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "./Fotos/Personaje/Zeus.png";
        gameBoxNode.append(this.node)
        
        this.x = 185;
        this.y = 525;
        this.w = 30;
        this.h = 50;
        this.gravitySpeed = 0;
        this.jumpSpeed = 50;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

    gravityEffect = () => {
        this.y += this.gravitySpeed;
        this.positionUpdate()
    }

    jumpEffect = () => {
        this.y -= this.jumpSpeed;
        this.positionUpdate()
    }

    positionUpdate = () => {
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }
}