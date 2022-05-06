let data =[
    {
        name:"Pallavee",
        imageUrl:"https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_designers_slot2_cultgaia.jpg",
        qty:3,
        price:200
    },
    {
        name:"Shipra",
        imageUrl:"https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_designers_slot1_NiliLotan.jpg",
        qty:2,
        price:100
    }
]
let append=(data)=>
{
data.map((el)=>
{
    
    let div=document.createElement("div")
    div.setAttribute("class","pr_div")

    let name=document.createElement("p")
    name.innerText=el.name;

    let image=document.createElement("img")
    image.src=el.imageUrl;

    let qty=document.createElement("p")
    qty.innerText=el.qty;

    let price=document.createElement("p")
    price.innerText=el.price;

    div.append(name,image,qty,price)
    document.getElementById("container").append(div)
})
}
append(data)

let counter;

if(localStorage.getItem("counter")==null)
{
    counter=0;
}
else{
    counter=localStorage.getItem("counter");
}

document.querySelector("#h1").innerText=counter;

document.querySelector("#inc").addEventListener("click",increment);
document.querySelector("#dec").addEventListener("click",decrement);

function increment()
{
   counter++;
   localStorage.setItem("counter",counter);
   document.querySelector("#h1").innerText=counter;
}



function decrement()
{
    if(counter>0)
    {
    counter--;
    localStorage.setItem("counter",counter);
    document.querySelector("#h1").innerText=counter;
    }
    else{
        counter=0;
        localStorage.setItem("counter",counter);
        document.querySelector("#h1").innerText=counter;

    }
}
