var express = require('express');
var router = express.Router();
var record = require('../models/record');

router.get('/myrecors',function(req,res,next){
	record.getByUser(req.user,function(err,data){
		if(err){

		}else{

		}
	});
});

router.get('/myrecords/:guide',function(req,res,next){
	record.getByGuide(req.user,req.params.guide,function(err,data){
		if(err){

		}else{

		}
	});
});	

router.post('/evaluate/:id',function(req,res,next){
	
});


module.exports = router;
