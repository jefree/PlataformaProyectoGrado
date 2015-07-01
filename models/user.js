var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var guide = require('../models/guide');

var User = new Schema
({
	username:String,
	name:String,
	lastname:String,
	role:String,
	guides:[{type:Schema.Types.ObjectId,ref:'Guide'}]
});

User.plugin(passportLocalMongoose);

User.statics.create = function(data,callback){
	var password = data.password;
	delete data.password;

	this.register(data,password,function(err){
		callback(err);
	});
}

User.statics.erase = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			if(data){
				if(data.guides){
					data.guides.forEach(function(item){
						guide.erase(item,callback);
					});
				}
				data.remove(callback);
			}else{
				callback("User Doesn't Exist");
			}
		}
	});
}

User.statics.getById = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			if(data){
				callback(null,data);
			}else{
				callback("User Doesn't Exist");
			}
		}
	});
}

User.statics.addGuides = function(id,guides,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			guides.forEach(function(item){
				data.guides.push(mongoose.Types.ObjectId(item));
			});
			
			data.save(callback);
		}
	});
}

module.exports = mongoose.model('User',User,'Users');
