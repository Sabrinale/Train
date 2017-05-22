console.log("productcontr js");
console.log("productcontr js");
app.controller('ProductController',
    [
        '$scope',
        'photos',
        '$routeParams',
        
        
        function ($scope, products, $routeParams) {
            products.success(
                function (data) {
                    $scope.detail = data[$routeParams.id];
                }
            );
        }
    ]
);