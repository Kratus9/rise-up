class Platform {
    constructor(posY) {
        this.node = document.createElement("img");
            this.node.src = "Fotos/Plataformas/Stage 1-3.jpeg"
     
        gameBoxNode.append(this.node)

        this.x = gameBoxNode.offsetWidth;
        this.y = posY;
        this.w = 100;
        this.h = 50;

        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;

    }
    automaticMovement = () => {
        this.x -= 2;
        this.positionUpdate();
    }
    
    positionUpdate = () => {
        this.node.style.left = `${this.x}px`
    }
}