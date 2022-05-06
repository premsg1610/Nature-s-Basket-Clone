

import {appendData} from "./fetch_pg.js";

let searchData = JSON.parse(localStorage.getItem("searchData"))
console.log(searchData)



let search = () => {

    let selected = document.getElementById("input").value

    let gridBox = document.getElementById("gridBox")

    var filteredList = searchData.filter(({name}) => {
        // console.log(name)
        let value = name.split(" ")
        // console.log(value)
        // console.log(id)

            return value.includes(selected) == true
       
        })
        console.log(filteredList)
        appendData(filteredList,gridBox)


}

document.getElementById("search").addEventListener("click",search)