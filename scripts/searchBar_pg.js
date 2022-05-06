

import {appendData,search} from "./fetch_pg.js";


let searchResult = JSON.parse(localStorage.getItem("searched"))

let gridBox = document.getElementById("gridBox")

if(searchResult.length == 0)
{
    alert("Product not available")
    window.location.href = "fruits&veg.html"
}
else{
    appendData(searchResult,gridBox)
}
   




let searchProduct = (e) => {

    let selected = document.getElementById("input").value

        let gridBox = document.getElementById("gridBox")

        if(e.key == "Enter")
        {
            search(selected)
        }
}

document.getElementById("input").addEventListener("keydown",searchProduct)



// document.getElementById("search").addEventListener("click",search)