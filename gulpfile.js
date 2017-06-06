var gulp = require("gulp");

//合并
var concat = require("gulp-concat");
//压缩
var uglify = require("gulp-uglify");

gulp.task("minify",function(){
	return gulp.src(['js/base.js',
	'js/controllers/*.js',
	'js/directives/*.js',
	'js/filters/*.js',
	'js/router/*.js',
	'js/services/*.js'])
	
	.pipe(concat('main.js'))
	
	.pipe(uglify())
	
	.pipe(gulp.dest('dist/js'))
})

gulp.watch("js/*/*.js",['minify'])
gulp.task('default',['minify'])
