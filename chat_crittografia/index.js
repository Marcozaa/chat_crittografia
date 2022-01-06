const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { uuid } = require('uuidv4');

// Pacchetti importati 

var stanza = "hih";
app.use(express.static('public')) // Indicazione dir per express

io.on('connection', (socket) => { // Quando un socket accede/ si connette a localhost, questa funzione verra eseguita

  socket.join(stanza) // join attraverso id della stanza
  console.log("UN utente si è connesso: " + socket.id) // log di chi si e connesso attraverso il suo id su terminale
  io.to(stanza).emit('connection', socket.id, stanza) // Viene inviata una "notifica" a tutti gli altri cliente connessi nella stanza

  // Gestione invio messaggi
  socket.on('chat message', (msg) => { // Quando viene crato un messaggio viene avviata questa funzione
    io.to(stanza).emit('chat message', msg, socket.id); // Viene emessa un'altra notifica con il messaggio e chi l'ha inviato
    // io.to(stanza).emit('user',  socket.id);
  });

  socket.on("chiave-pubblica", (chiave_pubblica, id) => {
    console.log("chiave pubblica di "+ id)
    console.log("hello world")
    io.to(stanza).emit("public-key", chiave_pubblica , id)
  })

  // Gestione disconnessione da stanza
  socket.on('disconnect', () => { // Gestione disconnessione di un utente
    console.log('user disconnected' + socket.id);
    io.to(stanza).emit("disconnessione_stanza", socket.id)
  });

  socket.on("invio-mia-chiave", (chiave, id, idOwner) => {
          console.log("inserisco la chiave " + chiave + " di " + idOwner + " a " + id)

    io.to(id).emit("chiave-inserire", chiave, id, idOwner)
  })


  // Gestione cambio da stanza
  socket.on('room-change', (roomid) => {
    io.to(stanza).emit("disconnessione_stanza", socket.id)
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