'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: 'view/welcome/welcome.html',
    controller: 'welcomeCtrl'
  });
}])

.controller('welcomeCtrl', function($rootScope, $scope, $location) {
  $scope.login = function() {
    $rootScope.logged = true;
    $rootScope.location = $location.url('/home');
    $location.url('/home');
  };
});
