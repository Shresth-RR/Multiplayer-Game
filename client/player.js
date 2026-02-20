class Player {
  constructor(id, x, y, isIt) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.size = 40;
    this.isIt = isIt;
  }

  updateData(data) {
    this.x = data.x;
    this.y = data.y;
    this.isIt = data.isIt;
  }

  move() {
    if (this.id !== network.socket.id) return;

    let speed = 4;

    if (keyIsDown(LEFT_ARROW)) this.x -= speed;
    if (keyIsDown(RIGHT_ARROW)) this.x += speed;
    if (keyIsDown(UP_ARROW)) this.y -= speed;
    if (keyIsDown(DOWN_ARROW)) this.y += speed;

    this.x = constrain(this.x, 20, width - 20);
    this.y = constrain(this.y, 20, height - 20);

    network.sendMove(this.x, this.y);
    network.checkTag();
  }

  display() {
    fill(this.isIt ? "red" : "blue");
    circle(this.x, this.y, this.size);
  }
}
