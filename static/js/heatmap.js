var myMap = L.map("map", {
  center: [37.0902, -95.7129],
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 5,
  zoomOffset: -1,
  id: "mapbox/outdoors-v11",
  accessToken: API_KEY
}).addTo(myMap);

//var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";
var static = "data/output/Cleaned_Marvel_Dating_American_v3.json";

d3.json(static).then(function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < Object.keys(response.Latitude).length; i++) {
    /*var location = response.Latitude[i];

    if (location) {
      heatArray.push([location.coordinates[1], location.coordinates[0]]);
    }*/
    heatArray.push([response.Latitude[i], response.Longitude[i]]);
  }

  var heat = L.heatLayer(heatArray, {
    radius: 25,
    blur: 35
  }).addTo(myMap);

});
