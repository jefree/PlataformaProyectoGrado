var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Guide = new Schema
({
	author:String,
	title:String,
	description:String,
	activities:Array
})

module.exports = mongoose.model('Guide',Guide);