
import {footer} from "../components/footer.js";
let n =document.getElementById("as_footer");
n.innerHTML=footer();

import header from "../components/header.js"
document.getElementById("header").innerHTML=header()



var input=document.getElementById("btn");
input.addEventListener("keypress", function(event){
  if(event.key=="Enter"){
    event.preventDefault();
    document.getElementById("btn").click();
  }
});