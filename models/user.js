var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema
({
	username:String,
	password:String,
	name:String,
	lastname:String,
	role:String,
	guides:[{type:Schema.Types.ObjectId,ref:'Guide'}]
});

User.statics.add = function(data,callback){
	var new_user = new this(data);
	
	new_user.save(function(err){
		callback(err);
	});
}

User.statics.modify = function(username,data,callback){
	this.findOneAndUpdate({username:username},data,function(err){
		callback(err);
	});
}

User.statics.remove = function(username,callback){

}

User.statics.getById = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

User.statics.getByUsername = function(username,callback){
	this.find({username:username},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
	});
}

module.exports = mongoose.model('User',User,"Users");
