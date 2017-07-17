
///////////////////////////////////////app.js

//hello *** js/app.js
console.log("appjs run here!");
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/currentmoving',
            {   
                controller: 'HomeController',
                templateUrl: 'views/home.html'
            }
        ).when('/currentmoving/:id',
            {
                controller: 'ProductController',
                templateUrl: 'views/product.html'
            }
        
        ).when('/add',
            {
                controller: 'AdditionalController',
                templateUrl: 'views/additional.html'
            }
        
        ).otherwise(
            {
                redirectTo: '/'
            }
        );
        
        
    }]);