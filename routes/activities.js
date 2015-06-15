var express = require('express');
var router = express.Router();
var general = require('../models/activities/general');
var rating = require('../models/activities/rating');
var relation = require('../models/activities/relation');
var sequence = require('../models/activities/sequence');
var sort = require('../models/activities/sort');

router.get('/:id',function(req,res,next){
	general.getById(req.params.id,function(err,data){
		if(err){

		}else{

		}
	});
});

router.put('/:id',function(req,res,next){

});

router.delete('/:id',function(req,res,next){

});

router.get('/myactivities',function(req,res,next){
	general.getAllByAuthor(req.user,function(err,data){
		if(err){

		}else{

		}
	});
});

router.get('/:type',function(req,res,next){
	general.getAllByType(req.params.type,function(err,data){
		if(err){

		}else{
			
		}
	});
});

router.get('/new',function(req,res,next){

});

router.post('/new',function(req,res,next){

});

module.exports = router;
