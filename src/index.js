// // import Example from "./scripts/example";
import Map from "./scripts/map.js"
import Team from "./scripts/team.js"
import TeamPage from "./scripts/teampage.js"

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    // new Team(main);
    new TeamPage(main)
    new Map()
});

// document.getElementByID.addEventListener()

// d3.on("mouseover", function(d) {
//     d3.select(this.ele).classed("selected", true)
// })
// d3.on("mouseout", function(d) {
//     d3.select(this.ele).classed("selected", false) 
// })




