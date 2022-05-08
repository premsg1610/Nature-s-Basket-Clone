
import header from "../components/header.js"
document.getElementById("header").innerHTML = header()

import {footer} from "../components/footer.js"
document.getElementById("AdiMainContainer").innerHTML = footer()



import {appendData, sort, filter} from "./fetch_pg.js";


// Data Collection

let objData = []

function healthData (n,i,p){
this.name=n;
this.img_url=i;
this.price=p;
}

const p1 =new healthData('NATURE VLY CRU GRA BAR RST ALMD 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/e8042587-6211-4304-b8e3-c681a5ea90cb_425x425.jpg',324);
const p2=new healthData('KAPIVA A2 DESI GHEE 500G - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/7d86dd9a-b6de-439b-a883-071cda5cf8c2_425x425.jpg',1499);
const p3 =new healthData ('NATURES PISTA 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/4d20f2cb-b76d-4658-8922-993cf0ad9b4e_425x425.jpg',699);
const p4 =new healthData ('HA PREMIUM SAUDI DATES 500G - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/114bf967-c319-4c20-88cb-95c4472816b7_425x425.jpg',669);
const p5 =new healthData('HELTHY ALTERNATIVE DATES SAUDI 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/92675465-bfaa-4f15-9e1d-f6ea5fa99d79_425x425.jpg',429);
const p6 =new healthData('HOME DELITE FLAXSEED BHAKARWADI 500G - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/cdbc52b1-17a7-4286-85f5-d7054cdf420b_425x425.jpg',195);
const p7 =new healthData('HA PERUVIAN QUINOA WHITE 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/b2cdd121-4dd7-48f1-b8f7-96869396a477_425x425.jpg',450);
const p8 =new healthData('CONSCIOUS FOOD YELLOW MUNG DAL 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300416_1_425x425.jpg',135);
const p9 =new healthData('ILLY COFFEE BEANS TIN 500GM - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/61f3c47a-88e9-4fa9-9f07-d5ae20361882_425x425.jpg',1500);
const p10 =new healthData('AASHIRVAAD ATTA WHOLE WHEAT 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/0aab4815-e06f-438f-807f-1505ff434347_425x425.jpg',256);
const p11 =new healthData('NATURES KISMIS - RAISIN BLACK 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/eda9e8bb-9f15-4f04-adc1-3e6306df38ec_425x425.JPG',269);
const p12 =new healthData('NATURES PEANUTS 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/72273769-e26b-472e-8717-f23a8bd3cce9_425x425.jpg',109);
const p13 =new healthData('NATURES CASHEW W240 500G - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1cc978b0-a2a2-49bf-bc66-589cd9fef871_425x425.JPG',969);
const p14 =new healthData('CONSCIOUS FOOD ROCK SALT 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/1300417_1_425x425.jpg',62.1);
const p15 =new healthData('DAAWAT SUPER BASMATI RICE 500g- 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/60ea2ed6-9517-4389-b407-4515a738eb42_425x425.jpg',185);
const p16 =new healthData('DAAWAT TRADITIONAL BASMATI RICE 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/3f954cb4-6f9b-4039-918d-23954f195835_425x425.jpg',215);
const p17 =new healthData('ORGANIC INDIA QUINOA 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2c42b97a-68ba-47f7-8b8e-db4f697ac60c_425x425.jpg',295);
const p18 =new healthData('HELTHY ALTERNATIVE DATES MEDJOUL 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/a9fa6478-d622-4d0b-8eae-3f326d72209a_425x425.jpg',669);
const p19 =new healthData('HA QUINOA FLOUR 500g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/abcfc417-9a18-443a-992d-96b6b7cc4010_425x425.jpg',575);
const p20 =new healthData('HA WALNUT KERNEL 250g - 1 Pc','https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/5ace535c-2a41-44d2-8a3f-550da07377c4_425x425.JPG',799);




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



