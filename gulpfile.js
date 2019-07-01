var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var jade = require('gulp-jade');

gulp.task('sass', function(){
    return gulp.src(['scss/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('jade', function() {
    return gulp.src(['*.jade'])
        .pipe(jade({
            pretty:true
        }))
        .pipe(gulp.dest(''))
        .pipe(browserSync.reload({stream: true}));
});


gulp.task('serve', function () {

    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch(['scss/**/*.scss'], ['sass']);
    gulp.watch(['*.jade'], ['jade']);
});

gulp.task('default', ['sass', 'jade', 'serve']);
