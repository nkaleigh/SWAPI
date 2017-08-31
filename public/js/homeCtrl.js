angular.module('App').controller('homeCtrl', function($scope, service) {
    $scope.broken = "Working!";

    $scope.list = function() {
        $scope.list = service.getInfo().then(function(response) {
            console.log('controllerResponse', response.results);
            return response.results;
    });
};

    $scope.list();
});