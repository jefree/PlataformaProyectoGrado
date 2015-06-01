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
		if(err){
			callback(err);
		}else{
			callback("Usuario Registrado");
		}
	});
}

User.statics.modify = function(username,data,callback){
	this.findOneAndUpdate({username:username},data,function(err){
		if(err){
			callback(err);
		}else{
			callback("Usuario Modificado");
		}
	});
}

User.statics.remove = function(username,callback){
	this.findOneAndRemove({username:username},function(err){
		if(err){
			callback(err);
		}else{
			callback("Usuario Eliminado");
		}
	})
}

User.statics.getById = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			callback(data);
		}
	});
}

User.statics.getByUsername = function(username,callback){
	this.find({username:username},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(data);
		}
	});
}

module.exports = mongoose.model('User',User,"users");
