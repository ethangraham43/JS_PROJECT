// import * as worldMap from "../../countries-110m.json"
// import * as groups from ".../data/groups.json"

class Map {
    constructor() {
        this.renderMap()
    }

    renderMap() {
        // debugger
        // console.log(groups)
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
                    .on("mouseover", function(d) {
                        d3.select(this).classed("selected", true)
                    })
                    .on("mouseout", function(d) {
                        d3.select(this).classed("selected", false) 
                    })
            
            d3
                .selectAll('.country')
                ._groups[0]
                .forEach(ele => {
                    if (["Qatar", "Ecuador", "Senegal", "Netherlands"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupA", true)
                    }
                    ele.addEventListener("click", function () {
                        // debugger;
                        ele.classList.add('blue');
                        // alert(ele.__data__.properties.name);
                    })
                })

            })
    }



}

export default Map
    
