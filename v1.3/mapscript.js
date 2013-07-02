var food = document.getElementById('Foodies');
var interestingTalk = document.getElementById('Interesting Talks');
var markerLayer = new L.LayerGroup();
var interestLayer = new L.LayerGroup();
var layerControl = new L.Control.Layers();
var defaultzoom = 15;
var foodClickCounter;
var interestClickCounter;

//TODO LIST:
//NEED TO SOLVE THE TIME MARKER PROBLEM
//CHANGE THE GEOCODER!! GOOGLE MAPS API GEOCODER!!!
//ADD TIME BAR AND PROPERTY TO THE MARKER
//MAKE A MARKER CLASS
//Zoom to accommodate the distance people are willing to travel 
//Need a marker expander for events in places with lots of events 
//Need to create a Marker class at some point 
//Need to design a Marker class for different types and what information is contained on each marker
//Include activity heat map !!!
//Need to find a better method to input into the maps  
//Only want to load markers that are within the radius
//Don't place markers when you are far away and give a message !


//Example of another marker
//var oxford2 = L.marker([51.75302,-1.25773]).bindPopup('This is Littleton, CO.').addTo(event2);

//Setting the map functionality
var map = L.mapbox.map('map', 'examples.map-4l7djmvo',{zoomControl:false})
    .setView([51.75202, -1.25773], defaultzoom)
    .on('click',mapClickOnFunction);

function markerCatagory(location,catagory,description,userId,image){ 
    this.locationValue = location;
    this.catagory = catagory;
    this.description = description;
    this.userId = userId;
    this.image = image;
}

//document.body.style.zoom="100%"

/*function setPixelBase(){
    var w=window.innerWidth;
    var h=window.innerHeight;
    window.resizeTo(w,h);
};
setPixelBase()*/

/*function setEventMarker(){}*/ // this is in progress

function timeBars(){
    var windowWidth=window.innerWidth; //this variable is different for internet explorer
    var windowHeight=window.innerWidth; //this variable is different for internet explorer
    var numberTimeBars = 22;
    var timeBarWidth = 20;
    var timeBarHeight = 50;
    var arrayTimeBar = new Array();
    
    for(var i=0; i<numberTimeBars;i++)
    {
	arrayTimeBar[i] = "timeBar" + i
    }

    for(var i=0; i<numberTimeBars;i++)
    {
	//var timeBarPosition = timeBarWidth*i*2 + 75 ;
	var timeBarPosition = i/(numberTimeBars/100) ; 
	var timeBarNode = '<div id =' + arrayTimeBar[i]+ '></div>';
	$('#timeArray').append(timeBarNode);
	var getCurrentTimeBar = document.getElementById(arrayTimeBar[i])
	getCurrentTimeBar.style["outlineStyle"] ="solid";
	getCurrentTimeBar.style["outlineWidth"] = "1px";
	getCurrentTimeBar.style["padding"] = "5px";
	getCurrentTimeBar.style["right"] = timeBarPosition + "%";
	getCurrentTimeBar.style["bottom"] = "10px";
	getCurrentTimeBar.style["width"] = "1%";
	getCurrentTimeBar.style["height"] = "8%";
	getCurrentTimeBar.style["backgroundColor"] = "#B4C7F3";
	getCurrentTimeBar.style["position"] = "fixed";
	getCurrentTimeBar.style["zIndex"] = "100";
	getCurrentTimeBar.title = arrayTimeBar[i];
 
	getCurrentTimeBar.onmouseover=function(){
	    //this.innerHTML = this.title;
	    this.style["backgroundColor"] = "#034569"; 
	};

	//Function called if user leaves the timeBar
	getCurrentTimeBar.onmouseout=function(){
	    //this.innerHTML = "";
	    this.style["backgroundColor"] = "#B4C7F3";
	};	
    }
}
//document.getElementById('loginButton').innerHTML="Login";
//document.getElementById('loginButton').style.fontSize="large";
//document.getElementById('loginButton').onclick=function(){
//    var loginHyperLink = "loginForm.html";
//    window.location=loginHyperLink;
//};

function markerFunctionOnClick(e){
    document.getElementById('sideBar').innerHTML = "<h1> This is where the Marker Data will go eventually! </h1>";
};

//Clear the tooltip when the map is on 
function mapClickOnFunction(e){
    document.getElementById('sideBar').innerHTML = '<h1> Please choose a marker </h1>';
};


function loadMap(){
    timeBars()
//If marker exsists compounds the marker 
    food.onclick = function(e) {
	if (foodClickCounter >= 1) {
	    markerLayer.clearLayers(); //Clear the markerLayer
	    foodClickCounter = 0;
	}
	else{
	    foodClickCounter = 1;
	    L.marker([51.75202,-1.25773]).bindPopup('foodie marker').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75203,-1.25773]).bindPopup('foodie marker2').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75204,-1.25773]).bindPopup('foodie marker3').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75202,-1.25773]).bindPopup('foodie marker4').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75205,-1.25773]).bindPopup('foodie marker5').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75202,-1.25773]).bindPopup('foodie marker6').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75202,-1.25773]).bindPopup('foodie marker7').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75206,-1.25773]).bindPopup('foodie marker8').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75207,-1.25773]).bindPopup('foodie marker9').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75208,-1.25773]).bindPopup('foodie marker10').on('click', markerFunctionOnClick).addTo(markerLayer);
	    L.marker([51.75302,-1.25773]).bindPopup('foodie marker11').on('click', markerFunctionOnClick).addTo(markerLayer);
	    markerLayer.addTo(map);
	}
	
    };
    
    interestingTalk.onclick=  function(e){
	if (interestClickCounter >=1){
	    interestLayer.clearLayers();
	    interestClickCounter = 0
	}
	else{
	    interestClickCounter = 1;
	    L.marker([51.75402,-1.25773]).bindPopup('This is Littleton, CO.').on('click', markerFunctionOnClick).addTo(interestLayer)
	    interestLayer.addTo(map);
	}
    };

}

function geoCode(address, callback) {
    var firstPart = "http://geocoding.cloudmade.com/7d86fd2a4f044ff4825c2503a649da8d/geocoding/v2/find.geojs?query="
    var url = firstPart + encodeURI(address)  
    $.ajax({
	url: url + '&callback=?',
	dataType: "jsonp",
	error: function(){
	    document.getElementById('printer').innerHTML="ERROR!";
	},
	success: callback
    });
}

function zoomToAddress(data){
    var newLocation = new L.LatLng(data.features[0].centroid.coordinates[1], data.features[0].centroid.coordinates[0]);
    map.setView(newLocation, 15)
}

function getLocation(){
    var geoLocationInput = document.getElementById('locationFormTxt').value;
    geoCode(geoLocationInput,zoomToAddress);
}

//This checks for DOMLoadedContent
document.addEventListener('DOMContentLoaded', loadMap);

//document.getElementById('signupButton').onclick=function(){
//    var signupHyperLink = "signup.html";
//    window.location=signupHyperLink;
//};


var imglogoId = document.getElementById('imglogo');
var mouseOverLogo;
function mouseOnLogo(){
    //imglogoId.onmouseover=function(){
	document.getElementById('logoBox').style.display = "block";    
	$(document).ready(function(){
	    $("#logoBox").animate({
		top:'15%', //SHOULDN'T LEAVE THIS HARDCODED!!!!
		left:'0%',
		display:'block',
		height:'40%',
		width:'10%',
	    },600);
	});
    //};
};
    
function mouseOffLogo(){
    //document.getElementById('logoBox').style.display = "none";
	//imglogoId.onmouseout=function(){
	    $(document).ready(function(){
		$("#logoBox").animate({
		    height:'0px',
		},600);
	    });
	    //document.getElementById('logoBox').style.display = "none";
	//};
};


/*$(document).ready(function(){
    $("imglogo").click(function(){
	$("logoBox").animate({
	    display:'block',
	    bottom:'90px',
	    height:'100px',
	});
    });
});*/


//Show marker information in the sidepanel
map.markerLayer.on('click',function(e) {
    e.layer.unbindPopup();
    var feature = e.layer.feature;
    var info = '<h1> hello' + feature.properties.title + '</h1>' +
        '<p>' + feature.properties.description + '</p>';
    //document.getElementById('sideBar').innerHTML = info;
    document.getElementById('sideBar').innerHTML = "<h1> hello </h1>";

});

/*$(window).resize(function(){
  resizeUI();
}); 
$(document).ready(function(){
  resizeUI();
});

// resize on page load AND window resize
function resizeUI(){
 if($(window).width() > 500){
 $('#header').css('position', 'fixed');
 }
 else{
 $('#header').css('position', 'static');
 }
} */

var zoomRatio = $(window).width() / 1024; 
//if your site is fixed at 1024 px for example

$(document).ready(function(){

$(html).css("zoom",zoomRatio);

});

