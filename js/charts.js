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

// bar_chart
var vg_5 = "js/bar_chart.json";
vegaEmbed('#bar_chart', vg_5, { actions: false, config: { autosize: { type: "fit", contains: "padding" }}}).then(function(result) {
  // success
}).catch(console.error);

// stacked_bar
var vg_6 = "js/stacked_bar_graph.json";
vegaEmbed('#stacked_bar_graph', vg_6, { actions: false, config: { autosize: { type: "fit", contains: "padding" }}}).then(function(result) {
  // success
}).catch(console.error);