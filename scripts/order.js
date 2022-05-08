// import header from "../components/header.js"
// document.getElementById("header").innerHTML=header();

import {footer} from "../components/footer.js";
let n =document.getElementById("as_footer");
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
        image.setAttribute("id", "as_img")
        image.src = el.img;

        let td2 = document.createElement("td")
        td2.innerText = el.name;

        let negBtn = document.createElement("button")
        negBtn.innerText = "-";

        let posBtn = document.createElement("button")
        posBtn.innerText = "+";

        let count = document.createElement("p")
        count.innerText = "1";

        let countDiv = document.createElement("div")
        countDiv.append(count)
        countDiv.setAttribute("id","as_countDiv")

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
        tr.append(td1, td2, td3, td4,)
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
            if (el.qty > 0) {
                el.qty -= 1
                count.innerText = el.qty

                td4.innerText = el.price * el.qty
                localStorage.setItem("cart", JSON.stringify(data))
            }
          
        }
        posBtn.onclick = () => {
            el.qty += 1
            count.innerText = el.qty
            td4.innerText = el.price * el.qty
           localStorage.setItem("cart", JSON.stringify(data))
        }
        
    })
    
}
append(data)
document.querySelector("#cart-items").textContent = data.length;

// handleNegCount = (name) => {
//     var cartData = JSON.parse(localStorage.getItem("newCart"))
//     cartData.map(e => {
//         if (e.name == name) {
//             e.qty -= 1
//             console.log(e.qty)
//         }
//     });
//     localStorage.setItem("newCart", JSON.stringify(cartData))
//     console.log(name)

// }

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

document.querySelector("#as_proceed").addEventListener("click", function () {
    window.location.href = "#"
})
document.querySelector("#as_continue").addEventListener("click", function () {
    window.location.href = "#"
})