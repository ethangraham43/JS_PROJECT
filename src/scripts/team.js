import TeamPage from "./teampage"

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
        // debugger
        ele.addEventListener("click", this.openTeamPage.bind(this)) 


        
        // this.selectFunction()
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

    // selectFunction() {
    //     // debugger
    //     .on("mouseover", function(d) {
    //         d3.select(this.ele).classed("selected", true)
    //         })
    //     .on("mouseout", function(d) {
    //         d3.select(this.ele).classed("selected", false)
    //     })
    // }
    
}

export default Team