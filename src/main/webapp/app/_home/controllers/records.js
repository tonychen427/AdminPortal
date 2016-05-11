define(function(require) {
    'use strict';

     require('../directives/records');
     //require('../../../app');

     var recordCtl = function($scope){
            $scope.records = [
             "N-Tier - architecture",
             "TestNG - Unit Testing",
             "Jenkins.io - automation server,",
             "Tomcat / Jetty / JBoss"
         ];

     };

     return recordCtl
});