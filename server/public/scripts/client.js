var myApp = angular.module('myApp', []);

myApp.config(function($routeProvider){
    $routeProvider.when('/rentals', {
        templateUrl: 'templates/rentals.html',
        controller: 'RentalController as rc'
    }).when('/forsale', {
        templateUrl: 'templates/forsale.html',
        controller: 'ForSaleController as fsc'
    })
})