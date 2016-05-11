define(function(require) {
	'use strict';
	//var template = require('text!views/title.html');
	var angular = require('angular');
	var routeConfig = require('routes/route-config');
	var homeModule = require('_home/modules/records');

//		,demoModule = require('demo/demo-module'),

	//require('angular.route');
	require('angularUI.route');	
	

	//var app = angular.module('ConfigurationManager', ['ngRoute', 'ui.router']);	
	var app =  angular.module('ConfigurationManager', ['ui.router', homeModule.name ]);	
	app.config(routeConfig);
	
	return app;
});