const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const {Server} = require('socket.io')
const expressServer = http.createServer(app);
const port = process.env.PORT || 5000;

const io = new Server(expressServer);

let buyNsp = io.of('/buy');
buyNsp.on('connection', (socket) => {
    buyNsp.emit("MyEvent", "hello buy")
})


let sellNsp = io.of('/sell');
sellNsp.on('connection', (socket) => {
    sellNsp.emit("MyEvent", "hello sell")
})

// io.on('connection', (socket) => {
//     console.log("New User Connected");

//     // socket.on('disconnect', ()=>{
//     //     console.log("User disconnected")
//     // })

//     // setTimeout(() => {
//     //     socket.send('Server ******* Client')
//     // }, 5000);

//     // setInterval(() => {
//     //     let d = new Date();
//     //     let t = d.getTime();
//     //     // socket.send(t)
//     //     socket.emit("MyEvent", t);
//     // }, 300);

//     // socket.on('message', (msg) => {
//     //     console.log(msg);
//     // })
//     // socket.on('MyEvent', (msg) => {
//     //     console.log(msg);
//     // })
//     io.sockets.emit("MyBroadCast", "Hello Everyone")
    
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})
// app.get('/', (req, res) => {
//     res.send("__dirname+'/index.html'");
// })

expressServer.listen(port, ()=> console.log('listening on port http://localhost:'+port))
