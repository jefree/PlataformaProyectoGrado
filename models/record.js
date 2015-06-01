var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Record = new Schema
({
	user:String,
	guide:String,
	activity:String,
	score:Number
})

Record.statics.add = function(user,activity,score,callback){
	var new_record = new this({
		user:user,
		activity:activity,
		score:score
	});

	new_record.save(function(err){
		if(err){
			callback(err);
		}else{
			callback("Puntaje almacenado");
		}
	});

Record.statics.getByUser = function(user,callback){
	this.find({user:user},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(data);
		}
	});
}

Record.statics.getByGuide = function(user,guide,callback){
	this.find({user:user,activity:activity},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(data);
		}
	});
}

module.exports = mongoose.model('Record',Record,'records');