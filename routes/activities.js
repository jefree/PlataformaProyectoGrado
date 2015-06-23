var express = require('express');
var router = express.Router();
var activity = require('../models/activity');

router.get('/insertar',function(req,res,next){
	data_sort = {
		type:'sort',
		statement:'Esta es una pregunta de ordenar',
		score:100,
		body:{answer:[1,2,3,4,5,6,7]}
	};

	data_sequence = {
		type:'sequence',
		statement:'sequence activity',
		score:10,
		body:{sequence:['i1','i2'],answer:'i2'}
	};

	data_relation = {
		type:'relation',
		statement:'relation activity',
		score:0,
		body:{sets:[[1,2,3,4,5,6,7],[1,2,3,4]],answer:[[1,2],[2,3]]}
	};

	data_classify = {
		type:'classify',
		statement:'classify activity',
		score:-1,
		body:{answer:[[1,2,3,4,5,6,7,8,9,0],[0,9,8,7,6,5,4,3,2,1]]}
	};

	activity.create(data_classify,function(err){
		if(err){
			res.send('ERROR!');
		}else{
			res.send('INSERT OK');
		}
	});
});

router.get('/borrar',function(req,res,next){
	activity.erase("5588bce796b402ea2ae109f8",function(err){
		if(err){
			res.send(err);
		}else{
			res.send("Borrado OK!");
		}
	});
});

module.exports = router;
