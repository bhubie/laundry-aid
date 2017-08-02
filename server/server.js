const express = require('express');
const bodyParser = require('body-parser');
const {Timer} = require('./utils/timer');
const {Washer} = require('./utils/washer');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

var washer = new Washer('delicates');
washer.start();

module.exports = {app};