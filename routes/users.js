var express = require('express');
var router = express.Router();

var passport = require('passport');
var user = require('../models/user');

router.get('/new',function(req,res,next){
	res.render('new_user');
});

router.post('/new',function(req,res,next){
	user.create(req.body,function(err){
		if(err){
			res.redirect('/users/login');
		}else{
			res.redirect('/users/profile');
		}	
	});
});

router.get('/login',function(req,res,next){
	res.render('users/login');
});

router.post('/login',passport.authenticate('local',{
	successRedirect:'/users/profile',
	failureRedirect:'/users/login'
}));

router.get('/profile',function(req,res,next){
	res.render('users/profile',{user:req.user});
});

router.get('/logout',function(req,res,next){
	req.logout();
	res.redirect('/');
});

module.exports = router;
