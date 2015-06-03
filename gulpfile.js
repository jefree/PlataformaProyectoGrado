var gulp = require('gulp');
var server = require('gulp-express');
var stylus = require('gulp-stylus');

gulp.task('styles', function(){

  gulp
    .src('./views/styles/**/*.stylus')
    .pipe(stylus())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', function() {
  
  gulp.run('styles');
  server.run(['./bin/www']);

  gulp.watch(['./public/js/**/*.js', './views/**/*.jade'], server.notify);
  gulp.watch(['./views/styles/**/*.stylus'], ['styles', server.notify]);
  
  gulp.watch(['./app.js', './routes/**/*.js'], server.run);
});
