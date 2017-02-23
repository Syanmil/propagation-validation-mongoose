var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var usersSchema = new Schema({	'name' : String,	'email' : String});

module.exports = mongoose.model('users', usersSchema);
