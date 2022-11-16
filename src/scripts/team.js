import TeamPage from "./teampage"
import teamData from "../teams.json";

const groups = {"groupA": ["Qatar", "Ecuador", "Senegal", "Netherlands"],
"groupB": ["United Kingdom", "Iran", "United States of America", "Ireland"],
"groupC": ["Argentina", "Saudi Arabia", "Mexico", "Poland"],
"groupD": ["France", "Australia", "Denmark", "Tunisia"],
"groupE": ["Spain", "Costa Rica", "Germany", "Japan"],
"groupF": ["Belgium", "Croatia", "Morocco", "Canada"],
"groupG": ["Brazil", "Switzerland", "Serbia", "Cameroon"],
"groupH": ["Portugal", "Ghana", "Uruguay", "South Korea"]
}

class Team {
    constructor(ele) {
        this.ele = ele
        this.name = ele.__data__.properties.name
        ele.addEventListener("click", this.openTeamPage.bind(this)) 
        teamData.teams.forEach((country) =>{
            if (this.name === country.name) {
                ele.addEventListener('mouseover', () => {
                    // debugger;
                    let country = document.getElementById("hoverName");
                    country.innerText = this.name
                });
            }
        })

        for (let key in groups) {
            let countryArray = groups[key]
            if (countryArray.includes(this.name)) {
                this.group = key
                this.addGroup()
            }
        }
    }

    addGroup() {
        d3.select(this.ele).classed(this.group, true)
    }

    openTeamPage() {
        new TeamPage(this.name)
    }
    
}

export default Team