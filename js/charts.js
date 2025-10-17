// Choropleth map
var vg_1 = "js/choropleth_map.json";
vegaEmbed('#choropleth_map', vg_1).then(function(result) {
  // success
}).catch(console.error);

// Bar chart
var vg_2 = "js/line_chart.json";
vegaEmbed('#line_chart', vg_2, { actions: false, config: { autosize: { type: "fit", contains: "padding" }}}).then(function(result) {
  // success
}).catch(console.error);

// streamgraph
var vg_3 = "js/streamgraph.json";
vegaEmbed('#streamgraph', vg_3, { actions: false, config: { autosize: { type: "fit", contains: "padding" }}}).then(function(result) {
  // success
}).catch(console.error);


// bump_chart
var vg_4 = "js/bump_chart.json";
vegaEmbed('#bump_chart', vg_4, { actions: false, config: { autosize: { type: "fit", contains: "padding" }}}).then(function(result) {
  // success
}).catch(console.error);

// slope_chart
var vg_5 = "js/slope_chart.json";
vegaEmbed('#slope_chart', vg_5, { actions: false, config: { autosize: { type: "fit", contains: "padding" }}}).then(function(result) {
  // success
}).catch(console.error);