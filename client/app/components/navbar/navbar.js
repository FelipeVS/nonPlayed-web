'use strict';

angular.module('myApp.navbar', [])

.controller('navbarCtrl', function($rootScope, $scope, $location) {

  $scope.$on('$locationChangeSuccess', function(next, current) {
   console.log(current);
 });

});
