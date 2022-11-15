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

        // this.addEventListener("click", openTeamPage) {

        // }
        for (let key in groups) {
            let countryArray = groups[key]
            if (countryArray.includes(this.name)) {
                this.group = key
                this.addGroup()
            }
        }

        this.ele.addEventListener("mouseover", function(d) {
            d3.select(this.ele).classed("selected", true)
            })
        this.ele.addEventListener("mouseout", function(d) {
            d3.select(this.ele).classed("selected", false)
        })
    }

    addGroup() {
        d3.select(this.ele).classed(this.group, true)
    }
    
}

export default Team