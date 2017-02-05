var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// The development server (the recommended option for development)
gulp.task('default', ['html', 'static', 'watch', 'webpack-dev-server']);

gulp.task('html', function() {
  return gulp.src('src/index.html')
  .pipe(gulp.dest('./dist'));
});

gulp.task('static', function() {
  gulp.src('src/img/**')
  .pipe(gulp.dest('./dist/img'));

  gulp.src('src/audio/**')
  .pipe(gulp.dest('./dist/audio'));
});

gulp.task('watch', function() {
  gulp.watch('src/index.html', ['html']);
  gulp.watch('src/img/**', ['static']);
  gulp.watch('src/audio/**', ['static']);
});

// Production build
gulp.task('build', ['html', 'webpack:build']);

gulp.task('webpack:build', function(callback) {
  var webpackProductionConfig = require('./webpack.config.js');
  // run webpack
  webpack(webpackProductionConfig, function(err, stats) {
    if(err) throw new gutil.PluginError('webpack:build', err);
    gutil.log('[webpack:build]', stats.toString({
      colors: true
    }));
    callback();
  });
});

gulp.task('webpack-dev-server', function(callback) {
  var webpackDevelopmentConfig = require('./webpack.config.js');
  // Start a webpack-dev-server
  new WebpackDevServer(webpack(webpackDevelopmentConfig), {
    contentBase: './dist',
    stats: {
      colors: true
    }
  })
  .listen(8080, '0.0.0.0', function(err) {
    if(err) throw new gutil.PluginError('webpack-dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/');
    callback();
  });
});