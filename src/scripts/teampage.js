import teamData from "../teams.json";

class TeamPage {
    constructor(name) {
        this.name = name;
     
        this.modal = document.getElementById("teampage");
        let span = document.getElementsByClassName("close")[0]
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
        if (this.name === "United Kingdom") {
            this.name = "England"
        }
        if (this.name === "Ireland") {
            this.name = "Wales"
        }
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
        
    }

}

export default TeamPage