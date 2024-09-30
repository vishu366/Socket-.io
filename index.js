const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const http = require('http');
const server = http.createServer(app);
const {Server}= require('socket.io');
const { Socket } = require('dgram');
const io = new Server(server);


app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

// io.on('connection', (Socket)=>{
//     Socket.on('disconnect', ()=>{
//         console.log('user disconnected');
//     })
//     console.log('a user connected');
// })

io.on('connection', (Socket)=>{
    Socket.on('chat message', (msg)=>{
        io.emit('chat message', msg)
        console.log('message', msg);
    })
})

server.listen(port, ()=>{
    console.log('server started');
})