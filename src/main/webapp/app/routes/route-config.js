define(function (require) {
    'use strict';

    var routeConfig = function ($stateProvider) {
        $stateProvider
            .state('route1', {
                url: "/route1",
                template: require('text!partials/route1.html'),
            })
            .state('route1.list', {
                url: "/list",
                template: '<h1 ng-repeat="x in records">{{x}}</h1>',
                controller: require('_home/controllers/records')
            })
            .state('route2', {
                url: "/route2",
                template: require('text!partials/partial2.html'),
            })
            .state('route2.list', {
                url: "/list",
                templateUrl: "route2.list.html",
                controller:  [ '$scope', function($scope) {
                    $scope.things = ["A", "Set", "Of", "Things"];
                }]
            });

    };

    routeConfig.$inject = ['$stateProvider'];

    return routeConfig;
});
