define(function(require) {
    'use strict';

     require('../directives/records');
     //require('../../../app');

     var recordCtl = function($scope){
            $scope.records = [
             "N-Tier - Architecture",
             "TestNG - Unit Testing",
             "Jenkins.io - Automation Server,",
             "Tomcat / Jetty / JBoss"
         ];

     };

     return recordCtl
});