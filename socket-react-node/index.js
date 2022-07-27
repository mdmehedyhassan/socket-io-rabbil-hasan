// const express = require('express');
// const cors = require('cors');
// const app = express();
// const http = require('http');
// const {Server} = require('socket.io')
// const expressServer = http.createServer(app);
// const port = process.env.PORT || 5000;

// const io = new Server(expressServer);

// let buyNsp = io.of('/buy');
// buyNsp.on('connection', (socket) => {
//     buyNsp.emit("MyEvent", "hello buy")
// })


// let sellNsp = io.of('/sell');
// sellNsp.on('connection', (socket) => {
//     sellNsp.emit("MyEvent", "hello sell")
// })


// app.get('/', (req, res) => {
//     res.sendFile(__dirname+'/index.html');
// })

// expressServer.listen(port, ()=> console.log('listening on port http://localhost:'+port))
