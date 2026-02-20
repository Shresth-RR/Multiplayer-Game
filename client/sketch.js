let game;
let network;

function setup() {
  createCanvas(800, 600);
  game = new GameManager();
  network = new NetworkManager(game);
}

function draw() {
  background(30);
  game.update();
}
