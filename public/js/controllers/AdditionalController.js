app.controller('AdditionalController', ['$scope', 'additional', function ($scope, additional) {

    additional.success(function (data) {
    	 $scope.trains = data;
    });
}]

);

  console.log("addition controller");