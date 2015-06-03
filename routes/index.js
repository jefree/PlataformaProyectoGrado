var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* render angular templates */
router.get('/angular/directives/:module/:view?.html', function(req, res, next) {
  
  var module = req.params.module;
  var view = req.params.view;

  res.render('angular/directives/'+module+'/'+view);

});

router.get('/examples/:name', function(req, res) {
  res.render('examples/'+req.params.name);
});

module.exports = router;
