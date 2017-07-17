var express = require('express');
var app = express();

var fs = require('fs');
const port = process.env.PORT|| 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded(
	{extended: true}
	));
app.use('/',express.static('public'));

var jsonfile = require('jsonfile');
app.use(function (req, res, next) {
    "use strict";
    // https://www.w3.org/TR/cors/#access-control-allow-origin-response-header
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.get('/', function(req, res){
	fs.readFile(__dirname+"/"+"index.html",'utf8', function (err,data){
		res.end(data);
	})
}
);
/*var request = require("request");

var data = "https://rata.digitraffic.fi/api/v1/live-trains?station=SLO"

request({
    url: data,
    json: true
}, function (error, response, body) {

    if (!error && response.statusCode === 200) {
    	renderHTML(body);
        //console.log(body) // Print the json response
    }
});*/
app.get('/:station', function (req,res){
	var station = req.params.station;
	var name = req.params.name;
	var responseObject = { message :'Hey, information of '+station+' will be soon available here' }
	res.send(responseObject);
});
	 

var server = app.listen(port, function() {
	 console.log("Example app listening at http://localhost:"+ port);
} 
);
