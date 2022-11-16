import Team from "./team.js"
import teamData from "../teams.json";

class TeamPage {
    constructor(name) {
        this.name = name;
     
        this.modal = document.getElementById("teampage");
        let span = document.getElementsByClassName("close")[0]
        // window.onclick = function(event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }
        this.getData(name)
        this.renderData(this.data)
        span.addEventListener("click", () => {
            this.modal.style.display = "none"
        })
    }

    getData (name) {
        teamData.teams.forEach((team) => {
            if (team.name === name) {
                this.data = team
            }
        })
    }

    renderData(data) {
        console.log(data)
        let teamName = document.getElementById("teamName");
        teamName.innerText = data.name
        let match1 = document.getElementById("match1");
        // debugger;
        match1.innerText = data.firstMatch[0] + "  " + data.firstMatch[1];
        let match2 = document.getElementById("match2")
        match2.innerText = data.secondMatch[0] + "  " + data.secondMatch[1];
        let match3 = document.getElementById("match3")
        match3.innerText = data.thirdMatch[0] + "  " + data.thirdMatch[1];
        // let map = document.getElementById("map")
        // const modal = document.getElementById("teampage");
        let player = document.getElementById("playerName");
        player.innerText = data.player;

        // let data = document.getElementById("teampage").innerText;
        
        // document.getElementById("match1") = data.firstMatch
        (this.modal).style.display = "block"
        
    }

}

export default TeamPage