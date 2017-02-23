const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

var users = require('./routes/usersRoutes');
var events = require('./routes/eventsRoutes');


var app = express()

//Database
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log(`connected to Port ${process.env.PORT} At ${process.env.MONGODB_URI}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use('/api/events', events);
app.use('/api/users', users);

app.listen(process.env.PORT)
