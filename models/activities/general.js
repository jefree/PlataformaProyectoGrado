var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var General = new Schema({})

General.statics.getAll = function(callback){
	this.find(function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

General.statics.getAllByAuthor = function(author,callback){
	this.find({author:author},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	})
}

General.statics.getAllByType = function(type,callback){
	this.find({type:type},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

General.statics.getById = function(id,callback){
	this.find({_id:id},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('General',General,'Activities');