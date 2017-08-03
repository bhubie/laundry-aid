const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketIO = require('socket.io');

const {Washer} = require('./utils/washer');

const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const app = express();
var server = http.createServer(app);
//var io = socketIO(server);
io = socketIO.listen(server);

app.use(express.static(publicPath));
app.use(bodyParser.json());


io.on('connection', (socket) => {
    
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

//var washer = new Washer('delicates');
//washer.start();

module.exports = {app};