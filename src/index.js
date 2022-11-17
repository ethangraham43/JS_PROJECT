// // import Example from "./scripts/example";
import Map from "./scripts/map.js"
import Team from "./scripts/team.js"
import TeamPage from "./scripts/teampage.js"

document.addEventListener("DOMContentLoaded", () => {
    new Map()
    const instModal = document.getElementById("instModal");
    let instSpan = document.getElementsByClassName("instClose")[0];
    instSpan.addEventListener("click", () => {
        instModal.style.display = "none"
    })
    let instOpen = document.getElementsByClassName("instOpen")[0];
    instOpen.addEventListener("click", () => {
        instModal.style.display = "block"
    })
});




