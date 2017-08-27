const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const socketIO = require('socket.io');

const {Washer} = require('./utils/washer');
const washer = new Washer();

const port = process.env.PORT || 3000;

const app = express();
var server = http.createServer(app);
const io = socketIO.listen(server);


app.use(express.static(path.resolve(__dirname, '..', '..', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'build', 'index.html'));
});

app.use(bodyParser.json());


io.on('connection', (socket) => {
    console.log('user Connected')

    socket.on('startTimer', (message) => {
      
      if(message.type === 'Washer') {
        washer.setCycle(message.cycle);
        washer.start();
      }
  });
});

washer.on('tick:timer', (time) => {  
  emitTimerTick('Washer', time);
});

washer.on('stop:timer', () => {  
  emitTimerStop('Washer');
});

function emitTimerStop () {
  io.emit('stopTimer', { type: type });
};

function emitTimerTick (type, time) {
  io.emit('tickTimer', { 
    type: type,
    time: time });
}


server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});



module.exports = {app};