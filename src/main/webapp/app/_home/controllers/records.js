define(function(require) {
    'use strict';

     require('../directives/records');
     require('../../../app');

     var recordCtl = function($scope){
		$scope.records = [
             "Alfreds Futterkiste",
             "Berglunds snabbkp",
             "Centro comercial Moctezuma",
             "Ernst Handel123"
         ];

     };

     return recordCtl
});