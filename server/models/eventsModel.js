var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var eventsSchema = new Schema({

module.exports = mongoose.model('events', eventsSchema);