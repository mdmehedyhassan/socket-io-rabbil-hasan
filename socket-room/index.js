const express = require('express');
const app = express();
const http = require('http');
const expressServer = http.createServer(app);
const port = process.env.PORT || 5000;

const {Server} = require('socket.io');
let io = new Server(expressServer);

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/index.html");
})

io.on('connection', (socket) => {
    console.log('New user connected!!')

    socket.join('kitchen-room');
    let sizeOfKitchen = io.sockets.adapter.rooms.get('kitchen-room').size;
    io.sockets.in('kitchen-room').emit('cooking', "Rried Rice Cooking = " + sizeOfKitchen)
    io.sockets.in('kitchen-room').emit('boiling', "Boiling Egg")

    socket.join('bec-room');
    io.sockets.in('bed-room').emit('sleep', "I am Sleeping")
    io.sockets.in('bed-room').emit('rest', "I am taking Rest")
})

expressServer.listen(port, ()=> console.log('http://localhost:'+port))