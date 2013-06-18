var zoomSlider = document.getElementById('zoom');
var zoomValue = document.getElementById('zoomvalue');
var map, targetZoom;

var initMap = function() {
  var template = "http://b.tile.cloudmade.com/7d86fd2a4f044ff4825c2503a649da8d/99618/256/15/{X}/{Y}.png";
  var subdomains = ['', 'a.', 'b.', 'c.'];
  var provider = new MM.TemplatedLayer(template,subdomains);
      map = new MM.Map('map', provider, null);

	map.setCenterZoom(new MM.Location(51.75202, -1.25773), 15);

  targetZoom = map.getZoom();
  zoomSlider.onchange = function() {
    var sliderProp = (zoomSlider.value - zoomSlider.min) / (zoomSlider.max - zoomSlider.min);
    targetZoom = sliderProp * 18.0; 
    MM.getFrame(animateToZoom);
  };
  zoomValue.innerHTML = targetZoom;

  map.addCallback('zoomed', function(){
    zoomValue.innerHTML = map.getZoom().toFixed(2);
    zoomSlider.value = map.getZoom() * 1000;
  });
}

var animateToZoom = function() {
  var currentZoom = map.getZoom();
  var nextZoom = currentZoom + (targetZoom - currentZoom) * 0.2;
  if (Math.abs(nextZoom - currentZoom) < 0.001) {
    nextZoom = currentZoom;
  } else {
    MM.getFrame(animateToZoom);
  }
  map.setZoom(nextZoom);
  zoomValue.innerHTML = nextZoom.toFixed(2);
}
