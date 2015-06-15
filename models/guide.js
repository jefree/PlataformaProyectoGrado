var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Guide = new Schema
({
	author:String,
	title:String,
	description:String,
	activities:Array
})

Guide.statics.add = function(author,title,description,activities,callback){
	var new_guide = new this({
		author:author,
		title:title,
		description:description,
		activities:activities
	});

	new_guide.save(function(err){		
		callback(err);
	});
}

Guide.statics.modify = function(id,author,title,description,activities,callback){
	var data = {
		'author':author,
		'title':title,
		'description':description,
		'activities':activities
	}

	this.findByIdAndUpdate(id,data,function(err){
		callback(err);
	});
}

Guide.statics.remove = function(id,callback){
	this.findByIdAndRemove(id,function(err){
		callback(err);
	});
}

Guide.statics.getByAuthor = function(author,callback){
	this.find({author:author},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

Guide.statics.getById = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Guide',Guide,'guides');