import {footer} from "../components/footer.js";
let n =document.getElementById("pr_footer");
n.innerHTML=footer();

import header from "../components/header.js"
document.getElementById("header").innerHTML=header()


let wishlistdata = JSON.parse(localStorage.getItem("wishlist"))
let cartdata = JSON.parse(localStorage.getItem("cart"))||[]

console.log(wishlistdata)


function wishappend(wishlistdata)
{
    wishlistdata.map(function(el)
    {
        
        let table = document.createElement("table")
        table.setAttribute("id", "wishtb")

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")

        let image = document.createElement("img")
        image.setAttribute("id", "wh_img")
        image.src = el.img;

        let td2 = document.createElement("td")
        td2.innerText = el.name;

     
        
   

        let td3 = document.createElement("td")
        td3.innerText = `Rs ${el.price}`

        let td4 = document.createElement("td")

        let btn=document.createElement("button")
        btn.innerText="Add";
        btn.setAttribute("id","add")
        btn.addEventListener("click",function()
        {
            wishlist(el)
        })
        
td4.append(btn)
        td1.append(image)
        tr.append(td1, td2, td3,td4)
        table.append(tr)
        document.querySelector("#wishlistcontainer").append(table)
    })
    
}
wishappend(wishlistdata)


function wishlist(el){
    cartdata.push(el)
    localStorage.setItem("cart",JSON.stringify(cartdata))
    alert("item added to cart")
    
}