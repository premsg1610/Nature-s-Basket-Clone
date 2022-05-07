timeslot=[
    {
        time:"07:00 AM TO 08:00 AM",
        colour:"red",
    },
    {
        time:"08:00 AM TO 09:00 AM",
        colour:"green", 
    },
    {
        time:"09:00 AM TO 10:00 AM",
        colour:"green",
    },
    {
        time:"10:00 AM TO 11:00 AM",
        colour:"green",
    },
    {
        time:"11:00 AM TO 12:00 AM",
        colour:"green",
    },
    {
        time:"12:00 PM TO 01:00 PM",
        colour:"green",
    },
    {
        time:"01:00 PM TO 02:00 PM",
        colour:"green",
    },
    {
        time:"02:00 PM TO 03:00 PM",
        colour:"green",
    },
    {
        time:"03:00 PM TO 04:00 PM",
        colour:"green",
    },
    {
        time:"04:00 PM TO 05:00 PM",
        colour:"green", 
    },
    {
        time:"05:00 PM TO 06:00 PM",
        colour:"green",
    },
    {
        time:"06:00 PM TO 07:00 PM",
        colour:"red",
    },
    {
        time:"07:00 PM TO 08:00 PM",
        colour:"red",
    },
    {
        time:"08:00 PM TO 09:00 PM",
        colour:"red",
    },
    {
        time:"09:00 PM TO 10:00 PM",
        colour:"red",
    }
];
function radio() {
    document.getElementById("slots_time").innerHTML="";
    timeslot.forEach(element => {
        div=document.createElement("div");
        inp=document.createElement("input");
        inp.setAttribute("type","radio");
        inp.setAttribute("name","timing");
        label=document.createElement("label");
        label.innerText=element.time;
        div.style.backgroundColor=element.colour;
        div.style.height="45px";
        div.append(inp,label);

        document.getElementById("slots_time").append(div);
        
    });
    getotp=document.createElement("button");
        getotp.innerText="Generate OTP"
        getotp.setAttribute=("id","Getotp");
        document.getElementById("OTP").innerHTML=""
        document.getElementById("OTP").append(getotp);
        getotp.addEventListener("click",function (){
            city=document.getElementById("cities_list").value;
            store=document.getElementById("store_list").value;
            date=document.getElementById("Give_date").value;
            mob=document.getElementById("mobile_inp").value;
            if(city.length==0){
                alert("Select cities");
            }else if(store.length==0){
                alert("Select store")
            }else if(date.length==0){
                alert("select date");
            }else if(mob.length==0){
                alert("Please give 10 digit valid mobile number");
            }else{
                message=document.createElement("h5");
                message.innerText="Otp successfully send and valid for 3 minutes only.";
                message.style.color="green";
                entering=document.createElement("h5");
                entering.innerText="Enter OTP:*";
                entering.style.color="brown";
                input_otp=document.createElement("input");
                btn=document.createElement("button");
                btn.innerText="Confirm Booking";
                btn.addEventListener("click",function (){
                    if(input_otp.value.length!=0){
                        alert("You booking slot confirmed");
                        head=document.createElement("h2");
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
