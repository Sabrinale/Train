
var animalContainer = document.getElementById("train-info");


var stationArray = [];
$( document ).ready(function() {
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://rata.digitraffic.fi/api/v1/live-trains?station=SLO');
  ourRequest.onload = function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
      var ourData = JSON.parse(ourRequest.responseText);
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };

  ourRequest.onerror = function() {
    console.log("Connection error");
  };

  ourRequest.send();

  
});

function renderHTML(data) {
  var htmlString = "";

    

  for (i = 0; i < data.length; i++) {
   
    
    for (ii = 0; ii < data[i].timeTableRows.length; ii++) {
      if (contains(stationArray, data[i].timeTableRows[ii].stationShortCode) == false) {
        stationArray.push(data[i].timeTableRows[ii].stationShortCode);
        //htmlString += " <p> station :"+ data[i].timeTableRows[ii].stationShortCode;
         
      
      } 
       
    }
 
//htmlString += "tong so tram la " +stationArray.length;
    

    

  }
for (n = 0; n < stationArray.length; n++){
  htmlString += '<div class =" col-lg-4 col-md-4 col-sm-6 col-xs-12 station" id="'+stationArray[n]+'-'+n+'"> <h6>'+stationArray[n] +'</h6>';
  for (i = 0; i < data.length; i++) {

for (ii = 0; ii < data[i].timeTableRows.length; ii++) {
        if (stationArray[n] === data[i].timeTableRows[ii].stationShortCode){
          if (data[i].timeTableRows[ii].type == 'DEPARTURE'){ 
                htmlString += '<div style="display:none;" class = "'+n+'">DEPARTURE '+data[i].trainType+'-'+data[i].trainNumber+' </div>';
          } if (data[i].timeTableRows[ii].type == 'ARRIVAL'){
            htmlString += '<div style="display:none;" class = "'+n+'">ARRIVAL '+data[i].trainType+'-'+data[i].trainNumber+' </div>';
            }
        }
      }
  }
  htmlString += '</div>';
}
for (n = 0; n<stationArray.length;n++){
var x = stationArray[n]; 
$(document).ready(function(){
    $("#"+x).click(function(){
        $("."+x).toggle();
    });
});
}
console.log(stationArray);
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
$(function() {
    $('body').delegate('.station', 'click', function() {
        var sliderSplit = this.id.split('-'); // split the string at the hyphen
        switchBanners(parseInt(sliderSplit[1]), true);
    });
});

function switchBanners(index) {
   $("."+index).toggle();
  
}
                                                       