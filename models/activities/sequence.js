var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sequence = new Schema
({
	type:String,
	author:String,
	score:Number,
	statement:Array,
	answer:Array
})

module.exports = mongoose.model('Activity',Sequence);