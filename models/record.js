var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Record = new Schema
({
	user:{type:Schema.Types.ObjectId,ref:'User'},
	guide:{type:Schema.Types.ObjectId,ref:'Guide'},
	grades:[{type:Schema.Types.ObjectId,ref:'Activity',score:Number}]
	
});

Record.statics.create = function(data,callback){
	new_record = new this(data);

	new_record.save(function(err){
		callback(err);
	});
}

Record.statics.getByUser = function(user,callback){
	this.find({user:user},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

Record.statics.getByIndividual = function(user,guide,callback){
	this.findOne({user:user,guide:guide},function(err,data){
		if(err){
			callback(err);
		}else{
			if(data){
				callback(null,data);
			}else{
				callback("Record doesn't exist");		
			}
		}
	});
}

Record.statics.getAllByGuide = function(guide,callback){
	this.find({guide:guide},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Record',Record,'Records');