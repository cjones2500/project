var food = document.getElementById('Foodies');
var interestingTalk = document.getElementById('Interesting Talks');
var markerLayer = new L.LayerGroup();
var interestLayer = new L.LayerGroup();
var layerControl = new L.Control.Layers();
var foodClickCounter;
var interestClickCounter;

//Need to create a Marker class at some point 
//Need to design a Marker class for different types and what information is contained on each marker
//Include activity heat map !!!

//Example of another marker
//var oxford2 = L.marker([51.75302,-1.25773]).bindPopup('This is Littleton, CO.').addTo(event2);

var map = L.mapbox.map('map', 'examples.map-4l7djmvo')
    .setView([51.75202, -1.25773], 14)
    .addControl(L.mapbox.geocoderControl('examples.map-4l7djmvo'));

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




