'use strict';

angular.module('myApp.games', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/games', {
    templateUrl: 'view/games/games.html',
    controller: 'gamesCtrl'
  });
}])

.controller('gamesCtrl', function($scope, GamesService) {
  GamesService.getGames()
    .then(function(data) {
      console.log(data);
      $scope.games = data;
    }, function(error) {
      console.error(error)
    });
});
