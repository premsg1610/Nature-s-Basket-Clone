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
        const cartData = JSON.parse(localStorage.getItem("cart"))
        const currentCartEl = cartData.find(product=> product.name === el.name )
        currentCartEl.qty = 1;
        localStorage.setItem("cart", JSON.stringify(cartData))


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
            calculateSubTotal()
            window.location.reload()

        }
        

        negBtn.onclick = () => {
            if (count.innerText > 0) {
                var  newQty = Number(count.innerText) -1;
                count.innerText = newQty;
             
                td4.innerText = el.price * newQty;
                const cartData = JSON.parse(localStorage.getItem("cart"))
                const currentCartEl = cartData.find(product=> product.name === el.name )
                currentCartEl.qty = newQty;
                localStorage.setItem("cart", JSON.stringify(cartData))
                calculateSubTotal(cartData);
            }
          
        }
        posBtn.onclick = () => {
            var  newQty = Number(count.innerText) +1;
            count.innerText = newQty;
         
            td4.innerText = el.price * newQty;
            const cartData = JSON.parse(localStorage.getItem("cart"))
            const currentCartEl = cartData.find(product=> product.name === el.name )
            currentCartEl.qty = newQty;
            localStorage.setItem("cart", JSON.stringify(cartData))
            calculateSubTotal(cartData);
        }
        
    })
}
append(data)
document.querySelector("#cart-items").textContent = data.length;



document.querySelector("#promo").addEventListener("click", applypromo)
function applypromo() {
    let code = document.querySelector("#promoCode").value;
    let subTotal =  Number(document.querySelector("#sub-total").textContent.slice(3));
    if (code == "NB50") {
        let total = subTotal - subTotal * 0.5 + 50;
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

function calculateSubTotal(cartData) {
    var sum = 0;
    const dataToProcess = cartData || data
    for (const product of dataToProcess) {
        // sum = sum + product.price*(product.qty || 1);
        if(product.qty==0)
        {
            sum=0;
        }
        else{
            sum = sum + product.price*(product.qty || 1);
        }
    }

console.log(sum)
document.querySelector("#sub-total").textContent = `Rs ${sum}`

var total = sum + 50;
document.querySelector("#total").textContent = `Rs ${total}`;
}

calculateSubTotal()