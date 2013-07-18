var food = document.getElementById('foodIcon');
var interestingTalk = document.getElementById('intelligentIcon');
var markerLayer = new L.LayerGroup();
var interestLayer = new L.LayerGroup();
var layerControl = new L.Control.Layers();
var defaultzoom = 13;
var foodClickCounter;
var interestClickCounter;

//TODO LIST:
//NEED TO SOLVE THE TIME MARKER PROBLEM
var map = L.mapbox.map('map', 'cjones2500.map-whwnhkn2',{zoomControl:false})
    .setView([51.75202, -1.25773], defaultzoom)
    //.on('click',mapClickOnFunction);
//function loadMap(){

//IF INNER WINDOW IS LESS THAN A CERTAIN AMOUNT THEN CHANGE 
	

//document.addEventListener('DOMContentLoaded', loadMap);

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


var buttonBoxToggle = 1;
$(document).ready(function(){
    $("#buttonBox").click(function () {
	//$("#sideBar").slideToggle("slow",{direction:"right"});
	$("#sideBar").animate({width: 'toggle'});
	var buttonBoxdistance = '2%';
	var originalButtonBoxDistance = '22%';
	if (buttonBoxToggle == 1){
	    $("#buttonBox").animate({right: buttonBoxdistance});
	    buttonBoxToggle = 0
	}
	else{
	    $("#buttonBox").animate({right: originalButtonBoxDistance});
	    buttonBoxToggle = 1
	}
    });
});

    
