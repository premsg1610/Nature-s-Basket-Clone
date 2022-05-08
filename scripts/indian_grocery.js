import header from "../components/header.js"
document.getElementById("header").innerHTML = header()

import {footer} from "../components/footer.js"
document.getElementById("AdiMainContainer").innerHTML = footer()



import {appendData2, sorting, filter_2} from "./fetch_pg.js";


// Data Colloection

let objData=[]

    function grocery(i,n,p)
    {
        this.img_url=i;
        this.name=n;
        this.price=p;
    }

    let p1 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3191b394-3787-46ee-82cf-55d13a315f82_425x425.jpg","BORGES EXT.LIVE OLIVE OIL PET 1ltr",1062.0);
    let p2 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/71368e70-875e-42b5-981b-373ee273d38b_425x425.jpg","BORGES PURE OLIVE OIL 1ltr",990)
    let p3 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300417_1_425x425.jpg","CONSCIOUS FOOD ROCK SALT 500g",62.1)
    let p4 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7aac26dd-3295-4c39-8c22-b6d8ee2d29ff_425x425.jpg","BORGES EXT.VIRGIN LIVE OLIVE OIL PET 1ltr",642)
    let p5 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0cbe7c04-2ed6-4601-879d-a22832b60baa_425x425.jpg","NATURE VALLEY OATS & HONEY",324)
    let p6 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/691c16f4-d7c3-44bf-9b13-a9bec98d6f79_425x425.jpg","Himalayan Natives A2 Gir Cow Ghee",1070)
    let p7 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5a6f0568-6ebf-4a5c-aa9b-6992930d7794_425x425.jpg","Himalayan Natives Organic Bilona Cow Ghee",399)
    let p8 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/80078d29-8a32-49fa-b98a-c17c72e99385_425x425.jpg","Himalayan Natives A2 Badri Cow Ghee",499)
    let p9 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fa3348f8-a6dd-462b-b465-3948cc03c3b3_425x425.jpg","Himalayan Natives Organic Bilona Cow Ghee",660)
    let p10 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300426_1_425x425.jpg","CONSCIOUS FOOD SESAME OIL",397)
    let p11 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/bb23e762-38c1-4d51-b9e2-a374eb31b05c_425x425.jpg","KASHMIRI PAMPORE ORGANIC SAFFRON",1100)
    let p12 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/6ac58481-3f86-4915-bcb6-c51c36c3fb93_425x425.jpg","HA A2 COW GHEE BOTTLE ",1650)
    let p13 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3373fefe-9ea6-412e-b1b6-eb66429d99b3_425x425.JPG","TRUEFARM ORGANIC HIMA PINK SALT 500 g",110)
    let p14 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/50aef4b9-74ef-44d0-b9ec-f208851e709c_425x425.jpg","ORGANIC INDIAN COCONUT OIL",725)
    let p15 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e85e7879-24bc-4f6b-b8b8-fcb511ff74b3_425x425.jpg","KAPIVA ORGANIC Ghee",649)
    let p16 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a1b8e8fb-54e0-400e-9ad1-3a3a26c62868_425x425.jpg","TROPICANA ORANGE JUICE",115)
    let p17 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7d86dd9a-b6de-439b-a883-071cda5cf8c2_425x425.jpg","KAPIVA A2 Desi Ghee ",1499)
    let p18 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/fb292a6e-987e-4d3a-9fc9-8e904b2ccf73_425x425.jpg","HIMALAYAN NTRL MINERAL WATR",65)
    let p19 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b454a0ff-b8ce-4e4a-835a-fd2d77f72e76_425x425.jpg","BARILLA BASILICO PASTA SAUCE",349)
    let p20 =new grocery("https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300425_1_425x425.jpg","CONSCIOUS FOOD COCONUT OIL",636)


  objData.push(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20)
  console.log(objData)


 

  // Calling the append function

let gridBoxBox = document.getElementById("gridBox")

appendData2(objData,gridBox)


// sorting

document.getElementById("sorting").addEventListener("change",function(){

  sorting(objData,gridBox)
})



// filter

// - based on products

let filter_product = document.getElementById("products_filter").children
console.log(filter_product)


function filter_products(){

    // console.log(this.id)

    filter_2(this.id,objData,gridBox)
    
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
      filter_2(this.id,objData,gridBox)
    }
    else{
      appendData2(objData,gridBox)
    } 
}


for(let el of filterBrand)
{
    console.log(el)
    el.addEventListener("click",filter_brands)
}



// clear all functionality

document.getElementById("clear").addEventListener("click",function(){
  appendData2(objData,gridBox)
})

