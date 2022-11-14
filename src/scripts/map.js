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
                    if (["Qatar", "Ecuador", "Senegal", "Netherlands"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupA", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["United Kingdom", "Iran", "United States of America", "Ireland"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupB", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["Argentina", "Saudi Arabia", "Mexico", "Poland"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupC", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["France", "Australia", "Denmark", "Tunisia"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupD", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["Spain", "Costa Rica", "Germany", "Japan"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupE", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["Belgium", "Croatia", "Morocco", "Canada"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupF", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["Brazil", "Switzerland", "Serbia", "Cameroon"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupG", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    if (["Portugal", "Ghana", "Uruguay", "South Korea"].includes(ele.__data__.properties.name)) {
                        d3.select(ele).classed("groupH", true)
                        .on("mouseover", function(d) {
                            d3.select(this).classed("selected", true)
                        })
                        .on("mouseout", function(d) {
                            d3.select(this).classed("selected", false) 
                        })
                    }
                    ele.addEventListener("click", function () {
                        ele.classList.add('blue');
                        alert(ele.__data__.properties.name);
                    })
                })

            })
    }
}

export default Map
    
