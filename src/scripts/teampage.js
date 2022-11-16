import Team from "./team.js"
import teamData from "../teams.json";

class TeamPage {
    constructor(name) {
        this.name = name;
        console.log(teamData)
        this.getData(name)
        // this.data = this.renderTeamPage(name)
    }

    getData (name) {
        console.log(name)
        teamData.teams.forEach((team) => {
            if (team.name === name) {
                console.log(name)
                this.data = team
            }
        })
        this.renderData(this.data)
    }

    renderData(data) {
        let map = document.getElementById("map")
    }

}

export default TeamPage