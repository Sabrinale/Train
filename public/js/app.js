///////////////////////////////////////app.js

//hello *** js/app.js
console.log("appjs run here!");
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/books',
            {   
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            }
        ).when('/books/:id',
            {
                controller: 'ProductController',
                templateUrl: 'views/product.html'
            }
        
        ).otherwise(
            {
                redirectTo: '/'
            }
        );
        
        
    }]);