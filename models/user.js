var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema
({
	username:String,
	password:String,
	name:String,
	lastname:String,
	role:String
})

module.exports = mongoose.model('User',User);