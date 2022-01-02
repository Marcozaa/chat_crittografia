const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { uuid } = require('uuidv4');

var stanza = "hih";
app.use(express.static('public'))

io.on('connection', (socket) => {
  
  socket.join(stanza)
  console.log("UN utente si è connesso: " + socket.id)
  io.to(stanza).emit('connection', socket.id, stanza )

  // Gestione invio messaggi
  socket.on('chat message', (msg) => {
    io.to(stanza).emit('chat message', msg, socket.id);
    io.to(stanza).emit('user',  socket.id);
  });

  // Gestione disconnessione da stanza
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  // Gestione cambio da stanza
  socket.on('room-change', (roomid) => {
    socket.leave(stanza);
    stanza = roomid;
    socket.join(roomid);
    console.log("room changed to " + roomid)
  });

  socket
  
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});