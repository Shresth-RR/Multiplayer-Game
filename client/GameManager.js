class GameManager {
  constructor() {
    this.players = {};
  }

  update() {
    for (let id in this.players) {
      this.players[id].move();
      this.players[id].display();
    }
  }

  updatePlayers(data) {
    for (let id in data) {
      if (!this.players[id]) {
        this.players[id] = new Player(
          id,
          data[id].x,
          data[id].y,
          data[id].isIt
        );
      } else {
        this.players[id].updateData(data[id]);
      }
    }
  }
}
