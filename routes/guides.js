var express = require('express');
var router = express.Router();
var guide = require('../models/guide');

router.get('/:id',function(req,res,next){
	guide.getById(req.params.id,function(err,data){
		if(err){

		}else{

		}
	});
});

router.put('/:id',function(req,res,next){
	guide.modify(
		req.params.id,
		req.user,
		req.body.title,
		req.body.description,
		req.body.activities,
		function(err){
			if(err){

			}else{
				
			}
		});
});

router.delete('/:id',function(req,res,next){
	guide.remove(req.params.id,function(err){
		if(err){

		}else{

		}
	});
});

router.get('/new',function(req,res,next){
	res.render();
});

router.post('/new',function(req,res,next){
	guide.add(
		req.user,
		req.body.title,
		req.body.description,
		req.body.activities,
		function(err){
			if(err){
				
			}else{
				
			}
		});
});

module.exports = router;
