var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var eventsSchema = new Schema({	'title' : String,	'createdAt' : Date,	'name' : String,	'userid': { type: Schema.Types.ObjectId, ref: 'users' }});

module.exports = mongoose.model('events', eventsSchema);
