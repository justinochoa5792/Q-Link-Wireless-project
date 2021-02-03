var fs = require('fs');
var gulp = require('gulp');

var config = JSON.parse(fs.readFileSync('./package.json'));
var plugins = {
    autoprefixer: require('gulp-autoprefixer'),
    babel: require('gulp-babel'),
    bs: require('browser-sync').create(),
    concat: require('gulp-concat'),
    cleanCss: require('gulp-clean-css'),
    del: require('del'),
    exec: require('child_process').exec,
    flatten: require('gulp-flatten'),
    htmlreplace: require('gulp-html-replace'),
    inquirer: require('inquirer'),
    jshint: require('gulp-jshint'),
    noop: require("gulp-noop"),
    notify: require('gulp-notify'),
    order: require("gulp-order"),
    print: require('gulp-print').default,
    pump: require('pump'),
    rename: require('gulp-rename'),
    replace: require('gulp-replace'),
    runSequence: require('run-sequence'),
    sass: require('gulp-sass'),
    server: require('gulp-express'),
    sourcemaps: require('gulp-sourcemaps'),
    stylish: require('jshint-stylish'),
    tap: require('gulp-tap'),
    template: require('gulp-template'),
    uglify: require('gulp-uglify'),
    watch: require('gulp-watch')
};

var _source = {
    img: [
        config.src.img + '/assets/images/*.*',
        config.src.img + '/**/*.*'
    ],
    js: [],
    css: [],
    webFonts: [
        config.appDirectory + '/assets/webfonts/*.*',
        config.appDirectory + '/webfonts/*.*'
    ]
};

gulp.task('moveIndex', function () {
    gulp.src(config.appDirectory + '/index.html')
        .pipe(gulp.dest(config.buildDestination));
});

gulp.task('moveImages', function () {
    gulp.src(_source.img)
        .pipe(gulp.dest(config.buildDestination + "/img"));
});

gulp.task('moveWebfonts', function () {
    gulp.src(_source.webFonts)
        .pipe(gulp.dest('./webfonts'));
});

gulp.task('serve', function () {
    plugins.server.run(['index.js']);    
})

gulp.task('start', function () {
    return gulp.series('serve');
});

