const express = require('express');
const app = express();
const server = require('http').createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('This is realtime whiteboard app server');
})

io.on("connection",(socket)=>{
    console.log("User Connected");
})

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})