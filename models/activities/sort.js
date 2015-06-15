var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Sort = new Schema({
	type:String,
	author:String,
	statement:String,
	score:Number,
	answer:Array
})

Sort.statics.add = function(author,statement,score,answer,callback){
	var new_sort = new this({
		type:"sort",
		author:author,
		statement:statement,
		score:score,
		answer:answer
	});

	new_sort.save(function(err){
		if(err){
			callback(err);
		}
	});
}

Sort.statics.modify = function(id,data,callback){
	this.findByIdAndUpdate(id,data,function(err){
		if(err){
			callback(err);
		}
	});
}

Sort.statics.remove = function(id,callback){
	this.findByIdAndRemove(id,function(err){
		if(err){
			callback(err);
		}
	});
}

Sort.statics.getByAuthor = function(author,callback){
	this.find({type:sort,author:author},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Sort',Sort,'Activities');