var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Record = new Schema
({
	user:{type:Schema.Types.ObjectId,ref:'User'},
	guide:{type:Schema.Types.ObjectId,ref:'Guide'},
	activity:String,
	score:Number
});

Record.statics.add = function(user,activity,score,callback){
	var new_record = new this({
		user:user,
		guide:guide,
		activity:activity,
		score:score
	});

	new_record.save(function(err){
		callback(err);
	});

Record.statics.getByUser = function(user,callback){
	this.find({user:user},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

Record.statics.getByGuide = function(user,guide,callback){
	this.find({user:user,guide:guide},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('Record',Record,'Records');