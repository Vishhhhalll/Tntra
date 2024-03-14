function saveData(){

    let errorMsg = document.querySelector(".errorMsg");
    let email =  document.getElementById("email").value;
    let psw =  document.getElementById("psw").value;

    let emailError = document.getElementById("emailError")
    let passwordError = document.getElementById("passwordError")

    if(!email){
        emailError.textContent = "Enter your email!"
        return false;
    }else{
        emailError.textContent = ""
        true;
    }
    if(!psw){
        passwordError.textContent = "Enter your password!"
        return false;
    }else{
        passwordError.textContent = ""
        true;
    }
   

    let data = new Array();

    data= JSON.parse( localStorage.getItem("users")) || [];

    if(data.some((v) => {return v.email==email && v.psw==psw}))
    {
        
        window.location.href="dashboard.html"
    } else{
        
        errorMsg.innerHTML = "Please check the details properly!";
    }
    
   

    localStorage.setItem("current-user", email) 

    
}


