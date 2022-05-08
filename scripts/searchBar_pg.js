

import header from "../components/header.js"
document.getElementById("header").innerHTML = header()


import {footer} from "../components/footer.js"
document.getElementById("AdiMainContainer").innerHTML = footer()


import {appendData,search} from "./fetch_pg.js";


let searchResult = JSON.parse(localStorage.getItem("searched"))

let gridBox = document.getElementById("gridBox")

if(searchResult.length == 0)
{
    alert("Product not available")
    // window.location.href = "index.html"
}
else{
    appendData(searchResult,gridBox)
}
   




let searchProduct = (e) => {

    e.preventDefault()
    let selected = document.getElementById("input").value

        // let gridBox = document.getElementById("gridBox")

        // if(e.key == "Enter")
        // {
            search(selected)
        // }
}

document.querySelector(". d-flex").addEventListener("submit",searchProduct)



// document.getElementById("search").addEventListener("click",search)