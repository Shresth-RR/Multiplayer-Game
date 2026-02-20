class NetworkManager {
  constructor(game) {
    this.socket = io("http://localhost:3000");
    this.game = game;

    this.socket.on("updatePlayers", (players) => {
      this.game.updatePlayers(players);
    });
  }

  sendMove(x, y) {
    this.socket.emit("move", { x, y });
  }

  checkTag() {
    this.socket.emit("checkTag");
  }
}
