var gulp = require("gulp");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");

var watchify = require("watchify");
var gutil = require("gulp-util");

var paths = {
    pages: ['src/*.html', 'src/*.css']
};

gulp.task("copy-html", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

var b = function() {
    return browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
}

function bundle() {
    b()
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest("dist"));
}

var w = watchify(b())

gulp.task('watch', function() {
  bundle(w);
  w.on('update', bundle.bind(null, w));
});

gulp.task("default", ["copy-html"], bundle)
gulp.task('build', bundle.bind(null, b()));
w.on("update", bundle)
