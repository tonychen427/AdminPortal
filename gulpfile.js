var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var	del = require('del');
var	useref = require('gulp-useref');


var systemPath = {
	root : "./src/main/webapp"
}

var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
   	  fallback: 'index.html',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('build', ['clean'], function() {

	var lazypipe = require('lazypipe');
	var assets = useref.assets({ searchPath: '{.tmp,app}' });
	var jsChannel = lazypipe()
		.pipe(requirejsOptimize, {
				name: '../bower_components/almond/almond',

				optimize: 'none',
				useStrict: true,

				mainConfigFile: systemPath.root + '/app/config/prod-config.js',
				baseUrl: systemPath.root + '/app',

				include: ['main'],
				insertRequire: ['main']
		})
		.pipe(uglify);

		return gulp.src(systemPath.root + '/index.html')
					.pipe(assets)
					.pipe(gulp.src(systemPath.root + '/app/main.js').pipe(jsChannel()))
					.pipe(rev())
					.pipe(assets.restore())
					.pipe(useref())
					.pipe(revReplace())
					//.pipe(gulp.dest('./dist'));	
					.pipe(gulp.dest(systemPath.root + '/dist/'));	

});