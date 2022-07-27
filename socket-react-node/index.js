const express = require('express');
const app = express();
const http = require('http');
const {Server} = require('socket.io')
const expressServer = http.createServer(app);
const port = process.env.PORT || 5000;
const path=require('path');
const io = new Server(expressServer);

app.use(express.static('client/build'));


io.on('connection', function(socket) {
    console.log('New User Connected');
    
    setTimeout(() => {
        socket.emit('msg', 'This is message from server')
    }, 5000);

    socket.on('disconnect', function() {
        console.log('Disconnect User')
    })
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
app.get('/express-server', (req, res) => {
    res.end('Hello World')
})

expressServer.listen(port, ()=> console.log('listening on port http://localhost:'+port))
