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
    socket.on('chat', (msg) =>{
        io.emit('chat_transfer', msg)
    })
})

expressServer.listen(port, ()=> console.log('http://localhost:'+port))