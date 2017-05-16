var skeleton = angular.module("skeletonApp",['ngRoute']);

skeleton.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when("/main/",{
    templateUrl: 'views/main.html'
  }).
  when("/sap/",{
    templateUrl: 'views/sap.html'
  }).
  otherwise({
    redirectTo: '/main/'
  });
}]);