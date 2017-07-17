app.controller('HomeController', ['$scope', 'photos', function ($scope, photos) {

    photos.success(function (data) {
    	 $scope.products = data;
    });
}]);
console.log("home controller");


