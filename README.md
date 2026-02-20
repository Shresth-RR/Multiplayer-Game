# Multiplayer-Game
A real-time multiplayer tag game built with p5.js and Socket.IO, featuring server-authoritative collision detection and live player synchronization.
# p5 Multiplayer Tag Game

A real-time multiplayer tag game built using:

- p5.js (frontend rendering)
- Node.js (server)
- Socket.IO (real-time communication)

## 🎮 Game Description

Players join a shared arena.  
One player starts as **"It"** (red).  
When the player who is "It" touches another player, the role switches.

The game supports multiple players connected simultaneously in real time.

---

## 🧠 Features

- Real-time multiplayer using WebSockets
- Server-authoritative tag detection
- Object-Oriented Programming structure
- 3 main classes:
  - Player
  - GameManager
  - NetworkManager
- Automatic player join/leave handling
