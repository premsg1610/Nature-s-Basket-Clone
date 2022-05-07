// import header from "../components/header.js"
// document.getElementById("header").innerHTML=header();

import {footer} from "../components/footer.js";
let n =document.getElementById("pr_footer");
n.innerHTML=footer();

import header from "../components/header.js"
document.getElementById("header").innerHTML=header()



let data = JSON.parse(localStorage.getItem("cart"))
console.log(data)



function append(data) {
 

    data.map(function (el) {



        let table = document.createElement("table")
        table.setAttribute("id", "tb")

        let tr = document.createElement("tr")

        let td1 = document.createElement("td")

        let image = document.createElement("img")
        image.setAttribute("id", "pr_img")
        image.src = el.img;

        let td2 = document.createElement("td")
        td2.innerText = el.name;

        let negBtn = document.createElement("button")
        negBtn.innerText = "-";

        let posBtn = document.createElement("button")
        posBtn.innerText = "+";
       
        let count = document.createElement("p")
        count.innerText = 1;

        let countDiv = document.createElement("div")
        countDiv.append(negBtn, count, posBtn)
        countDiv.setAttribute("id","pr_countDiv")

        let td3 = document.createElement("td")
        td3.append(countDiv)

        let td4 = document.createElement("td")
        td4.innerText = el.price;

        let rmvbtn=document.createElement("button")
         rmvbtn.innerText="Remove"
         rmvbtn.setAttribute("id","remove")

        let hr = document.createElement("hr")
        hr.setAttribute("class", "header")

        td1.append(image)
        tr.append(td1, td2, td3, td4,rmvbtn)
        table.append(tr)
        document.querySelector("#container").append(table, hr)





        var target=0;

        rmvbtn.onclick=function(e)
        {
            target=el;
            el=data[data.length-1]
            data[data.length-1]=target;
            data.pop()
            localStorage.setItem("cart",JSON.stringify(data))
            e.currentTarget.parentNode.remove()
            window.location.reload()

        }
        

        negBtn.onclick = () => {
            if (count.innerText > 0) {
                count.innerText = +(count.innerText)-1;
              

                td4.innerText = el.price *  count.innerText;
                localStorage.setItem("cart", JSON.stringify(data))
            }
          
        }
        posBtn.onclick = () => {
            count.innerText = +(count.innerText)+1;
         
            td4.innerText = el.price * count.innerText
           localStorage.setItem("cart", JSON.stringify(data))
        }
        
    })
}
append(data)
document.querySelector("#cart-items").textContent = data.length;

var sum = 0;
for (var i = 0; i < data.length; i++) {
    sum = sum + data[i].price;
}










console.log(sum)
document.querySelector("#sub-total").textContent = `Rs ${sum}`

var total = sum + 50;
document.querySelector("#total").textContent = `Rs ${total}`;

document.querySelector("#promo").addEventListener("click", applypromo)
function applypromo() {
    let code = document.querySelector("#promoCode").value;
    if (code == "NB50") {
        total = total - total * 0.5;
        document.querySelector("#discount").textContent = "50%"
        document.querySelector("#total").textContent = `Rs ${total}`;
    }
}

document.querySelector("#pr_proceed").addEventListener("click", function () {
    window.location.href = "#"
})
document.querySelector("#pr_continue").addEventListener("click", function () {
    window.location.href = "#"
})