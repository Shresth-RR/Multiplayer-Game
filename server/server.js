import { Server } from "socket.io";

const io = new Server({
  cors: { origin: "*" }
});

let players = {};

io.on("connection", (socket) => {
  console.log("Connected:", socket.id);

  players[socket.id] = {
    x: Math.random() * 600 + 100,
    y: Math.random() * 400 + 100,
    isIt: Object.keys(players).length === 0
  };

  io.emit("updatePlayers", players);

  socket.on("move", (data) => {
    if (!players[socket.id]) return;
    players[socket.id].x = data.x;
    players[socket.id].y = data.y;
  });

  socket.on("checkTag", () => {
    const me = players[socket.id];
    if (!me || !me.isIt) return;

    for (let id in players) {
      if (id !== socket.id) {
        const other = players[id];
        const d = Math.hypot(me.x - other.x, me.y - other.y);

        if (d < 40) {
          me.isIt = false;
          other.isIt = true;
        }
      }
    }

    io.emit("updatePlayers", players);
  });

  socket.on("disconnect", () => {
    delete players[socket.id];
    io.emit("updatePlayers", players);
  });
});

io.listen(3000);
console.log("Server running on port 3000");
