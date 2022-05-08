


import {footer} from "../components/footer.js";
let n =document.getElementById("pr_footer");
n.innerHTML=footer();

import header from "../components/header.js"
document.getElementById("header").innerHTML=header()





let timeslot=[
    {
        time:"07:00 AM TO 08:00 AM",
        colour:"#d9534f",
    },
    {
        time:"08:00 AM TO 09:00 AM",
        colour:"#5cb85c", 
    },
    {
        time:"09:00 AM TO 10:00 AM",
        colour:"#5cb85c",
    },
    {
        time:"10:00 AM TO 11:00 AM",
        colour:"#5cb85c",
    },
    {
        time:"11:00 AM TO 12:00 AM",
        colour:"#5cb85c",
    },
    {
        time:"12:00 PM TO 01:00 PM",
        colour:"#5cb85c",
    },
    {
        time:"01:00 PM TO 02:00 PM",
        colour:"#5cb85c",
    },
    {
        time:"02:00 PM TO 03:00 PM",
        colour:"#5cb85c",
    },
    {
        time:"03:00 PM TO 04:00 PM",
        colour:"#5cb85c",
    },
    {
        time:"04:00 PM TO 05:00 PM",
        colour:"#5cb85c", 
    },
    {
        time:"05:00 PM TO 06:00 PM",
        colour:"#5cb85c",
    },
    {
        time:"06:00 PM TO 07:00 PM",
        colour:"#d9534f",
    },
    {
        time:"07:00 PM TO 08:00 PM",
        colour:"#d9534f",
    },
    {
        time:"08:00 PM TO 09:00 PM",
        colour:"#d9534f",
    },
    {
        time:"09:00 PM TO 10:00 PM",
        colour:"#d9534f",
    }
];
function radio() {
    document.getElementById("slots_time").innerHTML="";
    timeslot.forEach(element => {
       let div=document.createElement("div");
       let inp=document.createElement("input");
        inp.setAttribute("type","radio");
        inp.setAttribute("name","timing");
        inp.setAttribute("id","radio_prat");

       let label=document.createElement("label");
       label.setAttribute("id","label_prat")
        label.innerText=element.time;
        div.style.backgroundColor=element.colour;
        div.style.height="45px";
        div.append(inp,label);

        document.getElementById("slots_time").append(div);
        
    });
    let getotp=document.createElement("button");
        getotp.innerText="Generate OTP"
        getotp.setAttribute=("id","Getotp");
        document.getElementById("OTP").innerHTML=""
        document.getElementById("OTP").append(getotp);
        getotp.addEventListener("click",function (){
            let city=document.getElementById("cities_list").value;
            let store=document.getElementById("store_list").value;
            let date=document.getElementById("Give_date").value;
            let mob=document.getElementById("mobile_inp").value;
            if(city.length==0){
                alert("Select cities");
            }else if(store.length==0){
                alert("Select store")
            }else if(date.length==0){
                alert("select date");
            }else if(mob.length==0){
                alert("Please give 10 digit valid mobile number");
            }else{
                let message=document.createElement("h5");
                message.innerText="Otp successfully send and valid for 3 minutes only.";
                message.style.color="green";
                let entering=document.createElement("h5");
                entering.innerText="Enter OTP:*";
                entering.style.color="brown";
                let input_otp=document.createElement("input");
                let btn=document.createElement("button");
                btn.innerText="Confirm Booking";
                btn.addEventListener("click",function (){
                    if(input_otp.value.length!=0){
                        alert("You booking slot confirmed");
                        let head=document.createElement("h2");
                        head.innerText="Your Slot Booking Confirmed";
                        head.style.color="seagreen";
                        
                        document.getElementById("OTP").innerHTML="";
                        document.getElementById("OTP").append(head);
                    }
                })
                document.getElementById("OTP").innerHTML="";
                document.getElementById("OTP").append(message,entering,input_otp,btn);
            }
        })
}
document.getElementById("store_list").addEventListener("change",radio);
function alerts(){
    console.log("clicked");
}
