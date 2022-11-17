# 2022 World Cup Map

This [2022 world cup map](https://ethangraham43.github.io/JS_PROJECT/) provides a user the chance to see how their favorite nation's group looks on a 2d data visualization of a global map. Using D3 Geo, I developed this simple interactive map that allowed me to colorize each group by the nation's respective group. Through DOM, I was able to provide a clickable modal for each team where you can see a nation's group stage schedule and a player to watch from that country.  

## Functionality and MVPs

Easily find the nation you're looking for by hovering over the country on the map and following the black label on the bottom.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/112725448/202501240-085dd767-0573-4deb-bb9c-972e4cf0c4a4.gif)


Once you've found the country you're looking for, simply click on its outline on the map and check out your teams schedule and a player to watch!

![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/112725448/202503066-89398e6c-d42a-445e-928d-1d86a88965d8.gif)

```js
        let teamName = document.getElementById("teamName");
        teamName.innerText = this.name
        let flag = document.getElementById("teamFlag");
        flag.setAttribute("src", data.flag);

        let match1 = document.getElementById("match1");
        match1.innerText = data.firstMatch[0] + "  " + data.firstMatch[1];
        let match2 = document.getElementById("match2")
        match2.innerText = data.secondMatch[0] + "  " + data.secondMatch[1];
        let match3 = document.getElementById("match3")
        match3.innerText = data.thirdMatch[0] + "  " + data.thirdMatch[1];

        let player = document.getElementById("playerName");
        player.innerText = data.player;

        let a = document.getElementById("playerPic");
        a.setAttribute("src", data.playerPicture);

        (this.modal).style.display = "block"
```
-Accessing my manually created dataset through a teampage class, I was able to create a dynamic modal for each nation. Using a helper function and an event listener, a user can access each of these modals easily on the map. 

```js
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

```

-Using d3 Geo, I was able to render a map and manipulate it to create an object of team for each nation in that map. This allowed me to further access those objects for DOM manipulation, enabling the user interaction displayed above.

## Technologies, Libraries, API's, etc.

This project is be implemented with the following technologies:

-The d3 API to access the interactive map that d3 Geo provides.
-Vanilla DOM to create accessible modals and the hover function clarifying which nation you are looking at.
-Webpack to bundle and transpile the source JavaScript code.

## Future Implementation

-Adding a more interactive modal.
-Providing the user a slider to choose past world cups and check the group layout of the past.
