import {footer} from "../components/footer.js";
let n =document.getElementById("AdiMainContainer");
n.innerHTML=footer();

import header from "../components/header.js"
document.getElementById("header").innerHTML=header();

import {appendData,search} from "./fetch_pg.js";

let cartItem_s = JSON.parse(localStorage.getItem("cart"))
// console.log(cartItem_s.length)
let num = document.getElementById("s-item")
num.innerText = cartItem_s.length
// console.log(num.innerText)


// var swiper = new Swiper('.swiper-container', {
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//       loop: true,
//       // loopFillGroupWithBlank: 'true',
//     },
//   });

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper-fluild", {
  slidesPerView: 5,
  spaceBetween: 0,
  slidesPerGroup: 5,
  loop: true,
  loopFillGroupWithBlank: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



