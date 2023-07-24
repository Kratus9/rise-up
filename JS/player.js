class Player {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "./Fotos/Personaje/Zeus.png";
        gameBoxNode.append(this.node)
        
        this.x = 185;
        this.y = 530;
        this.w = 30;
        this.h = 45;
        this.gravitySpeed = 1;
        this.jumpSpeed = 150;

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