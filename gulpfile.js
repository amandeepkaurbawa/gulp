var gulp = require('gulp');
var sassy = require('gulp-sass');
var browserSync = require('browser-sync').create();

//my first task sass to css using gulp & gulp-sass
gulp.task('sass', function () {
    return gulp.src('app/assets/sass/**/*.scss') //get source file
        .pipe(sassy())  // send through some gulp dependency 
        .pipe(gulp.dest('app/assets/css/')) //destination
        .pipe(browserSync.reload({ stream: true }))
});

//browserSync will spin up a server-just tell base directory of project
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
});

//next task watch- to watch any chnages in file on save and run some gulp task
gulp.task('watch', function () {
    gulp.watch('app/assets/**/*.scss', gulp.series('sass')); //watch method--'what file to watch','task to run'
    gulp.watch('app/index.html').on("change", browserSync.reload);
})


gulp.task('default', gulp.parallel('sass', 'browserSync', 'watch'), function () { });


//either run gulp taskname or gulp --> which means gulp default

