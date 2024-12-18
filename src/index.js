const socket = io();

const players = {};

socket.on("updatePlayers", (backendPlayers) => {
  // Save players
  for (const id in backendPlayers) {
    const backendPlayer = backendPlayers[id];

    if (!players[id]) {
      players[id] = new Player(backendPlayer.x, backendPlayer.y);
    }
  }

  // Delete diconected player when he leaves
  for (const id in players) {
    if (!backendPlayers[id]) {
      delete players[id];
    }
  }
});
