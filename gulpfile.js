var gulp = require('gulp');
// var jade = require('gulp-jade');
// var sass = require('gulp-sass');
// var plumber = require('gulp-plumber')
// var postcss = require('gulp-postcss');
var $ = require('gulp-load-plugins')(); // 只針對 gulp 開頭的套件才有用
var autoprefixer = require('autoprefixer');

var path = {
  source: './source/',
  public: './public/'
};

gulp.task('jade', function () {
  return gulp.src(path.source + '**/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest(path.public))
});

gulp.task('sass', function () {

  var plugins = [
    autoprefixer({
      overrideBrowserslist: ['last 2 version']
    })
  ];

  return gulp.src(path.source + 'stylesheets/**/*.scss')
    .pipe($.plumber())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe(gulp.dest('./public.css'))
});

gulp.task('watch', function () {
  gulp.watch(path.source + '**/*.jade', gulp.series('jade'));
  gulp.watch(path.source + 'stylesheets/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('jade', 'sass', 'watch'))