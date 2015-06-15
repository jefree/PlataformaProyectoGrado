var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = new Schema
({
	username:String,
	password:String,
	name:String,
	lastname:String,
	role:String
})

User.statics.add = function(username,password,name,lastname,role,callback){
	var new_user = new this({
		username:username,
		password:password,
		name:name,
		lastname:lastname,
		role:role
	});
	
	new_user.save(function(err){
		callback(err);
	});
}

User.statics.modify = function(username,password,name,lastname,role,callback){
	var data = {
		'username':username,
		'password':password,
		'name':name,
		'lastname':lastname,
		'role':role};

	this.findOneAndUpdate({username:username},data,function(err){
			callback(err);
		}
	});
}

User.statics.remove = function(username,callback){
	this.findOneAndRemove({username:username},function(err){
		callback(err);
	});
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

module.exports = mongoose.model('User',User,"users");
