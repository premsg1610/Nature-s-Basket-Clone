import header from "../components/header.js";

document.getElementById("header").innerHTML = header();

let shopByCat= document.getElementById("s-cat")
shopByCat.addEventListener("mouseover", showDiv);

let container = document.getElementById("s-container")
function showDiv(e){
    e.stopPropagation()
   // console.log(e)
container.removeAttribute("hidden");
}
document.body.addEventListener("click", ()=>{
container.setAttribute("hidden", true)
})

