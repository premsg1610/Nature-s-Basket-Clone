
let cartData = JSON.parse(localStorage.getItem("cart")) || []

let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || []


let appendData = (data,container) =>{

    container.innerHTML = null;

    data.forEach(({name, img_url, price}) => {
        
        let box = document.createElement("div")
        box.setAttribute("id","box_pg")

        let img = document.createElement("img")
        img.src = img_url;
        img.setAttribute("id","img_pg");

        let star = document.createElement("span") 
        star.innerHTML = '<i class="fa-solid fa-star fa-lg"></i>'
        let addToWishlist = () => {
            let product = {
                img: img_url,
                name: name,
                price: price,
            };

            wishlistData.push(product)
            localStorage.setItem("wishlist",JSON.stringify(wishlistData))
        }
      star.addEventListener("click",addToWishlist)


        let time = document.createElement("p")
        time.setAttribute("id","time");
        time.innerText = "DELIVERY IN 90 MINUTES";

        let title = document.createElement("p")
        title.innerText = name;
        title.setAttribute("id","title_pg")

        let quantity = document.createElement("p")
        quantity.innerText = "500 g"
        quantity.setAttribute("id","quantity")


        let price_div = document.createElement("div")
        price_div.setAttribute("id","price_div")

        let prices = document.createElement("p")
        prices.innerText = "MRP ₹" + price;
        prices.setAttribute("id","p_pg")

        let btn = document.createElement("button")
        btn.setAttribute("id","btn_pg");
        btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+ " " + "ADD"

        let addToCart = () => {
             let product = {
                 img: img_url,
                 name: name,
                 price: price,
             };

             cartData.push(product)
             localStorage.setItem("cart",JSON.stringify(cartData))
        }
        btn.addEventListener("click",addToCart)

        price_div.append(prices,btn)
        box.append(img,star,time,title,quantity,price_div)
        container.append(box)
 


        
    });
}

let appendData2 = (data,container) =>{

    container.innerHTML = null;

    data.forEach(({name, img_url, price}) => {
        
        let box = document.createElement("div")
        box.setAttribute("id","box_pg")

        let img = document.createElement("img")
        img.src = img_url;
        img.setAttribute("id","img_pg");
        
        box.innerHTML = '<i class="fa-solid fa-star fa-lg" id="wishlist"></i>'

        let star = document.createElement("span") 
        star.innerHTML = '<i class="fa-solid fa-star fa-lg"></i>'
        let addToWishlist = () => {
            let product = {
                img: img_url,
                name: name,
                price: price,
            };

            wishlistData.push(product)
            localStorage.setItem("wishlist",JSON.stringify(wishlistData))
        }
      star.addEventListener("click",addToWishlist)


        let time = document.createElement("p")
        time.setAttribute("id","time");
        time.innerText = "DELIVERY IN 90 MINUTES";

        let title = document.createElement("p")
        title.innerText = name;
        title.setAttribute("id","title")

        let quantity = document.createElement("h4")
        quantity.innerText = "1 Pc";
        quantity.setAttribute("id","quantity")


        let price_div = document.createElement("div")
        price_div.setAttribute("id","price_div")

        let prices = document.createElement("p")
        prices.innerText = "MRP ₹" + price;
        prices.setAttribute("id","p_pg")

        let btn = document.createElement("button")
        btn.setAttribute("id","btn_pg");
        btn.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>'+ " " + "ADD"

        let addToCart = () => {
             let product = {
                 img: img_url,
                 name: name,
                 price: price,
             };

             cartData.push(product)
             localStorage.setItem("cart",JSON.stringify(cartData))
        }
        btn.addEventListener("click",addToCart)


        price_div.append(prices,btn)
        box.append(img,star,time,title,quantity,price_div)
        container.append(box)
 


        
    });
}


// sorting

let sort = (objData,container) => {
    console.log("inside sort function")

    var selected = document.getElementById("sorting").value
    console.log(selected)

    if(selected =="lth"){
        objData.sort(function(a,b){
            return a.price - b.price
        })
        console.log(objData)
        appendData(objData,container)  
    }

    if(selected =="htl"){
        objData.sort(function(a,b){
            return b.price - a.price
        })
        console.log(objData)
        appendData(objData,container)  
    }
    // if(selected == "---")
    // {
    //     console.log(objData)
    //     appendData(objData,container)  
    // }
}


// for grocery page 

let sorting = (objData,container) => {
    console.log("inside sort function")

    var selected = document.getElementById("sorting").value
    console.log(selected)
    

    if(selected =="lth"){
        objData.sort(function(a,b){
            return a.price - b.price
        })
        console.log(objData)
        appendData2(objData,container)   
    }

    if(selected =="htl"){
        objData.sort(function(a,b){
            return b.price - a.price
        })
        console.log(objData)
        appendData2(objData,container)   
    }

}




let filter = (id,objData,container) => {

    var filteredList = objData.filter(({name}) => {
    // console.log(name)
    let value = name.split(" ")
    // console.log(value)
    // console.log(id)
    
    if(id == "---" || id == "")
    {
        return objData  
    }
    else{
        return value.includes(id) == true
    }
     
    })
    console.log(filteredList)
    appendData(filteredList,container)
  }




  
let filter_2 = (id,objData,container) => {

    var filteredList = objData.filter(({name}) => {
    // console.log(name)
    let value = name.split(" ")
    // console.log(value)
    // console.log(id)
    
    if(id == "---" || id == "")
    {
        return objData  
    }
    else{
        return value.includes(id) == true
    }
     
    })
    console.log(filteredList)
    appendData2(filteredList,container)
  }

  console.log(cartData)
  console.log(wishlistData)

export {appendData,appendData2,sort,sorting,filter, filter_2}