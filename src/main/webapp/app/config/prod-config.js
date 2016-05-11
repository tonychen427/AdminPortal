require.config({
	baseUrl: 'app',

	paths: {
		'angular': '../bower_components/angular/angular',
		'angular.route': '../bower_components/angular-route/angular-route',
		'angularUI.route' : '../bower_components/angular-ui-router/release/angular-ui-router',
		'text': '../bower_components/text/text'
	},

	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular.route': ['angular']
	}
});
