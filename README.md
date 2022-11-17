# 2022 World Cup Map

This [2022 world cup map](https://ethangraham43.github.io/JS_PROJECT/) provides a user the chance to see how their favorite nation's group looks on a 2d data visualization of a global map. Using D3 Geo, I developed this simple interactive map that allowed me to colorize each group by the nation's respective group. Through DOM, I was able to provide a clickable modal for each team where you can see a nation's group stage schedule and a player to watch from that country.  

## Functionality and MVPs

Easily find the nation you're looking for by hovering over the country on the map and following the black label on the bottom.



Once you've found the country you're looking for, simply click on its outline on the map and check out your teams schedule and a player to watch!
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
## Technologies, Libraries, API's, etc.

This project is be implemented with the following technologies:

-The d3 API to access the interactive map that d3 Geo provides.
-Vanilla DOM to create accessible modals and the hover function clarifying which nation you are looking at.
-Webpack to bundle and transpile the source JavaScript code.

## Implementation Timeline

## Future Implementation
