import Team from "./team.js"
import * as data from "../teams.json"

class TeamPage {
    constructor(ele) {
        this.ele = ele;
        this.name = data.name
        this.addEventListener("click", this.renderTeamPage(this))
    }

    renderTeamPage () {
        
    }

}

export default TeamPage