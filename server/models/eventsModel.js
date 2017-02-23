var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var eventsSchema = new Schema({	'title' : {		type: String,		required: [true, 'Require title'],		unique: true	},	'createdAt' : {		type: Date,		required: [true, 'Require Created Date']	},	'email' : {		type: String,		validate: {      validator: function(v) {        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v);      },      message: `is not a valid email!`    }	},	'name': {		type: String,		required: [true, 'Require Name']	 }});

module.exports = mongoose.model('events', eventsSchema);
