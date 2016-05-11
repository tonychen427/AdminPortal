// define(function() {
//  'use strict';

//  var routeConfig = function($routeProvider, $routeResolver) {

//      console.log($routeProvider);
//      console.log($routeResolver);
//      $routeProvider
//          .when('/',{
//              template:"<div>hello</div>",
//              controller : function(){}
//          })
//          .otherwise({
//              redirectTo: '/'
//          });
//  };

//  routeConfig.$inject = ['$routeProvider'];

//  return routeConfig;
// });



define(function (require) {
    'use strict';

    var routeConfig = function ($stateProvider) {
        // $stateProvider.state('view1', {
        //         url: '/view1',
        //         //templateUrl: 'app/partials/partial1.html',
        //         template: require('text!partials/partial1.html'),
        //         controller: function($scope) {
        //             $scope.partial1Click = function() {
        //                 alert("123");

        //             }
        //         }
        //     })
        //     .state('view2', {
        //         url: '/view2',
        //         template: require('text!partials/partial2.html'),
        //         controller: function() {

        //         }
        //     });

        //$urlRouterProvider.otherwise("/route1")
        $stateProvider
            .state('route1', {
                url: "/route1",
                template: require('text!partials/route1.html'),
            })
//            .state('route1.list', {
//                url: "/list",
//                template: '<h1 ng-repeat="x in records">{{x}}</h1>',
//                controller: require('_home/controllers/records')
//
//
//                // controller: [ '$scope', function($scope) {
//                //     $scope.records = [
//                //         "Alfreds Futterkiste",
//                //         "Berglunds snabbkp",
//                //         "Centro comercial Moctezuma",
//                //         "Ernst Handel",
//                //     ]
//                // }]
//            })
//            .state('route2', {
//                url: "/route2",
//                template: require('text!partials/partial2.html'),
//            })
//            .state('route2.list', {
//                url: "/list",
//                templateUrl: "route2.list.html",
//                controller:  [ '$scope', function($scope) {
//                    $scope.things = ["A", "Set", "Of", "Things"];
//                }]
//            });

    };

    routeConfig.$inject = ['$stateProvider'];

    return routeConfig;
});
