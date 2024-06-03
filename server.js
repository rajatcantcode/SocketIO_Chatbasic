//2 3rd party modules
const express = require("express");
const socketio = require("socket.io");
const app = express();
const port = 3000;

//express core module
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

const expressServer = app.listen(port);
//io is the instance of the Socket.IO Server
const io = socketio(expressServer);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("messageFromClient", (data) => {
    io.emit("messageForClients", { data: data.data });
  });
});
