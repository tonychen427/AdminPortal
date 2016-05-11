define(function(require) {
	'use strict';

	require('angularUI.route');	

	var angular = require('angular');		
	var appDirective = require('../directives/records');		
	var module = angular.module('appDemo', ['ui.router']);

	module.directive(appDirective.id, appDirective);

	//module.config(demoRouteConfig);

	return module;
});
