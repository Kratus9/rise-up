class Platform {
  constructor(x, y, w, speed, stage) {
    this.node = document.createElement("img");
    if (stage === 1 || stage === 2 || stage === 3) {
      this.node.src = "Fotos/Plataformas/Stage 1-3.png";
    } else if (stage === 4 || stage === 5) {
      this.node.src = "Fotos/Plataformas/Stage 4-5.png.png";
    } else if (stage === 6 || stage === 7) {
      this.node.src = "Fotos/Plataformas/Stage 6-7.png.jpeg";
    }
    gameBoxNode.append(this.node);
    this.x = Math.floor(Math.random(x) * gameBoxNode.offsetWidth);
    this.y = y;
    this.w = w;
    this.h = 25;
    this.stage = stage;

    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.position = "absolute";
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;

    this.isMoving = true;
    this.direction = 1;
    this.speed = speed;
  }

  positionUpdate = () => {
    this.node.style.left = `${this.x}px`;
  };

  automaticMovement = () => {
    if (this.isMoving) {
      this.x += this.speed * this.direction;
      this.positionUpdate();
      if (this.x + this.w >= gameBoxNode.offsetWidth) {
        this.x = gameBoxNode.offsetWidth - this.w;
        this.direction = -1;
      } else if (this.x <= 0) {
        this.x = 0;
        this.direction = 1;
      }
    } else {
      this.positionUpdate();
    }
  };
}
