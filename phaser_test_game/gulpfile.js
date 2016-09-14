var gulp = require('gulp');
var ts = require('gulp-typescript');
var del = require('del');

var tsProject = ts.createProject('tsconfig.json');

/*  Build task for phaser project
    (deploys project to dist folder) */
gulp.task(
    'build',
    [
        'clean-dist-dir',
        'copy-requirejs-config',
        'copy-requirejs-libs',
        'copy-phaser-libs',
        'copy-view-files',
        'copy-static-files'
    ],
    function () {
        // Deploy project's code (outlined by tsconfig.json > files)
        return tsProject.src()
            .pipe(ts(tsProject)) // Compile typescript to javascript
            .js.pipe(gulp.dest('dist/scripts')); // Copy-over for deployment
    });

// Task to empty-out dist folder before deployment
gulp.task(
    'clean-dist-dir',
    [],
    function() {
        return del(['dist/*'])
    });

// Task to copy-over phaser libs for deployment
gulp.task(
    'copy-phaser-libs',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./node_modules/phaser/build/phaser.js')
            .pipe(gulp.dest('dist/scripts/libs'));
    });

// Task to copy-over require.js config for deployment
gulp.task(
    'copy-requirejs-config',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./src/scripts/requirejs-config.js')
            .pipe(gulp.dest('dist/scripts'));
    });

/*  Task to copy-over require.js
    (the project's module loader implementation) for deployment */
gulp.task(
    'copy-requirejs-libs',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./node_modules/requirejs/require.js')
            .pipe(gulp.dest('dist/scripts/libs'));
    });

// Task to copy-over view files (i.e. HTML) for deployment
gulp.task(
    'copy-view-files',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./src/views/*')
            .pipe(gulp.dest('dist'));
    });

// Task to copy-over static files (i.e. images) for deployment
gulp.task(
    'copy-static-files',
    ['clean-dist-dir'],
    function () {
        return gulp
            .src('./src/static/*')
            .pipe(gulp.dest('dist/static'));
    });