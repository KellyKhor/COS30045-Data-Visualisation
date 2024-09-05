function init(){
    //reading data from csv file 
    d3.csv("Lab2_4_Data.csv").then(function(data) {
        console.log(data);
        wombatSightings = data;
        barChart(wombatSightings); // Pass the loaded data to barChart
    })


    var w = 500;
    var h = 600;
    var padding = 5;

    //D3 block
    var svg = d3.select("#chart")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

    function barChart(wombatSightings) {
        svg.selectAll("rect")
            .data(wombatSightings)
            .enter()
            .append("rect")
            .attr("x", function(d, i) {
                return i * (w / wombatSightings.length);
            })
            .attr("y", function(d) {
                return h - (d.wombat * 6);
            })
            .attr("width", function(d) {
                return w / wombatSightings.length - padding;
            })
            .attr("height", function(d) {
                return d.wombat * 6;
            })
            .attr("fill", function(d) {
                return "rgb(0, " + (d.wombat * 15) + ", 0)";
            });
    
        svg.selectAll("text")
            .data(wombatSightings)
            .enter()
            .append("text")
            .text(function(d) {
                return d.wombat;
            })
            .attr("fill", "white")
            .attr("x", function(d, i) {
                return i * (w / wombatSightings.length) + 10.5;
            })
            .attr("y", function(d) {
                return h - (d.wombat * 6) + 12.5;
            });
    }
    
}
window.onload = init;