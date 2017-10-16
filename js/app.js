var rdApp = angular.module('rdApp', [
  'ngRoute',
  'staffControllers'
]);

rdApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/list', {
      templateUrl: 'views/staff.html',
      controller: 'ListController'
    }).
    otherwise({
      redirectTo: '/list'
  });
}]);