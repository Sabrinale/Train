console.log(" services js");

app.factory('photos',['$http', function ($http) {

            return $http.get('https://rata.digitraffic.fi/api/v1/live-trains?station=SLO')
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
app.factory('additional',['$http', function ($http) {

            return $http.get('https://rata.digitraffic.fi/api/v1/compositions/960?departure_date='+today)
            .success(
                function (data) {
                    
                    return data;
                }
            ).error(
                function (data) {
                    return data
                    ;
                }
            );
        }
    ]
);
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!

var yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;
