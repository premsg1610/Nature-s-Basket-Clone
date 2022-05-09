
let cartData = JSON.parse(localStorage.getItem("cart")) || []

let wishlistData = JSON.parse(localStorage.getItem("wishlist")) || []


let appendData = (data,container) =>{

    container.innerHTML = null;

    data.forEach(({name, img_url, price}) => {
        
        let box = document.createElement("div")
        box.setAttribute("id","box_pg")

        // box.addEventListener("click",function(){
        //     window.location.href = "../description.html"
        // })

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

        // box.addEventListener("click",function(){
        //     window.location.href = "../description.html"
        // })

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
        title.setAttribute("id","title_pg")

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





// search functionality


let searchData = [

    {name: 'Apple Red Delicious - Washington', img_url: "https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/70726a6d-f35e-480c-ba42-c95e808e3ec1_425x425.jpg", price: 199.5},
    {name: 'Potato - Organic', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b69c4a59-e516-4139-bbf3-6fab3282c28d_425x425.jpg', price: 38},
    {name: 'Broccoli - Exotic', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0bc08d1f-7c0a-41ab-a37e-6430c69f932e_425x425.jpg', price: 124.5},
    {name: 'CAULIFLOWER 1 PC PK NB', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/999a14d9-d3ad-4d97-b637-813aeebfdf69_425x425.jpg', price: 39},
    {name: 'Onion', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/14c3fa54-5d8e-4238-903f-a8ef58132879_425x425.JPG', price: 17.5},
    {name: 'Tomato', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4ecd12c-b2db-4f76-b9ea-45e0436ba350_425x425.JPG', price: 24.5},
    {name: 'Cabbage', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d51a997-87be-45f4-a85e-72d07279b3c7_425x425.JPG', price: 39},
    {name: 'Dragon Fruit', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d85cf7ec-4eb3-4f45-a7da-b94bb315b9d2_425x425.jpg', price: 149.5},
    {name: 'Apple Green', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fb35012c-ed68-4553-af94-b44c35ed8586_425x425.jpg', price: 199.5},
    {name: 'HA WALNUT WHOLE 500G', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d450a015-e560-4a40-9876-9db2f6813566_425x425.JPG', price: 789},
    {name: 'Banana Golden', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/de0cd3e5-eefd-4b56-9ec1-503a5db10333_425x425.JPG', price: 34.5},
    {name: 'Capsicum Red - Exotic', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d2997a37-3110-4772-ba27-9a7dda289e90_425x425.jpg', price: 199.5},
    {name: 'Pomegranate', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/639006d2-1a80-411f-b5ac-c4a457839907_425x425.JPG', price: 149.5},
    {name: 'MELON WATER KIRAN', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/38c287cf-0d6d-47c5-9c31-80bd68b44dc0_425x425.jpg', price: 30},
    {name: 'Tangerine', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bb52d3f8-0cc1-4afc-a738-a6fdafae7c91_425x425.JPG', price: 114.5},
    {name: 'Guava - Imported', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22b5adc9-ced2-48cd-ad9b-e2e20bfd664a_425x425.JPG', price: 349.5},
    {name: 'Baby Potato', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f2a1c874-b9e9-43a0-9062-17c7a110dfb0_425x425.jpg', price: 19.5},
    {name: 'MANGO BADAMI NB', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b4703da0-b787-4446-9070-b44f5e23a597_425x425.jpg', price: 99.5},
    {name: 'Grapes Red Globe - Imported', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f341c972-bc85-4b0d-8309-6bdaa4fd0cad_425x425.JPG', price: 399.5},
    {name: 'Pineapple', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ea997b9-efca-415c-951d-c315c177acb8_425x425.JPG', price: 49.5},



    {name: 'NATURE VLY CRU GRA BAR RST ALMD 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e8042587-6211-4304-b8e3-c681a5ea90cb_425x425.jpg', price: 324},
    {name: 'KAPIVA A2 DESI GHEE 500G - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7d86dd9a-b6de-439b-a883-071cda5cf8c2_425x425.jpg', price: 1499},
    {name: 'NATURES PISTA 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d20f2cb-b76d-4658-8922-993cf0ad9b4e_425x425.jpg', price: 699},
    {name: 'HA PREMIUM SAUDI DATES 500G - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/114bf967-c319-4c20-88cb-95c4472816b7_425x425.jpg', price: 669},
    {name: 'HELTHY ALTERNATIVE DATES SAUDI 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/92675465-bfaa-4f15-9e1d-f6ea5fa99d79_425x425.jpg', price: 429},
    {name: 'HOME DELITE FLAXSEED BHAKARWADI 500G - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cdbc52b1-17a7-4286-85f5-d7054cdf420b_425x425.jpg', price: 195},
    {name: 'HA PERUVIAN QUINOA WHITE 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b2cdd121-4dd7-48f1-b8f7-96869396a477_425x425.jpg', price: 450},
    {name: 'CONSCIOUS FOOD YELLOW MUNG DAL 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300416_1_425x425.jpg', price: 135},
    {name: 'ILLY COFFEE BEANS TIN 500GM - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/61f3c47a-88e9-4fa9-9f07-d5ae20361882_425x425.jpg', price: 1500},
    {name: 'AASHIRVAAD ATTA WHOLE WHEAT 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0aab4815-e06f-438f-807f-1505ff434347_425x425.jpg', price: 256},
    {name: 'NATURES KISMIS - RAISIN BLACK 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eda9e8bb-9f15-4f04-adc1-3e6306df38ec_425x425.JPG', price: 269},
    {name: 'NATURES PEANUTS 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/72273769-e26b-472e-8717-f23a8bd3cce9_425x425.jpg', price: 109},
    {name: 'NATURES CASHEW W240 500G - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1cc978b0-a2a2-49bf-bc66-589cd9fef871_425x425.JPG', price: 969},
    {name: 'CONSCIOUS FOOD ROCK SALT 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300417_1_425x425.jpg', price: 62.1},
    {name: 'DAAWAT SUPER BASMATI RICE 500g- 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/60ea2ed6-9517-4389-b407-4515a738eb42_425x425.jpg', price: 185},
    {name: 'DAAWAT TRADITIONAL BASMATI RICE 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f954cb4-6f9b-4039-918d-23954f195835_425x425.jpg', price: 215},
    {name: 'ORGANIC INDIA QUINOA 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2c42b97a-68ba-47f7-8b8e-db4f697ac60c_425x425.jpg', price: 295},
    {name: 'HELTHY ALTERNATIVE DATES MEDJOUL 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a9fa6478-d622-4d0b-8eae-3f326d72209a_425x425.jpg', price: 669},
    {name: 'HA QUINOA FLOUR 500g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/abcfc417-9a18-443a-992d-96b6b7cc4010_425x425.jpg', price: 575},
    {name: 'HA WALNUT KERNEL 250g - 1 Pc', img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5ace535c-2a41-44d2-8a3f-550da07377c4_425x425.JPG', price: 799},


    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3191b394-3787-46ee-82cf-55d13a315f82_425x425.jpg', name: 'BORGES EXT.LIVE OLIVE OIL PET 1ltr', price: 1062},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/71368e70-875e-42b5-981b-373ee273d38b_425x425.jpg', name: 'BORGES PURE OLIVE OIL 1ltr', price: 990},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300417_1_425x425.jpg', name: 'CONSCIOUS FOOD ROCK SALT 500g', price: 62.1},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7aac26dd-3295-4c39-8c22-b6d8ee2d29ff_425x425.jpg', name: 'BORGES EXT.VIRGIN LIVE OLIVE OIL PET 1ltr', price: 642},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0cbe7c04-2ed6-4601-879d-a22832b60baa_425x425.jpg', name: 'NATURE VALLEY OATS & HONEY', price: 324},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/691c16f4-d7c3-44bf-9b13-a9bec98d6f79_425x425.jpg', name: 'Himalayan Natives A2 Gir Cow Ghee', price: 1070},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5a6f0568-6ebf-4a5c-aa9b-6992930d7794_425x425.jpg', name: 'Himalayan Natives Organic Bilona Cow Ghee', price: 399},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/80078d29-8a32-49fa-b98a-c17c72e99385_425x425.jpg', name: 'Himalayan Natives A2 Badri Cow Ghee', price: 499},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fa3348f8-a6dd-462b-b465-3948cc03c3b3_425x425.jpg', name: 'Himalayan Natives Organic Bilona Cow Ghee', price: 660},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300426_1_425x425.jpg', name: 'CONSCIOUS FOOD SESAME OIL', price: 397},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bb23e762-38c1-4d51-b9e2-a374eb31b05c_425x425.jpg', name: 'KASHMIRI PAMPORE ORGANIC SAFFRON', price: 1100},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ac58481-3f86-4915-bcb6-c51c36c3fb93_425x425.jpg', name: 'HA A2 COW GHEE BOTTLE', price: 1650},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3373fefe-9ea6-412e-b1b6-eb66429d99b3_425x425.JPG', name: 'TRUEFARM ORGANIC HIMA PINK SALT 500 g', price: 110},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/50aef4b9-74ef-44d0-b9ec-f208851e709c_425x425.jpg', name: 'ORGANIC INDIAN COCONUT OIL', price: 725},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e85e7879-24bc-4f6b-b8b8-fcb511ff74b3_425x425.jpg', name: 'KAPIVA ORGANIC Ghee', price: 649},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a1b8e8fb-54e0-400e-9ad1-3a3a26c62868_425x425.jpg', name: 'TROPICANA ORANGE JUICE', price: 115},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7d86dd9a-b6de-439b-a883-071cda5cf8c2_425x425.jpg', name: 'KAPIVA A2 Desi Ghee', price: 1499},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fb292a6e-987e-4d3a-9fc9-8e904b2ccf73_425x425.jpg', name: 'HIMALAYAN NTRL MINERAL WATR', price: 65},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b454a0ff-b8ce-4e4a-835a-fd2d77f72e76_425x425.jpg', name: 'BARILLA BASILICO PASTA SAUCE', price: 349},
    {img_url: 'https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300425_1_425x425.jpg', name: 'CONSCIOUS FOOD COCONUT OIL', price: 636},
]

let search = (selected) => {

    // window.location.href = "searchBar_pg.html" 
    let searchedList = searchData.filter(({name}) => {
        // console.log(name)
        let value = name.split(" ")
        // console.log(value).
        console.log(selected)

        return value.includes(selected) == true
       
     })
        console.log(searchedList)
        // appendData(searchedList,gridBox)
        localStorage.setItem("searched",JSON.stringify(searchedList))

}







export {appendData, appendData2, sort, sorting, filter, filter_2, search}