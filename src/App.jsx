import Login from './components/Pages/Login/Login.jsx';
import './App.css';
import Player from './classes/Player.js';
import { io } from 'socket.io-client';

const socket = io();

const players = {};

socket.on('updatePlayers', (backendPlayers) => {
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

function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
