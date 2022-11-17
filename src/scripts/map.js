import Team from "./team.js"

class Map {
    constructor() {
        this.renderMap()
    }

    renderMap() {
        const width = 975;
        const height = 610;

        const svg =  d3.select("#map")
            .append("svg")
            .attr("width", width).attr("height", height)
            .append("g");

        const projection = d3.geoMercator();
        const path = d3.geoPath()
            .projection(projection);

        d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json")
            .then(data => {
                const countries = topojson.feature(data, data.objects.countries);
                svg.selectAll("path")
                    .data(countries.features)
                    .enter().append("path")
                    .attr("class", "country")
                    .attr("d", path)
            d3
                .selectAll('.country')
                ._groups[0]
                .forEach(ele => {
                    new Team(ele)
                })

    })
}
}

export default Map
    
