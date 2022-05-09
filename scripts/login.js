
let signUpArr = JSON.parse(localStorage.getItem("signUpData")) || [];

document.querySelector("#form").addEventListener("submit",signUp);

    function signUp() {
        event.preventDefault();
        let signObj = {
            name: document.getElementById("name").value,
            contact: document.getElementById("contact").value,
            email: document.getElementById("email").value,
            pass: document.getElementById("pass").value,
        };
        // console.log(signObj)
        signUpArr.push(signObj);
        console.log(signUpArr)

        //adding data to the local storage
        localStorage.setItem("signUpData", JSON.stringify(signUpArr))
    }



    //for login page
    document.querySelector("#form1").addEventListener("submit", logIn)

    let loginData = JSON.parse(localStorage.getItem("signUpData"));
    console.log("loginDAta.....",loginData)

    function logIn() {
        event.preventDefault();
        console.log("inside function")

        let enteredEmail = document.querySelector("#email1").value;
        let enteredPass = document.querySelector("#pass1").value;
        //console.log(enteredEmail, enteredPass)
    let  isLoginSuccses = false;
        for (let i = 0; i < loginData.length; i++) {
            console.log("login DAta",loginData[i]);
            if (
                loginData[i].email == enteredEmail &&
                loginData[i].pass == enteredPass
            ) {
            isLoginSuccses = true;
                alert("Login Success");
                window.location.href = "index.html";
                break;
            }
               }
       if(isLoginSuccses==false){
        alert("Invalid Credintials");
       } 
    }

