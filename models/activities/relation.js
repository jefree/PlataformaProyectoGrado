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

Relation.statics.add = function(author,statement,score,sets,answer){
	var new_relation = new this({
		type:"relation",
		author:author,
		statement:statement,
		score:score,
		sets:sets,
		answer:answer
	});

	new_relation.save(function(err){
		if(err){
			callback(err);
		}
	});
}


Relation.statics.modify = function(id,data,callback){
	this.findByIdAndUpdate(id,data,function(err){
		if(err){
			callback(err);
		}
	});
}

Relation.statics.remove = function(id,callback){
	this.findByIdAndRemove(id,function(err){
		if(err){
			callback(err);
		}
	});
}

Relation.statics.getByAuthor = function(author,callback){
	this.find({type:Relation,author:author},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Relation',Relation,'Activities');