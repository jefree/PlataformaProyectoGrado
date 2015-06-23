var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Guide = new Schema
({
	title:String,
	description:String,
	activities:[{type:Schema.Types.ObjectId,ref:'Activity'}]
});

Guide.statics.add = function(data,callback){
	var new_guide = new this(data);

	new_guide.save(function(err){		
		callback(err);
	});
}

Guide.statics.modify = function(id,data,callback){
	this.findByIdAndUpdate(id,data,function(err){
		callback(err);
	});
}

Guide.statics.remove = function(id,callback){
	this.findByIdAndRemove(id,function(err){
		callback(err);
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

module.exports = mongoose.model('Guide',Guide,'Guides');