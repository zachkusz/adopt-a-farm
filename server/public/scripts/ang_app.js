var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/pig', {
      templateUrl: '/views/pig.html',
      controller: "PigController"
    })
    .when('/barnyard', {
      templateUrl: '/views/barnyard.html',
      controller: "BarnYardController"
    })
    .when('/reptile', {
      templateUrl: '/views/reptile.html',
      controller: "ReptileController"
    })
}]);
