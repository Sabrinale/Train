console.log("photos services js");

app.factory('photos',['$http', function ($http) {

            return $http.get('book.json')
            .success(
                function (data) {
                    return data;
                }
            ).error(
                function (data) {
                    return data;
                }
            );
        }
    ]
);
