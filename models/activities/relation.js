var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Relation = new Schema
({
	type:String,
	author:String,
	statement:String,
	score:Number,
	sets:Array,
	answer:Array
})

module.exports = mongoose.model('Activity',Relation);