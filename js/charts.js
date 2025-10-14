// Choropleth map
var vg_1 = "js/choropleth_map.json";
vegaEmbed('#choropleth_map', vg_1).then(function(result) {
  // success
}).catch(console.error);

// Bar chart
var vg_2 = "js/bar_chart.json";
vegaEmbed('#bar_chart', vg_2).then(function(result) {
  // success
}).catch(console.error);
