var initMap = function() {
  var map, layer;
  var tiles = new MM.TemplatedLayer("http://spaceclaw.stamen.com/toner/{Z}/{X}/{Y}.png");
  map = new MM.Map("map", tiles);
 
  layer = new SpotlightLayer();
  layer.spotlight.radius = 40;
 
  map.addLayer(layer);
  map.setCenterZoom(new MM.Location(51.75202, -1.25773), 14);
  var locations = [
    new MM.Location(51.76204, -1.25865),
    new MM.Location(51.75604, -1.25878)
  ];
  locations.forEach(function(loc) {
    layer.addLocation(loc);
  });
}
