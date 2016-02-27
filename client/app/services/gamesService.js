'use strict';

angular.module('myApp.gamesService', [])

.service( 'GamesService', function ( $http, $q) {
  var url = 'http://localhost:3000/api';

  var games = [];
  return {
    getGames: function findGames() {
      // We create our own promise to return
      var deferred = $q.defer();
      $http.get( url + '/games').then( function ( object ) {
        console.log(object.data);
        // resolve the promise
        deferred.resolve( object.data );
      }, function getError() {
        console.log("error!");
        deferred.reject();
      });
      return deferred.promise;
    }
  };
});
