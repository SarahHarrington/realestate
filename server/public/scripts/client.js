var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider){
    $routeProvider.when('/forsale', {
        templateUrl: 'templates/forsale.html',
        controller: 'ForSaleController as fs'
    }).when('/rentals', {
        templateUrl: 'templates/rentals.html',
        controller: 'RentalController as rc'
    }).when('/addproperty', {
        templateUrl: 'templates/addproperty.html',
        controller: 'AddPropertyController as ap'
    })
})