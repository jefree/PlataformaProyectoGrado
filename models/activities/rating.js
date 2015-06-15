var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Rating = new Schema
({
	type:String,
	author:String,
	statement:String,
	score:Number,
	answer:Array
})

Rating.statics.add = function(author,statement,score,answer,callback){
	var new_rating = new this({
		type:"rating",
		author:author,
		statement:statement,
		score:score,
		answer:answer
	});

	new_rating.save(function(err){
		callback(err);
	});
}

Rating.statics.modify = function(id,data,callback){
	this.findByIdAndUpdate(id,data,function(err){
		callback(err);
	});
}

Rating.statics.remove = function(id,callback){
	this.findByIdAndRemove(id,function(err){
		callback(err);
	});
}

Rating.statics.getByAuthor = function(author,callback){
	this.find({type:Rating,author:author},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Rating',Rating,'Activities');