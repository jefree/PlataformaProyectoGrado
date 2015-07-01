var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate');
var Schema = mongoose.Schema;

var activity = require('../models/activity');

var Guide = new Schema
({
	title:String,
	description:String,
	activities:[{type:Schema.Types.ObjectId,ref:'Activity'}]
});

Guide.plugin(deepPopulate);

Guide.statics.create = function(data,callback){
	var new_guide = new this(data);

	new_guide.save(function(err,saved){		
		if(err){
			callback(err);
		}else{
			callback(null,saved.id);
		}
	});
}

Guide.statics.erase = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}
		else{
			if(data){
				data.activities.forEach(function(item){
					activity.erase(item,callback);
				});
				data.remove(callback);				
			}else{
				callback("Guide Doesn't Exist");
			}	
		}
	});
}

Guide.statics.getById = function(id,callback){
	this.findOne({_id:id}).deepPopulate('activities.body').exec(function(err,data){
		if(err){
			callback(err);
		}else{
			if(data){
				callback(null,data);	
			}else{
				callback("Guide Doesn't Exist");
			}
		}
	});
}

module.exports = mongoose.model('Guide',Guide,'Guides');