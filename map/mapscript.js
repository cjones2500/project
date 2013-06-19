var map = L.mapbox.map('map', 'examples.map-4l7djmvo')
	.setView([51.75202, -1.25773], 14)
	.addControl(L.mapbox.geocoderControl('examples.map-4l7djmvo'));

var geoJson = [{
	type: 'Feature',
	"geometry": { "type": "Point", "coordinates": [-1.25773, 51.75202]},
	"properties": {
		'title': 'Oxford University',	
		'description': 'Pictures of Oxford University',	
        'images':[['http://www.oxford-royale.co.uk/images/oxford-university.jpg','Oxford University Picture 1']]
    }
}, 
{
	type: 'Feature',
    "geometry": { "type": "Point", "coordinates": [-74.00, 40.71]},
    "properties": {
        'title': 'New York City',
		'description': 'Pictures of New York City',
        'images':[['http://i.imgur.com/exemdwr.png','Peter Minuit is credited with the purchase of the island of Manhattan in 1626.']]
    	}
}];

// Add custom popup html to each marker
map.markerLayer.on('layeradd', function(e) {
    var marker = e.layer;
    var feature = marker.feature;
    var images = feature.properties.images
    var slideshowContent = '';

    for(var i = 0; i < images.length; i++) {
        var img = images[i];

        slideshowContent += '<div class="image' + (i === 0 ? ' active' : '') + '">' +
                              '<img src="' + img[0] + '" />' +
                              '<div class="caption">' + img[1] + '</div>' +
                            '</div>';
    }

    // Create custom popup content
    var popupContent =  '<div id="' + feature.properties.id + '" class="popup">' +
                            '<h2>' + feature.properties.title + '</h2>' +
                            '<div class="slideshow">' +
                                slideshowContent +
                            '</div>' +
							'<h5>' + feature.properties.description + 
                            '<div class="cycle">' +
                                '<a href="#" class="prev" onclick="return moveSlide(\'prev\')">&laquo; Previous</a>' +
                                '<a href="#" class="next" onclick="return moveSlide(\'next\')">Next &raquo;</a>' +
                            '</div>'
                        '</div>';

    // http://leafletjs.com/reference.html#popup
    marker.bindPopup(popupContent,{
        closeButton: false,
        minWidth: 320
    });
});

// Add features to the map
map.markerLayer.setGeoJSON(geoJson);

// This example uses jQuery to make selecting items in the slideshow easier.
// Download it from http://jquery.com
function moveSlide(direction) {
    var $slideshow = $('.slideshow'),
        totalSlides = $slideshow.children().length;

    if (direction === 'prev') {
        var $newSlide = $slideshow.find('.active').prev();
        if ($newSlide.index() < 0) {
            $newSlide = $('.image').last();
        }
    } else {
        var $newSlide = $slideshow.find('.active').next();
        if ($newSlide.index() < 0) {
            $newSlide = $('.image').first();
        }
    }

    $slideshow.find('.active').removeClass('active').hide();
    $newSlide.addClass('active').show();
    return false;
}

