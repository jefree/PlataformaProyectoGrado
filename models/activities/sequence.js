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

Sequence.statics.add = function(author,score,statement,answer){
	var new_sequence = new this({
		type:"sequence",
		author:author,
		score:score,
		statement:statement,
		answer:answer
	}):

	new_sequence.save(function(err){
		if(err){
			callback(err);
		}
	});
}

Sequence.statics.modify = function(id,data,callback){
	this.findByIdAndUpdate(id,data,function(err){
		if(err){
			callback(err);
		}
	});
}

Sequence.statics.remove = function(id,callback){
	this.findByIdAndRemove(id,function(err){
		if(err){
			callback(err);
		}
	});
}

Sequence.statics.getByAuthor = function(author,callback){
	this.find({type:sort,author:author},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Sequence',Sequence,'Activities');