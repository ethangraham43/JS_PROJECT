// const groupA = ["Qatar", "Ecuador", "Senegal", "Netherlands"]
// const groupB = ["United Kingdom", "Iran", "United States of America", "Ireland"]
// const groupC = ["Argentina", "Saudi Arabia", "Mexico", "Poland"]
// const groupD = ["France", "Australia", "Denmark", "Tunisia"]
// const groupE = ["Spain", "Costa Rica", "Germany", "Japan"]
// const groupF = ["Belgium", "Croatia", "Morocco", "Canada"]
// const groupG = ["Brazil", "Switzerland", "Serbia", "Cameroon"]
// const groupH = ["Portugal", "Ghana", "Uruguay", "South Korea"]
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

        // ele.addEventListener("click", openModal) {

        // }
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
        debugger
        // if (groupA.includes(this.name)) {
        //     d3.select(this.ele).classed("groupA", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupB.includes(this.name)) {
        //     d3.select(this.ele).classed("groupB", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupC.includes(this.name)) {
        //     d3.select(this.ele).classed("groupC", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupD.includes(this.name)) {
        //     d3.select(this.ele).classed("groupD", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupE.includes(this.name)) {
        //     d3.select(this.ele).classed("groupE", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupF.includes(this.name)) {
        //     d3.select(this.ele).classed("groupF", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupG.includes(this.name)) {
        //     d3.select(this.ele).classed("groupG", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }  
        // if (groupH.includes(this.name)) {
        //     d3.select(this.ele).classed("groupH", true)
        //     .on("mouseover", function(d) {
        //         d3.select(this.ele).classed("selected", true)
        //     })
        //     .on("mouseout", function(d) {
        //         d3.select(this.ele).classed("selected", false) 
        //     })
        // }   
    }

    
}

export default Team