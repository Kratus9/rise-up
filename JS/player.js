class Player {
    constructor() {
        this.node = document.createElement("img");
        this.node.src = "./Fotos/Personaje/Zeus.png.png";
        gameBoxNode.append(this.node)
        
        this.x = 185;
        this.y = 535;
        this.w = 25;
        this.h = 35;
        this.gravitySpeed = 1;
        this.jumpSpeed = 75;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
    }

    gravityOn = () => {
        this.gravitySpeed = 1
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