var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/new',function(req,res,next){
	res.render();
});

router.post('/new',function(req,res,next){
	user.add(
		req.body.username,
		req.body.password,
		req.body.name,
		req.body.lastname,
		req.body.role,
		function(err){
			if(err){

			}else{
				
			}
		});
});

router.get('/:username',function(req,res,next){
	user.getByUsername(req.params.username,function(err,data){
		if(err){

		}else{
			
		}
	});
});

router.put('/:username',function(req,res,next){
	user.modify(
		req.params.username,
		req.body.password,
		req.body.name,
		req.body.lastname,
		req.body.role,
		function(err){
			if(err){

			}else{

			}
		});
});

router.delete('/:username',function(req,res,next){
	user.remove(req.params.username,function(err){
		if(err){

		}else{

		}
	});
});

router.get('/:id',function(req,res,next){
	user.getById(req.params.id,function(err,data){
		if(err){

		}else{

		}
	})
});

module.exports = router;
