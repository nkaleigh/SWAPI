angular.module('App').service('service', function($http) {
    this.getInfo = function() {
        console.log('reached service');
        return $http.get('https://swapi.co/api/people').then(function(response) {
            return response.data;
        });
    };
});