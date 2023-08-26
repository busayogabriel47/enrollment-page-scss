'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
sass.compiler = require('node-sass');
gulp.task('sass', function () {
   return gulp.src('./CSS/**/*.scss')
   .pipe(concat('custom.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('./dist/'));
});

gulp.task("watch", function(){
   gulp.watch('./CSS/**', gulp.series('sass'));
})