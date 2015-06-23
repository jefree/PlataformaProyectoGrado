var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Classify = new Schema({
	answer:Array
});

var Relation = new Schema({
	sets:Array,
	answer:Array
});

var Sequence = new Schema({
	sequence:Array,
	answer:String
});

var Sort = new Schema({
	answer:Array
});

var Activity = new Schema({
	type:String,
	statement:String,
	score:Number,
	body:{type:Schema.Types.ObjectId,ref:'Activities_Details'}
});

Activity.path('type').validate(function(type){
	return ['classify','relation','sequence','sort'].indexOf(type) != -1;
});

var ClassifyModel = mongoose.model('Clasify',Classify,'Activities_Details');
var RelationModel = mongoose.model('Relation',Relation,'Activities_Details');
var SequenceModel = mongoose.model('Sequence',Sequence,'Activities_Details');
var SortModel = mongoose.model('Sort',Sort,'Activities_Details');

Activity.statics.create = function(data,callback){
	var body_data = data.body;
	delete data.body;
	var new_activity = new this(data);
	
	new_activity.save(function(err,saved){
		if(err){
			callback(err);
		}else{
			var body;
			switch(data.type){
				case 'classify':
					body = new ClassifyModel(body_data);
					break;
				case 'relation':
					body = new RelationModel(body_data);
					break;
				case 'sequence':
					body = new SequenceModel(body_data);
					break;
				case 'sort':
					body = new SortModel(body_data);
					break;
			}
		}
		
		if(body){
			body.save(function(err,saved_body){
				if(err){
					callback(err);
				}else{
					saved.body = saved_body.id;
					saved.save(callback);
				}
			});				
		} 	
	});
}

Activity.statics.erase = function(id,callback){
	this.findById(id,function(err,data){
		if(err){
			callback(err);
		}else{
			switch(data.type){
				case 'classify':
					ClassifyModel.findByIdAndRemove(data.body,function(error){
						if(error){
							callback(error);
						}
					});
					break;
				case 'relation':
					RelationModel.findByIdAndRemove(data.body,function(error){
						if(error){
							callback(error);
						}
					});
					break;
				case 'sequence':
					SequenceModel.findByIdAndRemove(data.body,function(error){
						if(error){
							callback(error);
						}
					});
					break;
				case 'sort':
					SortModel.findByIdAndRemove(data.body,function(error){
						if(error){
							callback(error);
						}
					});;
					break;			
			}
			data.remove();		
		}
	});
}

module.exports = mongoose.model('Activity',Activity,'Activities');