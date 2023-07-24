class Platform {
    constructor(x, y) {
        this.node = document.createElement("img");
        this.node.src = "Fotos/Plataformas/Stage 1-3.jpeg"
        gameBoxNode.append(this.node)
        this.x = Math.floor(Math.random(x) * gameBoxNode.offsetWidth);
        this.y = y;
        this.w = 100;
        this.h = 50;
        
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.position = "absolute";
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;

        this.isMoving = true
        this.direction = 1
    }
    
    positionUpdate = () => {
        this.node.style.left = `${this.x}px`
    }

    automaticMovement = () => {
        if (this.isMoving) {
            this.x += 1 * this.direction;
            this.positionUpdate();
            if (this.x + this.w >= gameBoxNode.offsetWidth) {
                this.x = gameBoxNode.offsetWidth - this.w
                this.direction = -1
            }
            else if (this.x <= 0) {
                this.x = 0
                this.direction = 1
            }
        }
        else {
            this.positionUpdate()
        }
    }
}

