var food = document.getElementById('Foodies');
var interestingTalk = document.getElementById('Interesting Talks');
var markerLayer = new L.LayerGroup();
var interestLayer = new L.LayerGroup();
var layerControl = new L.Control.Layers();
var foodClickCounter;
var interestClickCounter;

//TODO LIST:
//Zoom to accommodate the distance people are willing to travel 
//Need a marker expander for events in places with lots of events 
//Need to create a Marker class at some point 
//Need to design a Marker class for different types and what information is contained on each marker
//Include activity heat map !!!
//Need to find a better method to input into the maps  

//Example of another marker
//var oxford2 = L.marker([51.75302,-1.25773]).bindPopup('This is Littleton, CO.').addTo(event2);

function loadMap(){

var map = L.mapbox.map('map', 'examples.map-4l7djmvo')
    .setView([51.75202, -1.25773], 15)
    //.addControl(L.mapbox.geocoderControl('examples.map-4l7djmvo'));

//If marker exsists compounds the marker 
food.onclick = function(e) {
    if (foodClickCounter >= 1) {
	markerLayer.clearLayers();
	foodClickCounter = 0;
    }
    else{
	foodClickCounter = 1;
	L.marker([51.75202,-1.25773]).bindPopup('foodie marker').addTo(markerLayer);//.addTo(map);
	L.marker([51.75203,-1.25773]).bindPopup('foodie marker2').addTo(markerLayer);//.addTo(map);
	L.marker([51.75204,-1.25773]).bindPopup('foodie marker3').addTo(markerLayer);//.addTo(map);
	L.marker([51.75202,-1.25773]).bindPopup('foodie marker4').addTo(markerLayer);//.addTo(map);
	L.marker([51.75205,-1.25773]).bindPopup('foodie marker5').addTo(markerLayer);//.addTo(map);
	L.marker([51.75202,-1.25773]).bindPopup('foodie marker6').addTo(markerLayer);//.addTo(map);
	L.marker([51.75202,-1.25773]).bindPopup('foodie marker7').addTo(markerLayer);//.addTo(map);
	L.marker([51.75206,-1.25773]).bindPopup('foodie marker8').addTo(markerLayer);//.addTo(map);
	L.marker([51.75207,-1.25773]).bindPopup('foodie marker9').addTo(markerLayer);//.addTo(map);
	L.marker([51.75208,-1.25773]).bindPopup('foodie marker10').addTo(markerLayer);//.addTo(map);
	L.marker([51.75302,-1.25773]).bindPopup('foodie marker11').addTo(markerLayer);//.addTo(map);
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
	L.marker([51.75402,-1.25773]).bindPopup('This is Littleton, CO.').addTo(interestLayer)
	interestLayer.addTo(map);
    }
};

}

function geoCode(address, callback) {
    0//var firstPart = 'http://geocoding.cloudmade.com/8ee2a50541944fb9bcedded5165f09d9/geocoding/v2/find.geojs?query='
    var firstPart = "http://geocoding.cloudmade.com/7d86fd2a4f044ff4825c2503a649da8d/geocoding/v2/find.js?query="
    var url = firstPart + encodeURI(address)
    $.ajax({
	url: url + '&return_location=true', //&callback=cmGeocodeCallback',
	//This always occurs
	//complete: callback
	success: callback
    });
}
document.addEventListener('DOMContentLoaded', loadMap);

function displayAddress(data){
    //document.getElementById('printer').innerHTML=data.found;
    document.getElementById('printer').innerHTML="hello2";
}
function getLocation(){
    var geoLocationInput = document.getElementById('locationFormTxt').value;
    geoCode(geoLocationInput,displayAddress);
}
    

