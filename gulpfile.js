var gulp = require("gulp");
var shell = require('gulp-shell');
var deploy = require("gulp-gh-pages");

gulp.task('snow', shell.task('.\compile.snow.bat'));

var options = { 
    remoteUrl: "https://github.com/nelsonreis/nelsonreis.github.io.git",
    branch: "master" };
gulp.task('deploy', function () {
    gulp.src(["dist/**/*.*", "dist/CNAME"])
        .pipe(deploy(options));
});

