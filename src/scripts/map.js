// import * as worldMap from "../../countries-110m.json"

import { render } from "sass";

function renderMap() {

    const width = 900;
    const height = 600;

    const svg =  d3.select("#map")
        .append("svg")
        .attr("width", width).attr("height", height)
        .append("g");

    d3.queue()
        .defer(d3.json, "countries-110m.json")
        .await(ready)


    const projection = d3.geoMercator().translate([width/2, height/2]);
    const path = d3.geoPath()
        .projection(projection);

    function ready (_error, data) {
        console.log(data)

        const countries = topojson.feature(data, data.objects.countries).features;
        svg.selectAll(".country")
            .data(countries)
            .enter().append("path")
            .attr("class", "country")
            .attr("d", path)
    }

}

renderMap()
export default renderMap
    
    // topojson.object(topology.objects.countries).geometries
    //     .enter().append("path").attr("d", path)

    // d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json", function(error, topology) {
    //     g.selectAll("path").data(topojson.object(topology.objects.countries).geometries)
    //     .enter().append("path").attr("d", path)
    // });

    // d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json')
    //     .then(data => {

    //         const countries = topojson.feature(data, data.objects.countries).features;
    //         group.selectAll('path').data(countries).enter().append('path').attr('class', 'country').attr('d', path);

    // });