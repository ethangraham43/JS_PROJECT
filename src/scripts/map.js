class Map{
    width = 900;
    height = 600;

    svg = d3.select('body').append('svg').attr('width', width).attr('height', height);

    projection = d3.geoMercator();
    path = d3.geopath(projection);

    g = svg.append('g');
    renderMap() {
        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json')
        .then(data => {
        
        const countries = topojson.feature(data, data.objects.countries);
        g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', path);

        });
    }
}

export default Map;