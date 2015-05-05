var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Record = new Schema
({
	user:String,
	activity:String,
	score:Number
})

module.exports = mongoose.model('Record',Record);