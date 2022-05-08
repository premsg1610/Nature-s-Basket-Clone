import header from "../components/header.js"
document.getElementById("header").innerHTML = header()


import {footer} from "../components/footer.js"
document.getElementById("AdiMainContainer").innerHTML = footer()


import {appendData, sort, filter,search} from "./fetch_pg.js";



// Data Collection

let  objData = []

function Products(n,i,p){

    this.name = n;
    this.img_url = i;
    this.price = p;
}

let p1 = new Products("Apple Red Delicious - Washington","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/70726a6d-f35e-480c-ba42-c95e808e3ec1_425x425.jpg",199.50)

let p2 = new Products("Potato - Organic","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b69c4a59-e516-4139-bbf3-6fab3282c28d_425x425.jpg",38)

let p3 = new Products("Broccoli - Exotic","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0bc08d1f-7c0a-41ab-a37e-6430c69f932e_425x425.jpg",124.50)

let p4 = new Products("CAULIFLOWER 1 PC PK NB","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/999a14d9-d3ad-4d97-b637-813aeebfdf69_425x425.jpg",39)

let p5 = new Products("Onion","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/14c3fa54-5d8e-4238-903f-a8ef58132879_425x425.JPG",17.50)

let p6 = new Products("Tomato","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e4ecd12c-b2db-4f76-b9ea-45e0436ba350_425x425.JPG",24.50)

let p7 = new Products("Cabbage","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d51a997-87be-45f4-a85e-72d07279b3c7_425x425.JPG",39)

let p8 = new Products("Dragon Fruit","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d85cf7ec-4eb3-4f45-a7da-b94bb315b9d2_425x425.jpg",149.50)

let p9 = new Products("Apple Green","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fb35012c-ed68-4553-af94-b44c35ed8586_425x425.jpg",199.5)

let p10 = new Products("HA WALNUT WHOLE 500G","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d450a015-e560-4a40-9876-9db2f6813566_425x425.JPG",789)

let p11 = new Products("Banana Golden","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/de0cd3e5-eefd-4b56-9ec1-503a5db10333_425x425.JPG",34.50)

let p12 = new Products("Capsicum Red - Exotic","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/d2997a37-3110-4772-ba27-9a7dda289e90_425x425.jpg",199.50)

let p13 = new Products("Pomegranate","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/639006d2-1a80-411f-b5ac-c4a457839907_425x425.JPG",149.50)

let p14 = new Products("MELON WATER KIRAN","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/38c287cf-0d6d-47c5-9c31-80bd68b44dc0_425x425.jpg",30)

let p15 = new Products("Tangerine","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bb52d3f8-0cc1-4afc-a738-a6fdafae7c91_425x425.JPG",114.50)

let p16 = new Products("Guava - Imported","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/22b5adc9-ced2-48cd-ad9b-e2e20bfd664a_425x425.JPG",349.50)

let p17 = new Products("Baby Potato","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f2a1c874-b9e9-43a0-9062-17c7a110dfb0_425x425.jpg",19.50)

let p18 = new Products("MANGO BADAMI NB","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b4703da0-b787-4446-9070-b44f5e23a597_425x425.jpg",99.50)

let p19 = new Products("Grapes Red Globe - Imported","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/f341c972-bc85-4b0d-8309-6bdaa4fd0cad_425x425.JPG",399.50)

let p20 = new Products("Pineapple","https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ea997b9-efca-415c-951d-c315c177acb8_425x425.JPG",49.5)



objData.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20)

console.log(objData)




// Calling the append function

let gridBoxBox = document.getElementById("gridBox")

appendData(objData,gridBox)




// sorting

document.getElementById("sorting").addEventListener("change",function(){

    sort(objData,gridBox)
  })





// filter

// - based on product

let filter_product = document.getElementById("products_filter").children
console.log(filter_product)


function filter_products(){

    // console.log(this.id)

    filter(this.id,objData,gridBox)
    
}


for(let el of filter_product)
{
    console.log(el)
    el.addEventListener("click",filter_products)
}



// - based on brands

let filterBrand = document.getElementById("brands_filter").children
console.log(filterBrand)


function filter_brands(){

    // console.log(this.id)
    // console.log(document.getElementById(this.id).checked)

    if(document.getElementById(this.id).checked == true)
    {
      filter(this.id,objData,gridBox)
    }
    else{
      appendData(objData,gridBox)
    } 
}

for(let el of filterBrand)
{
    console.log(el)
    el.addEventListener("click",filter_brands)
}



// clear all functionality

document.getElementById("clear").addEventListener("click",function(){
    appendData(objData,gridBox)
  })






// Search Functionality

  
// import {search,appendData} from "./fetch_pg.js";


// let searchResult = JSON.parse(localStorage.getItem("searched"))



// let searchProduct = (e) => {

//     let selected = document.getElementById("input").value

//         // let gridBox = document.getElementById("gridBox")
// console.log(selected)
//         if(e.key == "Enter")
//         {
//             search(selected)

//             let gridBox = document.getElementById("gridBox")
//             appendData(searchResult,gridBox)

//         }
// }

// document.getElementById("input").addEventListener("keydown",searchProduct)
