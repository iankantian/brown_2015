const gulp = require('gulp');
const babel = require('gulp-babel');
// gulp dependencies go here

gulp.task('default', function(){
    // node src
    gulp.src('es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
    // browser src
    gulp.src('public/es6/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('public/dist'));
});