var staffControllers = angular.module('staffControllers', []);

staffControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').then(function(data) {
    $scope.staff = data;
    //$scope.staffOrder = 'name';
  });
}]);
