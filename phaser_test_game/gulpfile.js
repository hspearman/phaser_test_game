var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');

var tsProject = ts.createProject('tsconfig.json');

gulp.task(
    'build',
    [
        'clean-dist-dir',
        'copy-phaser-libs',
        'copy-view-files',
        'copy-static-files'
    ],
    function () {
        return tsProject.src()
            .pipe(ts(tsProject))
            .js.pipe(gulp.dest('dist/scripts'));
    });

gulp.task(
    'clean-dist-dir',
    [],
    function() {
        return del(['dist/*'])
    });

gulp.task(
    'copy-phaser-libs',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./node_modules/phaser/build/phaser.js')
            .pipe(gulp.dest('dist/libs'));
    });

gulp.task(
    'copy-view-files',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./src/views/*')
            .pipe(gulp.dest('dist'));
    });

gulp.task(
    'copy-static-files',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./src/static/*')
            .pipe(gulp.dest('dist/static'));
    });