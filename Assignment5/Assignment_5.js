var dataset = []
d3.csv("data.csv", function(data) {
   dataset = data.map(function(d) { return [ +d["max_i"], +d["min_i"] ]; });
   console.log(dataset)
});
 