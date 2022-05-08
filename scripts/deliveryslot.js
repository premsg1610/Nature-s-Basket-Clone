import {footer} from "../components/footer.js";
let n =document.getElementById("AdiMainContainer");
n.innerHTML=footer();

import header from "../components/header.js"
document.getElementById("header").innerHTML=header();

let s=document.querySelectorAll('[name="radio"]');
let values=0;
for(let i=0;i<s.length;i++){
      s[i].addEventListener("click",function(){
          for(let j=0;j<s.length;j++){
              if(j==i){
                  s[j].parentNode.style.backgroundColor='#5fAA0F';
                  values=s[j].value;
                  console.log(values);
              }else{
                  s[j].parentNode.style.backgroundColor="white";
                  
              }
          }
      }) 
};
let temp=values;
document.getElementById("proceed").addEventListener("click",selected)
function selected(){
    alert("Your have selected slot"+" "+values);
}

document.getElementById("proceed1").addEventListener("click",selected1)
function selected1(){
    alert("Your have selected slot"+" "+values);
}
