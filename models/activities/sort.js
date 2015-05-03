var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sort = new Schema
({
	type:String,
	author:String,
	statement:String,
	score:Number,
	answer:Array
})

module.exports = mongoose.model('Activity',Sort);