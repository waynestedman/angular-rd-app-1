// var staffControllers = angular.module('staffControllers', []);
var rdApp = angular.module('rdApp', []);

rdApp.controller('staffControllers', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').then(function(data) {
    $scope.staff = data;
    $scope.staffOrder = 'name';
  });
}]);
