// initialise ng-app
var kartikpandey = angular.module('kartikpandey',['ngRoute']);



kartikpandey.config(function ($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'pages/home.html',
        });
});

// main controller
kartikpandey.controller('mainController', function($scope){
    
});